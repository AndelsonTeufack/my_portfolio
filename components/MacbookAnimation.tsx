'use client'

import { useEffect, useRef } from 'react'

export default function MacbookAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

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
                    <span className="label">Obsidian Shell v2.6</span>
                    <h2 className="name">Andelson<br/>TEUFACK</h2>
                  </div>
                  <div className="text-slide role-slide">
                    <span className="label">Engine</span>
                    <h2 className="role">Spring & React<br/>Architect</h2>
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
          min-height: 160px;
          padding: 1rem 0;
        }

        .macbook {
          width: 200px;
          height: 128px;
          position: relative;
          transform: scale(0.8);
          perspective: 500px;
        }

        @media (min-width: 640px) {
          .macbook { transform: scale(1.0); }
        }
        @media (min-width: 1024px) {
          .macbook { transform: scale(1.15); }
        }

        .shadow {
          position: absolute;
          width: 80px;
          height: 0px;
          left: 60px;
          top: 180px;
          transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
          box-shadow: 0 0 60px 40px rgba(0,240,255,0.25);
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
          background: #333;
          transform-style: preserve-3d;
          transform-origin: 50% 124px;
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          animation: lid-screen infinite 7s ease;
          box-shadow: inset 0 3px 7px rgba(255,255,255,0.3);
        }

        .screen .face-one {
          width: 200px;
          height: 128px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 9px;
          background: #111;
          transform: translateZ(2px);
        }

        .screen .face-one .camera {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background: #00f0ff;
          position: absolute;
          left: 50%;
          top: 5px;
          margin-left: -2px;
          box-shadow: 0 0 5px #00f0ff;
        }

        .screen .face-one .display {
          width: 174px;
          height: 98px;
          margin: 13px;
          background-color: #030308;
          border-radius: 2px;
          position: relative;
          box-shadow: inset 0 0 4px rgba(0,0,0,1);
          overflow: hidden;
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .screen-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: radial-gradient(circle at center, #0a0f1d 0%, #030308 100%);
        }

        .screen-line {
          position: absolute;
          left: 8px;
          right: 8px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,240,255,0.4), transparent);
        }
        .top-line { top: 8px; }
        .bottom-line { bottom: 16px; }

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
          background: rgba(0,240,255,0.3);
        }
        .dot-1 { animation: dot-active 6s infinite 0s; }
        .dot-2 { animation: dot-active 6s infinite 3s; }

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
          font-family: 'JetBrains Mono', monospace;
          font-size: 5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(0, 240, 255, 0.8);
          margin-bottom: 2px;
        }

        .name, .role {
          margin: 0;
          text-align: center;
          font-weight: 700;
          line-height: 1.15;
        }

        .name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          color: #ffffff;
          text-shadow: 0 0 10px rgba(0, 240, 255, 0.8);
        }

        .role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #a855f7;
          text-shadow: 0 0 8px rgba(168, 85, 247, 0.8);
        }

        .name-slide { animation: slide-in-out 6s infinite 0s; }
        .role-slide { animation: slide-in-out 6s infinite 3s; opacity: 0; }

        .scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.1) 2px,
            rgba(0,0,0,0.1) 4px
          );
          pointer-events: none;
        }

        .screen .face-one .display .shade {
          position: absolute;
          left: 0;
          top: 0;
          width: 174px;
          height: 98px;
          background: linear-gradient(-135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.08) 47%,rgba(255,255,255,0) 48%);
          animation: screen-shade infinite 7s ease;
          z-index: 10;
          pointer-events: none;
        }

        .screen .face-one span {
          position: absolute;
          top: 113px;
          left: 76px;
          font-size: 7px;
          color: #888;
          font-family: monospace;
        }

        @keyframes slide-in-out {
          0%   { opacity: 0; transform: translateY(4px); }
          5%   { opacity: 1; transform: translateY(0); }
          45%  { opacity: 1; transform: translateY(0); }
          50%  { opacity: 0; transform: translateY(-4px); }
          100% { opacity: 0; transform: translateY(-4px); }
        }

        @keyframes dot-active {
          0%, 49%  { background: rgba(0,240,255,0.9); box-shadow: 0 0 4px rgba(0,240,255,0.8); }
          50%, 100% { background: rgba(0,240,255,0.2); box-shadow: none; }
        }

        .macbody {
          width: 200px;
          height: 128px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 9px;
          background: #222;
          transform-style: preserve-3d;
          transform-origin: 50% bottom;
          transform: rotateX(-90deg);
          animation: lid-macbody infinite 7s ease;
        }

        .macbody .face-one {
          width: 200px;
          height: 128px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 9px;
          transform-style: preserve-3d;
          background: #1a1a1a;
          transform: translateZ(-2px);
        }

        .macbody .touchpad {
          width: 54px;
          height: 42px;
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 5px;
          margin: -59px 0 0 -24px;
          background: #282828;
          box-shadow: inset 0 0 3px #111;
        }

        .macbody .keyboard {
          width: 174px;
          height: 60px;
          position: absolute;
          left: 9px;
          top: 55px;
          border-radius: 5px;
          transform-style: preserve-3d;
          background: #111;
          box-shadow: inset 0 0 3px #000;
          padding: 0 0 0 2px;
          display: flex;
          flex-wrap: wrap;
        }

        .keyboard .key {
          width: 8px;
          height: 8px;
          background: #000;
          float: left;
          margin: 1.5px;
          border-radius: 2px;
          box-shadow: 0 -1px 0 #333;
        }

        .key.space { width: 60px; }
        .key.f { height: 4px; }

        .macbody .pad {
          width: 7px;
          height: 7px;
          background: #111;
          border-radius: 100%;
          position: absolute;
        }

        .pad.one   { left: 27px;  top: 27px;    }
        .pad.two   { right: 27px; top: 27px;    }
        .pad.three { right: 27px; bottom: 27px; }
        .pad.four  { left: 27px;  bottom: 27px; }

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
          0%   { transform: rotateX(0deg); }
          5%   { transform: rotateX(50deg); }
          20%  { transform: rotateX(-90deg); }
          25%  { transform: rotateX(15deg); }
          30%  { transform: rotateX(-5deg); }
          38%  { transform: rotateX(5deg); }
          48%  { transform: rotateX(0deg); }
          100% { transform: rotateX(0deg); }
        }

        @keyframes lid-macbody {
          0%, 100% { transform: rotateX(-90deg); }
        }

        @keyframes screen-shade {
          0%   { background-position: -20px 0px;  }
          50%  { background-position: -200px 0;   }
          100% { background-position: -20px 0px;  }
        }

        @keyframes shadow {
          0%   { transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg); box-shadow: 0 0 60px 40px rgba(0,240,255,0.25); }
          100% { box-shadow: 0 0 60px 40px rgba(0,240,255,0.25); }
        }
      `}</style>
    </div>
  )
}