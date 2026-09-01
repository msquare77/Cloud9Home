import React, { useEffect, useState } from 'react';

const OCEAN_BG = new URL('../../assets/splash/splash-ocean.webp', import.meta.url).href;
const CLOUD9_MARK = new URL('../../assets/cloud9-mark.png', import.meta.url).href;
const CLOUD_1 = new URL('../../assets/splash/cloud-1.png', import.meta.url).href;
const CLOUD_2 = new URL('../../assets/splash/cloud-2.png', import.meta.url).href;
const CLOUD_3 = new URL('../../assets/splash/cloud-3.png', import.meta.url).href;
const CLOUD_4 = new URL('../../assets/splash/cloud-4.png', import.meta.url).href;
const CLOUD_5 = new URL('../../assets/splash/cloud-5.png', import.meta.url).href;
const CLOUD_6 = new URL('../../assets/splash/cloud-6.png', import.meta.url).href;
const CLOUD_7 = new URL('../../assets/splash/cloud-7.png', import.meta.url).href;
const CLOUD_8 = new URL('../../assets/splash/cloud-8.png', import.meta.url).href;

interface CloudPlacement {
  src: string;
  top: string;
  left: string;
  width: string;
  rotate: number;
  duration: number;
  delay: number;
}

const CLOUDS: CloudPlacement[] = [
  { src: CLOUD_1, top: '6%', left: '50%', width: '62%', rotate: -3, duration: 9, delay: 0 },
  { src: CLOUD_7, top: '18%', left: '85%', width: '30%', rotate: 8, duration: 8, delay: 0.4 },
  { src: CLOUD_2, top: '44%', left: '96%', width: '26%', rotate: -6, duration: 10, delay: 0.8 },
  { src: CLOUD_8, top: '70%', left: '88%', width: '27%', rotate: 10, duration: 7.5, delay: 0.2 },
  { src: CLOUD_4, top: '93%', left: '55%', width: '23%', rotate: -4, duration: 9.5, delay: 0.6 },
  { src: CLOUD_3, top: '80%', left: '14%', width: '27%', rotate: 6, duration: 8.5, delay: 1 },
  { src: CLOUD_6, top: '50%', left: '2%', width: '17%', rotate: -8, duration: 7, delay: 0.3 },
  { src: CLOUD_5, top: '20%', left: '9%', width: '13%', rotate: 4, duration: 8, delay: 0.9 },
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
    }, 900);
  };

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[300] overflow-hidden transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        closing ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden={closing}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={OCEAN_BG}
          alt=""
          className="w-full h-full object-cover animate-splash-kenburns"
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(14,16,53,0.82) 0%, rgba(14,16,53,0.62) 38%, rgba(14,16,53,0.15) 62%, rgba(14,16,53,0) 72%)',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[min(92vw,760px)] h-[min(92vw,760px)]">
          {[0, 1, 2].map((ring) => (
            <span
              key={ring}
              className="absolute inset-0 m-auto w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-white/30 animate-splash-ripple"
              style={{ animationDelay: `${ring * 1.3}s` }}
            />
          ))}

          {CLOUDS.map((cloud, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: cloud.top,
                left: cloud.left,
                width: cloud.width,
                transform: `translate(-50%, -50%) rotate(${cloud.rotate}deg)`,
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
                }}
              />
            </div>
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <img
              src={CLOUD9_MARK}
              alt="Cloud 9 Travels"
              className="w-16 sm:w-20 h-auto mb-5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] animate-splash-fade-in"
            />
            <span
              className="font-signature text-3xl sm:text-4xl md:text-5xl text-white select-none animate-splash-fade-in"
              style={{ animationDelay: '0.15s' }}
            >
              Let yourself be transported
            </span>
            <button
              type="button"
              onClick={handleEnter}
              className="mt-9 px-8 py-3.5 bg-[#14ABFA] hover:bg-white text-[#0E1035] text-xs font-black uppercase tracking-widest transition-colors cursor-pointer animate-splash-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Discover Cloud 9
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
