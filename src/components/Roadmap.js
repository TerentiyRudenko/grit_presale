import React from 'react';

const Roadmap = ({ textRefs, elementsRef }) => {
  const roadmapData = [
    {
      phase: 'Q4 2024',
      title: 'Project Launch',
      description: 'Launch the project and start token mining phase',
    },
    {
      phase: 'Q1 2025, January, February',
      title: 'App updates',
      description: 'Release the updates in app for more ways to mine $GRIT',
    },
    {
      phase: 'Q1 2025, March',
      title: '$GRIT presale',
      description: 'Launch $GRIT presale before airdrop and listing',
    },
    {
      phase: 'Q1 2025, March - Q2 2025, April',
      title: 'Airdrop and listing',
      description: 'Start $GRIT airdrop and listing on the exchange',
    },
  ];

  return (
    <section id="roadmap" className="section roadmap-section">
      <h2
  className="section-title slide-from-left"
  ref={(el) => (textRefs.current[9] = el)}
  style={{ animationDelay: '0s' }}
>
  Roadmap
</h2>
      <div className="roadmap-container">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`roadmap-item ${index % 2 === 0 ? 'slide-from-left' : 'slide-from-right'}`}
            ref={(el) => (elementsRef.current[index + 9] = el)}
            data-speed="0.06"
            style={{ animationDelay: `${index * 0.2}s` }} // Staggered delay
          >
            <div className="roadmap-phase">{item.phase}</div>
            <div className="roadmap-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;