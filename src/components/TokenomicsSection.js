import React from 'react';

const TokenomicsSection = ({ textRefs, elementsRef }) => {
  console.log('TokenomicsSection rendering'); // Debug log
  const tokenomicsData = [
    { label: 'Airdrop', value: '40% (40M $GRIT)' },
    { label: 'Liquidity', value: '25% (25M $GRIT)' },
    { label: 'Staking and hold rewards', value: '10% (10M $GRIT)' },
    { label: 'Team', value: '20% (20M $GRIT)' },
    { label: 'Marketing and project development', value: '5% (5M $GRIT)' },
  ];

  return (
    <section id="tokenomics" className="section tokenomics-section">
      <div className="tokenomics-container">
        <div className="tokenomics-header">
          <h2
            className="section-title slide-from-left"
            ref={(el) => (textRefs.current[6] = el)}
            style={{ animationDelay: '0s' }}
          >
            Tokenomics
          </h2>
        </div>
        <div className="tokenomics-cards">
          {tokenomicsData.map((item, index) => (
            <div
              key={index}
              className="tokenomics-card glow-card scale-up"
              ref={(el) => (elementsRef.current[index + 1] = el)}
              data-speed="0.05"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="card-content">
                <span className="card-label">{item.label}</span>
                <span className="card-value">{item.value}</span>
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;