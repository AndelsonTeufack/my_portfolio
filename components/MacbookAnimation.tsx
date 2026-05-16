// components/MacbookAnimation.tsx
'use client'

import { useEffect, useRef } from 'react'

export default function MacbookAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // L'animation CSS se lance automatiquement
  }, [])

  return (
    <div className="macbook-wrapper" ref={containerRef}>
      <div className="macbook">
        <div className="inner">
          <div className="screen">
            <div className="face-one">
              <div className="camera"></div>
              <div className="display">
                {/* Contenu de l'écran avec texte animé */}
                <div className="screen-content">
                  <div className="screen-line top-line"></div>
                  <div className="text-slide name-slide">
                    <span className="label">Portfolio</span>
                    <h2 className="name">Andelson<br/>TEUFACK</h2>
                  </div>
                  <div className="text-slide role-slide">
                    <span className="label">Role</span>
                    <h2 className="role">FullStack<br/>Developer</h2>
                  </div>
                  <div className="screen-line bottom-line"></div>
                  <div className="screen-dots">
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                  </div>
                  <div className="scanline"></div>
                </div>
                <div className="shade"></div>
              </div>
              <span>MacBook Air</span>
            </div>
          </div>
          <div className="macbody">
            <div className="face-one">
              <div className="touchpad"></div>
              <div className="keyboard">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div key={i} className="key"></div>
                ))}
                <div className="key space"></div>
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={`f-${i}`} className="key f"></div>
                ))}
              </div>
            </div>
            <div className="pad one"></div>
            <div className="pad two"></div>
            <div className="pad three"></div>
            <div className="pad four"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>

      <style jsx>{`
        .macbook-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 80px;
        }

        .macbook {
          width: 200px;
          height: 128px;
          position: relative;
          transform: scale(0.6);
          perspective: 500px;
        }

        @media (min-width: 640px) {
          .macbook { transform: scale(0.8); }
        }
        @media (min-width: 1024px) {
          .macbook { transform: scale(1.0); }
        }

        .shadow {
          position: absolute;
          width: 80px;
          height: 0px;
          left: 60px;
          top: 180px;
          transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
          box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
          animation: shadow infinite 7s ease;
        }

        .inner {
          z-index: 20;
          position: absolute;
          width: 200px;
          height: 128px;
          left: 0;
          top: 0;
          transform-style: preserve-3d;
          transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
          animation: rotate infinite 7s ease;
        }

        .screen {
          width: 200px;
          height: 128px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 9px;
          background: #ddd;
          transform-style: preserve-3d;
          transform-origin: 50% 124px;
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          animation: lid-screen infinite 7s ease;
          background-image: linear-gradient(45deg, rgba(0,0,0,0.34) 0%,rgba(0,0,0,0) 100%);
          background-position: left bottom;
          background-size: 300px 300px;
          box-shadow: inset 0 3px 7px rgba(255,255,255,0.5);
        }

        .screen .face-one {
          width: 200px;
          height: 128px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 9px;
          background: #d3d3d3;
          transform: translateZ(2px);
          background-image: linear-gradient(45deg,rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
        }

        .screen .face-one .camera {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background: #000;
          position: absolute;
          left: 50%;
          top: 5px;
          margin-left: -2px;
        }

        .screen .face-one .display {
          width: 174px;
          height: 98px;
          margin: 13px;
          background-color: #050d1a;
          background-size: 100% 100%;
          border-radius: 1px;
          position: relative;
          box-shadow: inset 0 0 2px rgba(0,0,0,1);
          overflow: hidden;
        }

        /* ── SCREEN CONTENT ── */
        .screen-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #060e1e 100%);
        }

        /* Lignes décoratives */
        .screen-line {
          position: absolute;
          left: 8px;
          right: 8px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.4), transparent);
        }
        .top-line { top: 8px; }
        .bottom-line { bottom: 16px; }

        /* Dots indicateurs */
        .screen-dots {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 4px;
        }
        .dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(96,165,250,0.3);
          transition: background 0.3s ease;
        }
        .dot-1 {
          animation: dot-active 6s infinite 0s;
        }
        .dot-2 {
          animation: dot-active 6s infinite 3s;
        }

        /* Slides de texte */
        .text-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2px;
        }

        .label {
          font-family: 'Courier New', monospace;
          font-size: 4.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(96,165,250,0.6);
          margin-bottom: 3px;
        }

        .name, .role {
          margin: 0;
          text-align: center;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: 0.5px;
        }

        .name {
          font-family: 'Georgia', serif;
          font-size: 13px;
          color: #ffffff;
          text-shadow:
            0 0 8px rgba(96,165,250,0.8),
            0 0 20px rgba(96,165,250,0.3);
        }

        .role {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: 400;
          color: rgba(147,197,253,0.95);
          text-shadow:
            0 0 6px rgba(147,197,253,0.7),
            0 0 15px rgba(96,165,250,0.4);
          letter-spacing: 1px;
        }

        /* Alternance nom → rôle toutes les 3s */
        .name-slide {
          animation: slide-in-out 6s infinite 0s;
        }
        .role-slide {
          animation: slide-in-out 6s infinite 3s;
          opacity: 0;
        }

        /* Effet scanlines subtil */
        .scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.04) 2px,
            rgba(0,0,0,0.04) 4px
          );
          pointer-events: none;
        }

        /* Le shade reste par-dessus pour l'effet de reflet */
        .screen .face-one .display .shade {
          position: absolute;
          left: 0;
          top: 0;
          width: 174px;
          height: 98px;
          background: linear-gradient(-135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 47%,rgba(255,255,255,0) 48%);
          animation: screen-shade infinite 7s ease;
          background-size: 300px 200px;
          background-position: 0px 0px;
          z-index: 10;
          pointer-events: none;
        }

        .screen .face-one span {
          position: absolute;
          top: 113px;
          left: 76px;
          font-size: 8px;
          color: #666;
        }

        /* ── ANIMATIONS TEXTE ── */
        @keyframes slide-in-out {
          0%   { opacity: 0; transform: translateY(4px); }
          5%   { opacity: 1; transform: translateY(0); }
          45%  { opacity: 1; transform: translateY(0); }
          50%  { opacity: 0; transform: translateY(-4px); }
          100% { opacity: 0; transform: translateY(-4px); }
        }

        @keyframes dot-active {
          0%, 49%  { background: rgba(96,165,250,0.8); box-shadow: 0 0 3px rgba(96,165,250,0.6); }
          50%, 100% { background: rgba(96,165,250,0.2); box-shadow: none; }
        }

        /* ── ANIMATIONS MACBOOK ORIGINALES (inchangées) ── */
        .macbody {
          width: 200px;
          height: 128px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 9px;
          background: #cbcbcb;
          transform-style: preserve-3d;
          transform-origin: 50% bottom;
          transform: rotateX(-90deg);
          animation: lid-macbody infinite 7s ease;
          background-image: linear-gradient(45deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
        }

        .macbody .face-one {
          width: 200px;
          height: 128px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 9px;
          transform-style: preserve-3d;
          background: #dfdfdf;
          animation: lid-keyboard-area infinite 7s ease;
          transform: translateZ(-2px);
          background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
        }

        .macbody .touchpad {
          width: 54px;
          height: 42px;
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 5px;
          margin: -59px 0 0 -24px;
          background: #cdcdcd;
          background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
          box-shadow: inset 0 0 3px #888;
        }

        .macbody .keyboard {
          width: 174px;
          height: 60px;
          position: absolute;
          left: 9px;
          top: 55px;
          border-radius: 5px;
          transform-style: preserve-3d;
          background: #cdcdcd;
          background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
          box-shadow: inset 0 0 3px #777;
          padding: 0 0 0 2px;
          display: flex;
          flex-wrap: wrap;
        }

        .keyboard .key {
          width: 8px;
          height: 8px;
          background: #444;
          float: left;
          margin: 1.5px;
          transform: translateZ(-2px);
          border-radius: 2px;
          box-shadow: 0 -2px 0 #222;
          animation: keys infinite 7s ease;
        }

        .key.space { width: 60px; }
        .key.f { height: 4px; }

        .macbody .pad {
          width: 7px;
          height: 7px;
          background: #333;
          border-radius: 100%;
          position: absolute;
        }

        .pad.one   { left: 27px;  top: 27px;    }
        .pad.two   { right: 27px; top: 27px;    }
        .pad.three { right: 27px; bottom: 27px; }
        .pad.four  { left: 27px;  bottom: 27px; }

        /* ── KEYFRAMES ORIGINAUX ── */
        @keyframes rotate {
          0%   { transform: rotateX(-20deg) rotateY(0deg)   rotateZ(0deg); }
          5%   { transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0deg); }
          20%  { transform: rotateX(30deg)  rotateY(200deg) rotateZ(0deg); }
          25%  { transform: rotateX(-60deg) rotateY(150deg) rotateZ(0deg); }
          60%  { transform: rotateX(-20deg) rotateY(130deg) rotateZ(0deg); }
          65%  { transform: rotateX(-20deg) rotateY(120deg) rotateZ(0deg); }
          80%  { transform: rotateX(-20deg) rotateY(375deg) rotateZ(0deg); }
          85%  { transform: rotateX(-20deg) rotateY(357deg) rotateZ(0deg); }
          87%  { transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg); }
          100% { transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg); }
        }

        @keyframes lid-screen {
          0%   { transform: rotateX(0deg);   background-position: left bottom; }
          5%   { transform: rotateX(50deg);  background-position: left bottom; }
          20%  { transform: rotateX(-90deg); background-position: -150px top;  }
          25%  { transform: rotateX(15deg);  background-position: left bottom; }
          30%  { transform: rotateX(-5deg);  background-position: right top;   }
          38%  { transform: rotateX(5deg);   background-position: right top;   }
          48%  { transform: rotateX(0deg);   background-position: right top;   }
          90%  { transform: rotateX(0deg);   background-position: right top;   }
          100% { transform: rotateX(0deg);   background-position: right center; }
        }

        @keyframes lid-macbody {
          0%, 100% { transform: rotateX(-90deg); }
        }

        @keyframes lid-keyboard-area {
          0%   { background-color: #dfdfdf; }
          50%  { background-color: #bbb;    }
          100% { background-color: #dfdfdf; }
        }

        @keyframes screen-shade {
          0%   { background-position: -20px 0px;  }
          5%   { background-position: -40px 0px;  }
          20%  { background-position: 200px 0;    }
          50%  { background-position: -200px 0;   }
          80%  { background-position: 0px 0px;    }
          85%  { background-position: -30px 0;    }
          90%  { background-position: -20px 0;    }
          100% { background-position: -20px 0px;  }
        }

        @keyframes keys {
          0%   { box-shadow: 0 -2px 0 #222;  }
          5%   { box-shadow: 1 -1px 0 #222;  }
          20%  { box-shadow: -1px 1px 0 #222; }
          25%  { box-shadow: -1px 1px 0 #222; }
          60%  { box-shadow: -1px 1px 0 #222; }
          80%  { box-shadow: 0 -2px 0 #222;  }
          85%  { box-shadow: 0 -2px 0 #222;  }
          87%  { box-shadow: 0 -2px 0 #222;  }
          100% { box-shadow: 0 -2px 0 #222;  }
        }

        @keyframes shadow {
          0%   { transform: rotateX(80deg) rotateY(0deg)   rotateZ(0deg);              box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
          5%   { transform: rotateX(80deg) rotateY(10deg)  rotateZ(0deg);              box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
          20%  { transform: rotateX(30deg) rotateY(-20deg) rotateZ(-20deg);            box-shadow: 0 0 50px 30px rgba(0,0,0,0.3); }
          25%  { transform: rotateX(80deg) rotateY(-20deg) rotateZ(50deg);             box-shadow: 0 0 35px 15px rgba(0,0,0,0.1); }
          60%  { transform: rotateX(80deg) rotateY(0deg)   rotateZ(-50deg) translateX(30px); box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
          100% { box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
        }
      `}</style>
    </div>
  )
}