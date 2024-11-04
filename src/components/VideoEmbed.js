import React from 'react';

const VideoEmbed = () => {

  const embedUrl = `https://www.youtube.com/watch?v=5yX4gH7uHE0&t=2s`;

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={embedUrl}
        title="YouTube Video"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default VideoEmbed;
