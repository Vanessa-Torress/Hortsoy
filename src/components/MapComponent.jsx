import { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap, useMapEvents, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import { Search, MapPin, Phone, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';
import { filiais } from '../data/filiais';

// Componente para centralizar o mapa quando uma filial é clicada
function MapUpdater({ activeBranch }) {
  const map = useMap();
  useEffect(() => {
    if (activeBranch) {
      map.flyTo([activeBranch.lat, activeBranch.lng], 14, {
        duration: 1.5,
      });
    } else {
      map.flyTo([-19.6, -47.15], 8, {
        duration: 1.5,
      });
    }
  }, [activeBranch, map]);
  return null;
}

// Componente para escutar mudanças de zoom
function ZoomListener({ onZoomChange }) {
  useMapEvents({
    zoomend: (e) => {
      onZoomChange(e.target.getZoom());
    },
  });
  return null;
}

export default function MapComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBranchId, setActiveBranchId] = useState(null);
  const [currentZoom, setCurrentZoom] = useState(8);

  // Filtragem das filiais
  const filteredBranches = useMemo(() => {
    return filiais.filter(branch =>
      branch.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.cidade.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const activeBranch = filiais.find(b => b.id === activeBranchId);

  // Ícones personalizados
  const createIcon = (isActive) => {
    return L.divIcon({
      className: `custom-marker ${isActive ? 'active-marker' : ''}`,
      html: `<div class="marker-pin"></div>`,
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [0, -35]
    });
  };

  return (
    <div className="map-container-wrapper">

      {/* Sidebar com a lista */}
      <div className="map-sidebar">
        <div className="map-sidebar-header">
          <h3>Unidades Hortsoy</h3>
          <p>Encontre a filial mais próxima de você</p>

          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Buscar por cidade ou nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {(activeBranchId || searchTerm) && (
            <button
              className="reset-map-btn"
              onClick={() => {
                setActiveBranchId(null);
                setSearchTerm('');
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
                transition: 'all 0.2s'
              }}
            >
              Mostrar todas as filiais
            </button>
          )}
        </div>

        <div
          className="branches-scroll-list"
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {filteredBranches.map(branch => (
            <div
              key={branch.id}
              className={`branch-card ${activeBranchId === branch.id ? 'active' : ''}`}
              onClick={() => setActiveBranchId(branch.id)}
            >
              <h4>{branch.nome}</h4>
              <p><MapPin /> {branch.cidade}</p>
              <p><Phone /> {branch.telefone}</p>
            </div>
          ))}
          {filteredBranches.length === 0 && (
            <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '20px' }}>Nenhuma unidade encontrada.</p>
          )}
        </div>
      </div>

      {/* Visualizador do Mapa */}
      <div className="map-view">
        <MapContainer
          center={[-19.6, -47.15]}
          zoom={8}
          minZoom={4}
          maxBounds={[[-90, -180], [90, 180]]}
          maxBoundsViscosity={1.0}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomListener onZoomChange={setCurrentZoom} />
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Mapa Padrão">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                noWrap={true}
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Visão de Satélite">
              <TileLayer
                attribution='Tiles &copy; Esri'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                noWrap={true}
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          {filiais.map(branch => {
            const showTooltip = !activeBranchId && currentZoom <= 8;
            return (
            <Marker
              key={branch.id}
              position={[branch.lat, branch.lng]}
              icon={createIcon(activeBranchId === branch.id)}
              eventHandlers={{
                click: () => setActiveBranchId(branch.id),
              }}
            >
              {showTooltip && (
                <Tooltip 
                  permanent 
                  direction="bottom" 
                  offset={[0, 15]} 
                  className="marker-tooltip"
                >
                  {branch.nome}
                </Tooltip>
              )}
              <Popup closeButton={false}>
                <div className="popup-header">
                  <h4>{branch.nome}</h4>
                </div>
                <div className="popup-body">
                  <p><MapPin size={14} /> {branch.endereco}</p>
                  <p style={{ marginLeft: '22px' }}>{branch.cidade}</p>
                  <p><Phone size={14} /> {branch.telefone}</p>

                  <div style={{ marginTop: '12px', borderRadius: '10px', overflow: 'hidden', height: '120px' }}>
                    <iframe
                      title={`Satélite - ${branch.nome}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      src={`https://maps.google.com/maps?q=${branch.lat},${branch.lng}&t=k&z=19&ie=UTF8&iwloc=&output=embed`}
                    ></iframe>
                  </div>

                  <a href={branch.link} target="_blank" rel="noreferrer" className="btn-route">
                    <Navigation size={14} style={{ display: 'inline', marginBottom: '-2px' }} /> Traçar Rota
                  </a>
                </div>
              </Popup>
            </Marker>
            );
          })}

          <MapUpdater activeBranch={activeBranch} />
        </MapContainer>
      </div>

    </div>
  );
}
