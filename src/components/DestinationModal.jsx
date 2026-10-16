import React, { useState } from 'react';

export const ALL_COUNTRIES = [
  { name: 'United Kingdom', flag: '🇬🇧', link: 'https://veeserve.ae/uk-visa-from-dubai/' },
  { name: 'USA', flag: '🇺🇸', link: 'https://veeserve.ae/us-visa-from-dubai/' },
  { name: 'Canada', flag: '🇨🇦', link: 'https://veeserve.ae/canada/' },
  { name: 'France', flag: '🇫🇷', link: 'https://veeserve.ae/france-visa-from-dubai/' },
  { name: 'Brazil', flag: '🇧🇷', link: 'https://veeserve.ae/brazil-visa-from-dubai/' },
  { name: 'New Zealand', flag: '🇳🇿', link: 'https://veeserve.ae/new-zealand-visa-from-dubai/' },
  { name: 'Australia', flag: '🇦🇺', link: 'https://veeserve.ae/australia/' },
  { name: 'Ireland', flag: '🇮🇪', link: 'https://veeserve.ae/ireland/' },
  { name: 'Cyprus', flag: '🇨🇾', link: 'https://veeserve.ae/cyprus/' },
  { name: 'Schengen', flag: '🇪🇺', link: 'https://veeserve.ae/schengen/' },
  { name: 'South Africa', flag: '🇿🇦', link: 'https://veeserve.ae/south-africa/' },
  { name: 'Turkey', flag: '🇹🇷', link: 'https://veeserve.ae/turkey/' },
  { name: 'Japan', flag: '🇯🇵', link: 'https://veeserve.ae/japan/' },
  { name: 'South Korea', flag: '🇰🇷', link: 'https://veeserve.ae/south-korea/' },
  { name: 'China', flag: '🇨🇳', link: 'https://veeserve.ae/china-visa-from-dubai/' },
  { name: 'Singapore', flag: '🇸🇬', link: 'https://veeserve.ae/singapore/' },
  { name: 'Thailand', flag: '🇹🇭', link: 'https://veeserve.ae/thailand/' },
  { name: 'Indonesia', flag: '🇮🇩', link: 'https://veeserve.ae/indonesia/' },
  { name: 'Malaysia', flag: '🇲🇾', link: 'https://veeserve.ae/malaysia/' },
];

export default function DestinationModal({ isOpen, onClose, onSelectCountry }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = ALL_COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`country-popup ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target.classList.contains('country-popup')) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="popup-box">
        <div className="popup-header">
          <h3 id="modal-title">Select Destination</h3>
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close country selection popup"
          >
            ✕
          </button>
        </div>
        <div className="popup-search-box">
          <input
            type="text"
            placeholder="Search destination country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
        <div className="country-list">
          {filtered.length > 0 ? (
            filtered.map((c) => (
              <a
                key={c.name}
                href={`https://wa.me/971509434364?text=Hi%2C%20I%20am%20interested%20in%20a%20visa%20for%20${encodeURIComponent(c.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="country-row"
                onClick={() => {
                  if (onSelectCountry) onSelectCountry(c);
                  onClose();
                }}
              >
                <span>{c.name}</span>
                <span>{c.flag}</span>
              </a>
            ))
          ) : (
            <div style={{ padding: '24px', textAlign: 'center', color: '#888' }}>
              No countries match "{searchTerm}". You can still contact us directly!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
