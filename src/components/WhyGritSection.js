import React from 'react';

const WhyGritSection = ({ textRefs, elementsRef }) => {
  const features = [
    { title: 'Perspective blockchain', description: 'Meet the $GRIT token on the Solana Blockchain', speed: '0.05' },
    { title: 'Staking and Hold Rewards', description: 'Earn passive income through staking and holding $GRIT', speed: '0.07' },
    { title: 'Powerful community', description: 'Governance rights for token holders', speed: '0.09' },
  ];

  return (
    <section id="why-grit" className="section why-section">
      <h2
        className="section-title slide-from-left pulse-animation"
        ref={(el) => (textRefs.current[7] = el)}
        style={{ animationDelay: '0s' }}
      >
        Why $GRIT?
      </h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card fade-in-up"
            ref={(el) => (elementsRef.current[index + 6] = el)}
            data-speed={feature.speed}
            style={{ animationDelay: `${0.2 + index * 0.2}s` }} // Staggered delay
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyGritSection;