'use client';

import dynamic from 'next/dynamic';

const MapClientComponent = dynamic(() => import('./MapClientComponent'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        borderRadius: '16px',
      }}
    >
      <p style={{ color: '#64748b', fontWeight: 500 }}>Carregando mapa de unidades...</p>
    </div>
  ),
});

export default function MapComponent() {
  return <MapClientComponent />;
}
