import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '40px 60px',
            border: '2px solid rgba(255,255,255,0.2)',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
            Life Positive Mission
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.9)' }}>
            Power of Positive Energy
          </div>
          <div
            style={{
              width: '100px',
              height: '4px',
              background: 'white',
              marginTop: '20px',
              borderRadius: '2px',
            }}
          />
          <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', marginTop: '20px' }}>
            Volunteer-driven | Non-Profit | Global Impact
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}