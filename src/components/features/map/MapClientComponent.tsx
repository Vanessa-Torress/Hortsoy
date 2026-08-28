'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, Search } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import '@/components/features/map/MapComponent.css';
import { filiais, type Filial } from '@/data/filiais';

function MapUpdater({ activeBranch, filteredBranches }: { activeBranch?: Filial; filteredBranches: Filial[] }) {
  const map = useMap();
  const hasActiveBranchRef = useRef(false);

  useEffect(() => {
    if (activeBranch) {
      hasActiveBranchRef.current = true;
      map.flyTo([activeBranch.lat, activeBranch.lng], 13.5, {
        animate: true,
        duration: 2,
        easeLinearity: 0.25,
      });
      return;
    }

    if (filteredBranches.length > 0) {
      const bounds = L.latLngBounds(filteredBranches.map((branch) => [branch.lat, branch.lng] as [number, number]));
      map.flyToBounds(bounds.pad(0.18), {
        animate: true,
        duration: 2.4,
        padding: [22, 22],
        maxZoom: 8,
        easeLinearity: 0.3,
      });
      hasActiveBranchRef.current = false;
      return;
    }

    map.setView([-19.6, -47.15], 7, {
      animate: true,
      duration: 1.6,
    });
    hasActiveBranchRef.current = false;
  }, [activeBranch, filteredBranches, map]);

  return null;
}

function ZoomListener({ onZoomChange }: { onZoomChange: (zoom: number) => void }) {
  useMapEvents({
    zoomend: (event) => {
      onZoomChange(event.target.getZoom());
    },
  });

  return null;
}

export default function MapClientComponent() {
  const [activeBranchId, setActiveBranchId] = useState<number | null>(null);
  const [currentZoom, setCurrentZoom] = useState(8);
  const markerRefs = useRef<Record<number, L.Marker | null>>({});

  const filteredBranches = useMemo(() => filiais, []);

  const activeBranch = filiais.find((branch) => branch.id === activeBranchId);
  const visibleBranches = filteredBranches.length > 0 ? filteredBranches : filiais;

  useEffect(() => {
    if (!activeBranchId) {
      return;
    }

    const marker = markerRefs.current[activeBranchId];
    if (marker) {
      window.setTimeout(() => {
        marker.openPopup();
      }, 180);
    }
  }, [activeBranchId, currentZoom]);

  const getSidebarTitle = (branch: Filial) => {
    const cityLabel = branch.cidade.split('-')[0].trim();
    const branchLabel = branch.nome.trim();

    if (!cityLabel) return branchLabel || 'Unidade';
    if (!branchLabel) return cityLabel;

    const normalizedCity = cityLabel.toLowerCase();
    const normalizedBranch = branchLabel.toLowerCase();

    if (branchLabel.toLowerCase() === 'csc') {
      return `${cityLabel} CSC`;
    }

    if (normalizedBranch === normalizedCity || normalizedBranch.includes(normalizedCity)) {
      return cityLabel;
    }

    return `${cityLabel} ${branchLabel}`;
  };

  const createIcon = (isActive: boolean) => {
    return L.divIcon({
      className: `custom-marker ${isActive ? 'active-marker' : ''}`,
      html: '<div class="marker-pin"></div>',
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [0, -35],
    });
  };

  return (
    <div className="map-container-wrapper">
      <div className="map-sidebar">
        <div className="map-sidebar-header">
          <div className="map-kicker">Geoprocessamento Visual</div>
          <h3>Unidades Hortsoy</h3>
          <p>Encontre a filial mais próxima de você</p>

          <div className="map-overview">
            <span>{visibleBranches.length} unidades</span>
            <span>{activeBranch ? activeBranch.cidade : 'Visão regional'}</span>
          </div>

          {activeBranchId && (
            <button
              className="reset-map-btn"
              onClick={() => {
                const marker = markerRefs.current[activeBranchId];
                if (marker) {
                  marker.closePopup();
                }
                setActiveBranchId(null);
              }}
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '8px',
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                color: '#475569',
                cursor: 'pointer',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}
            >
              Mostrar todas as filiais
            </button>
          )}
        </div>

        <div
          className="branches-scroll-list"
          data-lenis-prevent="true"
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
        >
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`branch-card ${activeBranchId === branch.id ? 'active' : ''}`}
              onClick={() => setActiveBranchId(branch.id)}
            >
              <h4>{getSidebarTitle(branch)}</h4>
              <p>
                <MapPin size={14} /> {branch.endereco}
              </p>
            </div>
          ))}

          {filteredBranches.length === 0 && (
            <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '20px' }}>
              Nenhuma unidade encontrada.
            </p>
          )}
        </div>
      </div>

      <div className="map-view">
        <MapContainer
          center={[-19.6, -47.15]}
          zoom={7}
          minZoom={4}
          zoomSnap={0.1}
          maxBounds={[
            [-90, -180],
            [90, 180],
          ]}
          maxBoundsViscosity={1.0}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '100%' }}
        >
          <MapUpdater activeBranch={activeBranch} filteredBranches={filteredBranches} />
          <ZoomListener onZoomChange={setCurrentZoom} />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            noWrap={true}
          />

          {visibleBranches.map((branch) => {
            const showTooltip = !activeBranchId && currentZoom <= 9;

            return (
              <Marker
                key={branch.id}
                ref={(marker) => {
                  markerRefs.current[branch.id] = marker;
                }}
                position={[branch.lat, branch.lng]}
                icon={createIcon(activeBranchId === branch.id)}
                eventHandlers={{
                  click: () => setActiveBranchId(branch.id),
                }}
              >
                {showTooltip && (
                  <Tooltip permanent direction="bottom" offset={[0, 8]} className="marker-tooltip">
                    {getSidebarTitle(branch)}
                  </Tooltip>
                )}
                <Popup closeButton={false}>
                  <div className="popup-header">
                    <h4>{getSidebarTitle(branch)}</h4>
                  </div>
                  <div className="popup-body">
                    <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <MapPin size={14} />
                      <span>{branch.endereco}</span>
                    </p>

                    <a href={branch.link} target="_blank" rel="noreferrer" className="btn-route">
                      <Navigation size={14} style={{ display: 'inline', marginBottom: '-2px' }} />
                      Abrir no Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          <MapUpdater activeBranch={activeBranch} filteredBranches={filteredBranches} />
        </MapContainer>
      </div>
    </div>
  );
}
