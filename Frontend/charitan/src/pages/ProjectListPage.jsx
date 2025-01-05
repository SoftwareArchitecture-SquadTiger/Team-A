import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/navigationBar';
import PageBanner from '../components/pageBanner';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dtyc0iz95'
  }
});

const ProjectList = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
      script.async = true;
      script.onload = () => {
        console.log('Cloudinary script loaded');
      };
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  const handleUpload = () => {
    if (window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: 'dtyc0iz95',
          uploadPreset: 'unsignedPreset',
          apiKey: '136267292197893',
          apiSecret: 'LsSff9stcAI5HmZW2HlDAySZsE8',
          sources: ['local', 'url', 'camera'],
          multiple: false,
          cropping: true,
          croppingAspectRatio: 1,
          showSkipCropButton: false,
          folder: 'testPreset/images/',
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            setImageUrl(result.info.secure_url);
          }
        }
      );
    } else {
      console.error('Cloudinary script not loaded');
    }
  };

  return (
    <div>
      <NavigationBar />
      <PageBanner />
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && (
        <>
          <AdvancedImage cldImg={cld.image(imageUrl.split('/').slice(7).join('/').replace('.png', ''))} alt="Uploaded Image" style={{ maxWidth: '100%', height: 'auto' }} />
          <p>{imageUrl.split('/').slice(7).join('/').replace('.png', '')}</p> {/* Display the extracted part of the imageUrl on the screen */}
        </>
      )}
    </div>
    </div>
  );
};

export default ProjectList;