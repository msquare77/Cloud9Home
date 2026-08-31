import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';

interface SocialFeedConfig {
  graphVersion: string;
  facebookPageId: string;
  facebookToken: string;
  instagramUserId: string;
  instagramToken: string;
}

const socialFeedPlugin = (config: SocialFeedConfig): Plugin => ({
  name: 'cloud9-social-feed',
  configureServer(server) {
    server.middlewares.use(async (request, response, next) => {
      if (!request.url?.startsWith('/api/social-feed')) {
        next();
        return;
      }

      const requestUrl = new URL(request.url || '/', 'http://localhost');
      const platform = requestUrl.searchParams.get('platform');
      const isInstagram = platform === 'instagram';
      const accountId = isInstagram ? config.instagramUserId : config.facebookPageId;
      const token = isInstagram ? config.instagramToken : config.facebookToken;

      response.setHeader('Content-Type', 'application/json');
      response.setHeader('Cache-Control', 'public, max-age=300');

      if (!config.graphVersion || !accountId || !token || (platform !== 'instagram' && platform !== 'facebook')) {
        response.statusCode = 503;
        response.end(JSON.stringify({ posts: [], message: 'Live Meta feed credentials are not configured.' }));
        return;
      }

      try {
        const fields = isInstagram
          ? 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count'
          : 'id,message,created_time,permalink_url,full_picture,reactions.summary(true),comments.summary(true)';
        const graphUrl = new URL(`https://graph.facebook.com/${config.graphVersion}/${accountId}/${isInstagram ? 'media' : 'posts'}`);
        graphUrl.searchParams.set('fields', fields);
        graphUrl.searchParams.set('limit', '12');
        graphUrl.searchParams.set('access_token', token);

        const graphResponse = await fetch(graphUrl);
        if (!graphResponse.ok) throw new Error(`Meta Graph API returned ${graphResponse.status}`);

        const graphPayload = await graphResponse.json() as { data?: Array<Record<string, any>> };
        const posts = (graphPayload.data || [])
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

        response.statusCode = 200;
        response.end(JSON.stringify({ posts }));
      } catch (error) {
        response.statusCode = 502;
        response.end(JSON.stringify({
          posts: [],
          message: error instanceof Error ? error.message : 'Unable to load the live social feed.'
        }));
      }
    });
  }
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      socialFeedPlugin({
        graphVersion: env.META_GRAPH_API_VERSION || '',
        facebookPageId: env.META_FACEBOOK_PAGE_ID || '',
        facebookToken: env.META_FACEBOOK_PAGE_ACCESS_TOKEN || '',
        instagramUserId: env.META_INSTAGRAM_USER_ID || '',
        instagramToken: env.META_INSTAGRAM_ACCESS_TOKEN || ''
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {}
    }
  };
});
