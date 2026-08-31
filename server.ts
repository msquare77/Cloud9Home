import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3001);

app.get('/api/social-feed', async (request, response) => {
  const platform = request.query.platform;
  const isInstagram = platform === 'instagram';
  const graphVersion = process.env.META_GRAPH_API_VERSION || '';
  const accountId = isInstagram ? process.env.META_INSTAGRAM_USER_ID : process.env.META_FACEBOOK_PAGE_ID;
  const token = isInstagram ? process.env.META_INSTAGRAM_ACCESS_TOKEN : process.env.META_FACEBOOK_PAGE_ACCESS_TOKEN;

  response.setHeader('Cache-Control', 'public, max-age=300');

  if (!graphVersion || !accountId || !token || (platform !== 'instagram' && platform !== 'facebook')) {
    response.status(503).json({ posts: [], message: 'Live Meta feed credentials are not configured.' });
    return;
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
          permalink: String(item.permalink || item.permalink_url || '')
        };
      })
      .filter((post) => post.imageUrl);

    response.json({ posts });
  } catch (error) {
    response.status(502).json({
      posts: [],
      message: error instanceof Error ? error.message : 'Unable to load the live social feed.'
    });
  }
});

app.use(express.static(path.join(rootDirectory, 'dist')));
app.get('*', (_request, response) => {
  response.sendFile(path.join(rootDirectory, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Cloud 9 website available at http://localhost:${port}`);
});
