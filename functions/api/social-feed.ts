interface Env {
  META_GRAPH_API_VERSION?: string;
  META_INSTAGRAM_USER_ID?: string;
  META_INSTAGRAM_ACCESS_TOKEN?: string;
  META_FACEBOOK_PAGE_ID?: string;
  META_FACEBOOK_PAGE_ACCESS_TOKEN?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  });

export const onRequestGet = async ({ request, env }: PagesContext): Promise<Response> => {
  const url = new URL(request.url);
  const platform = url.searchParams.get('platform');
  const isInstagram = platform === 'instagram';
  const graphVersion = env.META_GRAPH_API_VERSION || '';
  const accountId = isInstagram ? env.META_INSTAGRAM_USER_ID : env.META_FACEBOOK_PAGE_ID;
  const token = isInstagram ? env.META_INSTAGRAM_ACCESS_TOKEN : env.META_FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!graphVersion || !accountId || !token || (platform !== 'instagram' && platform !== 'facebook')) {
    return json({ posts: [], message: 'Live Meta feed credentials are not configured.' }, 503);
  }

  try {
    const fields = isInstagram
      ? 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count'
      : 'id,message,created_time,permalink_url,full_picture,reactions.summary(true),comments.summary(true)';
    const graphUrl = new URL(`https://graph.facebook.com/${graphVersion}/${accountId}/${isInstagram ? 'media' : 'posts'}`);
    graphUrl.searchParams.set('fields', fields);
    graphUrl.searchParams.set('limit', '12');
    graphUrl.searchParams.set('access_token', token);

    const graphResponse = await fetch(graphUrl);
    if (!graphResponse.ok) throw new Error(`Meta Graph API returned ${graphResponse.status}`);

    const payload = await graphResponse.json() as { data?: Array<Record<string, any>> };
    const posts = (payload.data || [])
      .map((item, index) => {
        const reactions = item.reactions?.summary?.total_count || 0;
        const comments = isInstagram ? item.comments_count || 0 : item.comments?.summary?.total_count || 0;
        const likes = item.like_count || reactions;
        return {
          id: String(item.id || `${platform}-${index}`),
          imageUrl: String(item.media_url || item.thumbnail_url || item.full_picture || ''),
          location: isInstagram ? 'Instagram · Cloud 9 Travels' : 'Facebook · Cloud 9 Travels',
          caption: String(item.caption || item.message || 'A new travel update from Cloud 9 Travels.'),
          engagement: isInstagram ? `${likes} likes · ${comments} comments` : `${reactions} reactions · ${comments} comments`,
          permalink: String(item.permalink || item.permalink_url || ''),
        };
      })
      .filter((post) => post.imageUrl);

    return json({ posts });
  } catch (error) {
    return json({
      posts: [],
      message: error instanceof Error ? error.message : 'Unable to load the live social feed.',
    }, 502);
  }
};
