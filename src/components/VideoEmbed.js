import React from 'react';

const VideoEmbed = () => {



  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/watch?v=5yX4gH7uHE0&t=2s"
        title="Video de YouTube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: '2px solid #008080', marginBottom: '1rem' }}
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
