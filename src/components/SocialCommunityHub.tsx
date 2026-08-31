import React, { useEffect, useRef, useState } from 'react';
import { SOCIAL_POSTS } from '../data/cruiseData';

const InstagramIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={`${className} shrink-0 fill-current`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838A6.162 6.162 0 1 0 12 18.163 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
);

const FacebookIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={`${className} shrink-0 fill-current`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={`${className} shrink-0 fill-current`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 21.5a9.46 9.46 0 0 1-4.825-1.319l-.346-.205-3.587.941.957-3.497-.225-.359A9.455 9.455 0 0 1 2.5 12.004 9.504 9.504 0 1 1 12.004 21.5m0-21.5A12 12 0 0 0 1.676 18.114L0 24l6.033-1.582A12 12 0 1 0 12.004 0" />
  </svg>
);

interface PreviewPost {
  id: string;
  imageUrl: string;
  location: string;
  caption: string;
  engagement: string;
}

const previewSource = SOCIAL_POSTS.filter((post) => post.platform !== 'TikTok');

const INSTAGRAM_DEMO: PreviewPost[] = previewSource.map((post, index) => ({
  id: `instagram-${post.id}-${index}`,
  imageUrl: post.imageUrl,
  location: post.location,
  caption: post.caption,
  engagement: `${128 + index * 47} likes`
}));

const FACEBOOK_DEMO: PreviewPost[] = [...previewSource].reverse().map((post, index) => ({
  id: `facebook-${post.id}-${index}`,
  imageUrl: post.imageUrl,
  location: post.location,
  caption: post.caption,
  engagement: `${18 + index * 9} reactions · ${4 + index * 3} comments`
}));

interface SocialJournalProps {
  platform: 'Facebook' | 'Instagram';
  handle: string;
  href: string;
  posts: PreviewPost[];
  background: string;
  foreground: string;
}

const SocialJournal: React.FC<SocialJournalProps> = ({
  platform,
  handle,
  href,
  posts,
  background,
  foreground
}) => {
  const railRef = useRef<HTMLDivElement>(null);
  const isFacebook = platform === 'Facebook';
  const [displayPosts, setDisplayPosts] = useState(posts);
  const [usingLiveFeed, setUsingLiveFeed] = useState(false);

  useEffect(() => {
    let active = true;

    const loadLivePosts = async () => {
      try {
        const response = await fetch(`/api/social-feed?platform=${platform.toLowerCase()}`);
        if (!response.ok) return;
        const payload = await response.json() as { posts?: PreviewPost[] };
        if (active && payload.posts?.length) {
          setDisplayPosts(payload.posts);
          setUsingLiveFeed(true);
        }
      } catch {
        // The curated preview remains visible until Meta credentials are configured.
      }
    };

    loadLivePosts();
    return () => { active = false; };
  }, [platform]);

  const moveRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * Math.max(280, railRef.current.clientWidth * 0.72),
      behavior: 'smooth'
    });
  };

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden bg-[#F1F6FD]">
      <div
        className="flex min-h-[210px] flex-col justify-between p-7 sm:p-9"
        style={{ backgroundColor: background, color: foreground }}
      >
        <div>
          <div className="flex items-center gap-3">
            {isFacebook ? <FacebookIcon className="h-8 w-8" /> : <InstagramIcon className="h-8 w-8" />}
            <h3 className="text-3xl font-bold leading-tight" style={{ color: foreground }}>{platform}</h3>
          </div>
          <p className="mt-3 text-sm font-semibold opacity-70">{handle}</p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="card-action-link mt-7"
          style={{ color: foreground }}
        >
          Open {platform}
        </a>
      </div>

      <div className="min-w-0 p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="mr-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0E1035]/48">
              {usingLiveFeed ? 'Live updates' : 'Latest preview'}
            </p>
            <p className="mt-1 text-sm font-medium text-[#0E1035]">Scroll to follow the journey</p>
          </div>
          <button
            type="button"
            onClick={() => moveRail(-1)}
            aria-label={`Previous ${platform} posts`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-normal text-[#0E1035] transition-transform hover:-translate-x-1 cursor-pointer"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => moveRail(1)}
            aria-label={`Next ${platform} posts`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-normal text-[#0E1035] transition-transform hover:translate-x-1 cursor-pointer"
          >
            →
          </button>
        </div>

        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-2 scrollbar-none"
          tabIndex={0}
          aria-label={`Scrollable ${platform} preview`}
        >
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className="min-w-[270px] snap-start overflow-hidden rounded-[18px] bg-white sm:min-w-[310px] lg:min-w-[78%]"
            >
              <img
                src={post.imageUrl}
                alt={`${platform} travel post from ${post.location}`}
                className="h-52 w-full object-cover sm:h-60"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#14ABFA]">{post.location}</p>
                <p className="mt-3 line-clamp-3 text-xs font-normal leading-relaxed text-[#0E1035]/72">{post.caption}</p>
                <p className="mt-4 text-[10px] font-medium text-[#0E1035]/48">{post.engagement}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
};

export const SocialCommunityHub: React.FC = () => (
  <section id="socials-section" className="bg-white py-20 sm:py-28">
    <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="max-w-4xl">
          <span className="font-signature block select-none text-3xl text-[#14ABFA] sm:text-4xl">
            Stories from near and far
          </span>
          <h2 className="editorial-title mt-1 text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
            FOLLOW THE JOURNEY
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[#0E1035]/70 sm:text-base">
            Destination inspiration, ship discoveries, resort moments, and practical travel ideas shared by the Cloud 9 community.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:justify-end">
          <a
            href="https://instagram.com/cloud9cruises"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E1035] transition-colors hover:text-[#4136EA]"
          >
            <InstagramIcon className="h-5 w-5 text-[#4136EA]" />
            Instagram
          </a>
          <a
            href="https://facebook.com/groups/cloud9cruisegroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E1035] transition-colors hover:text-[#1877F2]"
          >
            <FacebookIcon className="h-5 w-5 text-[#1877F2]" />
            Facebook
          </a>
          <a
            href="https://wa.me/17135607016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E1035] transition-colors hover:text-[#25D366]"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
            (713) 560-7016
          </a>
        </div>
      </div>

      <div className="mt-12 grid items-stretch gap-7 sm:mt-16 lg:grid-cols-2">
        <SocialJournal
          platform="Facebook"
          handle="Cloud 9 Cruise Community"
          href="https://facebook.com/groups/cloud9cruisegroup"
          posts={FACEBOOK_DEMO}
          background="#14ABFA"
          foreground="#0E1035"
        />
        <SocialJournal
          platform="Instagram"
          handle="@cloud9cruises"
          href="https://instagram.com/cloud9cruises"
          posts={INSTAGRAM_DEMO}
          background="#4136EA"
          foreground="#FFFFFF"
        />
      </div>
    </div>
  </section>
);
