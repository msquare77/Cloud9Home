import React, { useEffect, useState } from 'react';
import { SplashRippleBackground } from './SplashRippleBackground';

const OCEAN_BG = new URL('../../assets/splash/splash-ocean.webp', import.meta.url).href;
const CLOUD9_FULL_LOGO = new URL('../../assets/splash/cloud9-full-logo.png', import.meta.url).href;
const CLOUD_1 = new URL('../../assets/splash/cloud-1.png', import.meta.url).href;
const CLOUD_2 = new URL('../../assets/splash/cloud-2.png', import.meta.url).href;
const CLOUD_3 = new URL('../../assets/splash/cloud-3.png', import.meta.url).href;
const CLOUD_4 = new URL('../../assets/splash/cloud-4.png', import.meta.url).href;
const CLOUD_5 = new URL('../../assets/splash/cloud-5.png', import.meta.url).href;
const CLOUD_6 = new URL('../../assets/splash/cloud-6.png', import.meta.url).href;
const CLOUD_7 = new URL('../../assets/splash/cloud-7.png', import.meta.url).href;
const CLOUD_8 = new URL('../../assets/splash/cloud-8.png', import.meta.url).href;

const CIRCLE_CLIP = 'circle(min(25vw, 30vh) at 50% 50%)';

interface CloudPlacement {
  src: string;
  left: string;
  bottom: string;
  width: string;
  rotate: number;
  duration: number;
  delay: number;
  exitDuration: number;
  exitDelay: number;
  exitRise: number;
  exitDrift: number;
}

const BOTTOM_CLOUDS: CloudPlacement[] = [
  { src: CLOUD_1, left: '50%', bottom: '-4%', width: '58%', rotate: -1, duration: 9, delay: 0, exitDuration: 1.6, exitDelay: 0.05, exitRise: 100, exitDrift: -2 },
  { src: CLOUD_7, left: '10%', bottom: '2%', width: '32%', rotate: 4, duration: 8, delay: 0.3, exitDuration: 1.3, exitDelay: 0.15, exitRise: 108, exitDrift: 3 },
  { src: CLOUD_8, left: '88%', bottom: '0%', width: '28%', rotate: -5, duration: 7.5, delay: 0.6, exitDuration: 1.45, exitDelay: 0.25, exitRise: 104, exitDrift: -3 },
  { src: CLOUD_3, left: '30%', bottom: '11%', width: '20%', rotate: 3, duration: 8.5, delay: 0.9, exitDuration: 1.2, exitDelay: 0.35, exitRise: 112, exitDrift: 4 },
  { src: CLOUD_4, left: '70%', bottom: '9%', width: '18%', rotate: -3, duration: 9.5, delay: 0.2, exitDuration: 1.55, exitDelay: 0.1, exitRise: 102, exitDrift: -4 },
  { src: CLOUD_2, left: '97%', bottom: '-6%', width: '24%', rotate: 5, duration: 10, delay: 0.5, exitDuration: 1.35, exitDelay: 0.3, exitRise: 106, exitDrift: 2 },
  { src: CLOUD_6, left: '2%', bottom: '-5%', width: '13%', rotate: -6, duration: 7, delay: 0.8, exitDuration: 1.15, exitDelay: 0.4, exitRise: 110, exitDrift: -5 },
  { src: CLOUD_5, left: '46%', bottom: '17%', width: '9%', rotate: 2, duration: 8, delay: 1.1, exitDuration: 1.25, exitDelay: 0.45, exitRise: 114, exitDrift: 5 },
  { src: CLOUD_1, left: '20%', bottom: '-8%', width: '34%', rotate: 2, duration: 9.2, delay: 0.5, exitDuration: 1.4, exitDelay: 0.2, exitRise: 103, exitDrift: -6 },
  { src: CLOUD_7, left: '62%', bottom: '-6%', width: '26%', rotate: -3, duration: 8.3, delay: 0.7, exitDuration: 1.5, exitDelay: 0.12, exitRise: 109, exitDrift: 6 },
  { src: CLOUD_8, left: '40%', bottom: '5%', width: '20%', rotate: 4, duration: 7.8, delay: 0.15, exitDuration: 1.3, exitDelay: 0.32, exitRise: 107, exitDrift: -3.5 },
  { src: CLOUD_3, left: '78%', bottom: '8%', width: '18%', rotate: -2, duration: 8.7, delay: 0.95, exitDuration: 1.18, exitDelay: 0.42, exitRise: 111, exitDrift: 3.5 },
];

interface SplashScreenProps {
  onEnter?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = hidden ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [hidden]);

  const handleEnter = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(() => {
      setHidden(true);
      onEnter?.();
    }, 1800);
  };

  useEffect(() => {
    const autoAdvance = window.setTimeout(() => {
      handleEnter();
    }, 2600);
    return () => window.clearTimeout(autoAdvance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[300] overflow-hidden cursor-pointer"
      aria-hidden={closing}
      onClick={handleEnter}
    >
      {/* Background + circle + content: this layer fades away in place, revealing the homepage underneath */}
      <div
        className={`absolute inset-0 bg-[#0E1035] ${closing ? 'pointer-events-none' : ''}`}
        style={{
          clipPath: closing ? 'inset(0 0 100% 0)' : 'inset(0 0 0% 0)',
          transition: closing ? 'clip-path 1650ms ease-in-out' : 'none',
        }}
      >
        <SplashRippleBackground imageUrl={OCEAN_BG} className="absolute inset-0" />

        <div className="absolute inset-0 bg-[#0E1035]/60" style={{ clipPath: CIRCLE_CLIP }} />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[min(55vw,65vh)] h-[min(55vw,65vh)]">
            {[0, 1, 2].map((ring) => (
              <span
                key={ring}
                className="absolute inset-0 m-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/30 animate-splash-ripple"
                style={{ animationDelay: `${ring * 1.3}s` }}
              />
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <img
                src={CLOUD9_FULL_LOGO}
                alt="Cloud 9 Travels"
                className="w-16 sm:w-36 md:w-40 h-auto mb-2 sm:mb-6 brightness-0 invert drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] animate-splash-fade-in"
              />
              <span
                className="font-signature text-sm leading-tight sm:text-3xl md:text-4xl sm:leading-normal text-white select-none animate-splash-fade-in"
                style={{ animationDelay: '0.15s' }}
              >
                Let yourself be transported
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEnter();
                }}
                className="mt-2 sm:mt-12 pb-1 text-[9px] sm:text-xs font-black uppercase tracking-widest text-white hover:text-[#14ABFA] border-b-2 border-white/70 hover:border-[#14ABFA] transition-colors cursor-pointer animate-splash-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                Discover Cloud 9
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Clouds: stay fully opaque and simply fly upward past the top of the screen, uncovering whatever is beneath them */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] pointer-events-none">
        <div
          className="absolute inset-x-0 bottom-0 h-[26vh] bg-gradient-to-t from-white via-white/70 to-transparent"
          style={{
            transform: closing ? 'translateY(-115vh)' : 'translateY(0)',
            transition: closing ? 'transform 1.5s ease-in-out 0.1s' : 'none',
          }}
        />
        {BOTTOM_CLOUDS.map((cloud, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: cloud.left,
              bottom: cloud.bottom,
              width: cloud.width,
              transform: closing
                ? `translateX(calc(-50% + ${cloud.exitDrift}vw)) translateY(-${cloud.exitRise}vh) rotate(${cloud.rotate + cloud.exitDrift}deg)`
                : `translateX(-50%) translateY(0) rotate(${cloud.rotate}deg)`,
              transition: closing ? `transform ${cloud.exitDuration}s ease-in-out ${cloud.exitDelay}s` : 'none',
            }}
          >
            <img
              src={cloud.src}
              alt=""
              aria-hidden="true"
              className="w-full h-auto animate-splash-float"
              style={{
                animationDuration: `${cloud.duration}s`,
                animationDelay: `${cloud.delay}s`,
                animationPlayState: closing ? 'paused' : 'running',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
