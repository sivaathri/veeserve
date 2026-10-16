import React from 'react';

export default function CountriesSection() {
  const destinations = [
    {
      name: 'UK',
      image: '/assets/images/uk-london.jpg',
      waText: 'Can I get more details on UK visa process',
    },
    {
      name: 'USA',
      image: '/assets/images/usa.jpg',
      waText: 'Can I get more details on US visa process',
    },
    {
      name: 'Canada',
      image: '/assets/images/canada.jpg',
      waText: 'Can I get more details on Canada visa process',
    },
    {
      name: 'Australia',
      image: '/assets/images/australia.jpg',
      waText: 'Can I get more details on Australia visa process',
    },
    {
      name: 'Schengen',
      image: '/assets/images/schengen.jpg',
      waText: 'Can I get more details on Schengen visa process',
    },
    {
      name: 'Turkey',
      image: '/assets/images/turkey.jpg',
      waText: 'Can I get more details on Turkey visa process',
    },
    {
      name: 'Japan',
      image: '/assets/images/japan.jpg',
      waText: 'Can I get more details on Japan visa process',
    },
    {
      name: 'China',
      image: '/assets/images/china.jpg',
      waText: 'Can I get more details on China visa process',
    },
  ];

  return (
    <section className="schengen-section" id="countries">
      <div className="header">
        <span className="tag">Countries</span>
        <h2>
          Wherever You're Going <br />
          <em>We've Helped People Get There</em>
        </h2>
        <p>
          We serve more than 55+ countries across the world. Choose your destination from the list.
          Rest assured with our business visa consultant in Dubai.
        </p>
      </div>

      <div className="card-grid">
        {destinations.map((dest) => (
          <a
            key={dest.name}
            href={`https://wa.me/971509434364?text=${encodeURIComponent(dest.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="destination-card"
            aria-label={`Apply for ${dest.name} Visa via WhatsApp`}
          >
            <img src={dest.image} alt={dest.name} loading="lazy" />
            <div className="card-overlay">
              <h3>{dest.name}</h3>
              <span className="glass-btn">WhatsApp →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
