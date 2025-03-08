import React from 'react';

const PresaleSection = ({
  walletConnected,
  setWalletConnected,
  tokenAmount,
  setTokenAmount,
  tokenType,
  setTokenType,
  setNotificationVisible,
  textRefs,
  elementsRef,
}) => {
  const connectWallet = () => setWalletConnected(true);

  const handlePresale = () => {
    if (!tokenAmount || Number(tokenAmount) === 0) {
      setNotificationVisible(true);
      setTimeout(() => setNotificationVisible(false), 3000);
      return;
    }
    const cost = tokenAmount * 0.01;
    console.log(`Purchasing ${tokenAmount} $GRIT for ${cost} ${tokenType}`);
  };

  const getCost = () => (tokenAmount * 0.01).toFixed(2) || '0.00';

  const handleTokenAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && !isNaN(value))) {
      setTokenAmount(value);
    }
  };

  return (
    <section id="presale" className="section presale-section">
      <h2
        className="section-title slide-from-left"
        ref={(el) => (textRefs.current[0] = el)}
        style={{ animationDelay: '0s' }}
      >
        $GRIT Presale
      </h2>
      <p
        className="section-subtitle slide-from-right"
        ref={(el) => (textRefs.current[1] = el)}
        style={{ animationDelay: '0.2s' }}
      >
        Join the revolution on Solana Blockchain
      </p>
      <div
        className="presale-container fade-in-up"
        ref={(el) => (elementsRef.current[0] = el)}
        data-speed="0.1"
        style={{ animationDelay: '0.4s' }}
      >
        <div className="stats">
          <p className="stats-text" ref={(el) => (textRefs.current[2] = el)}>
            Total Supply: 100,000,000 $GRIT
          </p>
          <p className="stats-text" ref={(el) => (textRefs.current[3] = el)}>
            Presale Price: 0.01 {tokenType}
          </p>
          <p className="stats-text" ref={(el) => (textRefs.current[4] = el)}>
            Hard Cap: 1,000,000 {tokenType}
          </p>
        </div>
        {!walletConnected ? (
          <button className="connect-btn animate-btn wave-effect" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <div className="purchase-section">
            <div className="token-selector">
              <button
                className={`token-btn ${tokenType === 'USDT' ? 'active' : ''} animate-btn`}
                onClick={() => setTokenType('USDT')}
              >
                USDT
              </button>
              <button
                className={`token-btn ${tokenType === 'USDC' ? 'active' : ''} animate-btn`}
                onClick={() => setTokenType('USDC')}
              >
                USDC
              </button>
            </div>
            <div className="input-group">
              <input
                type="number"
                value={tokenAmount}
                onChange={handleTokenAmountChange}
                placeholder="Enter $GRIT amount"
                className="amount-input animate-input"
                min="0"
                step="1"
              />
              <span className="cost-display animate-cost" ref={(el) => (textRefs.current[5] = el)}>
                Cost: {getCost()} {tokenType}
              </span>
            </div>
            <button
              className="buy-btn animate-btn wave-effect"
              onClick={handlePresale}
              onMouseEnter={(e) => {
                e.target.style.setProperty('--wave-x', e.nativeEvent.offsetX);
                e.target.style.setProperty('--wave-y', e.nativeEvent.offsetY);
              }}
            >
              Buy {tokenAmount || 0} $GRIT
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PresaleSection;