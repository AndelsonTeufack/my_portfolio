import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Andelson TEUFACK SONTSA — Développeur Full-Stack & Mobile'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#090a0f',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(14, 165, 233, 0.14), transparent 55%)',
          padding: '64px 72px',
          color: '#f3f4f6',
          fontFamily: 'sans-serif',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontSize: '18px',
                color: '#cbd5e1',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              andelson-teufack.dev
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            Douala, Cameroun
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: '16px',
              color: '#38bdf8',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            DÉVELOPPEUR FULL-STACK & MOBILE
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            Andelson TEUFACK SONTSA
          </div>
          <div
            style={{
              fontSize: '26px',
              fontWeight: 500,
              color: '#cbd5e1',
              maxWidth: '920px',
              lineHeight: 1.35,
            }}
          >
            Applications mobiles offline-first et plateformes web pour le terrain · Kamer Engineering Solution
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              'Flutter',
              'Next.js',
              'FastAPI',
              'PostgreSQL / PostGIS',
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#11131a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
