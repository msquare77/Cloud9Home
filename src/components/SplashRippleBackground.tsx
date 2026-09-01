import { Mesh, Program, Renderer, Texture, Triangle } from 'ogl';
import React, { useEffect, useRef } from 'react';

interface SplashRippleBackgroundProps {
  imageUrl: string;
  className?: string;
}

export const SplashRippleBackground: React.FC<SplashRippleBackgroundProps> = ({ imageUrl, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) });
    const gl = renderer.gl;
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    container.appendChild(gl.canvas);

    const texture = new Texture(gl, { generateMipmaps: false });
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        attribute vec2 uv;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform float uTime;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        varying vec2 vUv;

        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 coverUv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );

          vec2 center = vec2(0.5, 0.58);
          float dist = distance(vUv, center);
          float ripple = sin(dist * 46.0 - uTime * 1.4) * 0.006 * smoothstep(0.75, 0.0, dist);
          vec2 dir = normalize(vUv - center + 0.0001);
          vec2 distortedUv = coverUv + dir * ripple;

          gl_FragColor = texture2D(tMap, distortedUv);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uTime: { value: 0 },
        uImageSizes: { value: [1, 1] },
        uPlaneSizes: { value: [1, 1] },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.uPlaneSizes.value = [width, height];
    };
    window.addEventListener('resize', resize);
    resize();

    let raf = 0;
    let imageReady = false;
    const update = (t: number) => {
      if (imageReady) {
        program.uniforms.uTime.value = t * 0.001;
        renderer.render({ scene: mesh });
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.decode?.()
      .catch(() => {})
      .finally(() => {
        texture.image = img;
        program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
        imageReady = true;
      });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
    };
  }, [imageUrl]);

  return (
    <div className={className}>
      <img src={imageUrl} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};
