import React, { useEffect, useRef } from 'react';

const Notification = ({ message, setVisible }) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [setVisible]);

  return (
    <div
      ref={notificationRef}
      className={`notification ${true ? 'show' : 'hide'}`}
    >
      {message}
    </div>
  );
};

export default Notification;