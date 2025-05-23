import React, { useState } from 'react';
import './Gallery.css';

import dp from '../assets/dp.png';

import sketch1 from '../assets/sketch1.jpg';
import sketch2 from '../assets/sketch2.jpg';
import sketch3 from '../assets/sketch3.jpg';
import sketch4 from '../assets/sketch4.jpg';
import sketch5 from '../assets/sketch5.jpg';
import sketch6 from '../assets/sketch6.jpg';
import sketch7 from '../assets/sketch7.jpg';
import sketch8 from '../assets/sketch8.jpg';
import sketch9 from '../assets/sketch9.jpg';
import sketch10 from '../assets/sketch10.jpg';
import sketch11 from '../assets/sketch11.jpg';
import sketch16 from '../assets/sketch16.jpg';
import sketch17 from '../assets/sketch17.jpg';
import sketch18 from '../assets/sketch18.jpg';
import sketch19 from '../assets/sketch19.jpg';
import sketch20 from '../assets/sketch20.jpg';
import sketch21 from '../assets/sketch21.jpg';
import sketch22 from '../assets/sketch22.jpg';
import sketch23 from '../assets/sketch23.jpg';
import sketch24 from '../assets/sketch24.jpg';
import sketch25 from '../assets/sketch25.jpg';
import sketch26 from '../assets/sketch26.jpg';
import sketch27 from '../assets/sketch27.jpg';
import sketch28 from '../assets/sketch28.jpg';
import sketch29 from '../assets/sketch29.jpg';
import sketch30 from '../assets/sketch30.jpg';
import sketch31 from '../assets/sketch31.jpg';
import sketch32 from '../assets/sketch32.jpg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [modalImage, setModalImage] = useState(null);

  const imageSketches = [
    { title: 'Lord Krishna And Radha Eyes', image: sketch1 },
    { title: 'Wave Painting', image: sketch2 },
    { title: 'Traditional Eyes Sketch', image: sketch3 },
    { title: 'Ship Sunset Painting', image: sketch4 },
    { title: 'UP Movie Pencil Sketch', image: sketch5 },
    { title: 'Ocean on Canvas', image: sketch6 },
    { title: 'Birthday Cake Watercolor', image: sketch7 },
    { title: 'Lotus Flower Painting', image: sketch8 },
    { title: 'Tirupati Balaji Mandala Art', image: sketch9 },
    { title: 'Forest Girl Painting', image: sketch10 },
    { title: 'Abstract Water Splash', image: sketch11 },
    { title: 'The Lord Shiva Pencil Art', image: sketch16 },
    { title: 'The Man Painting', image: sketch17 },
    { title: 'Ship SunSet in Beach', image: sketch18 },
    { title: 'The Fight With Snake', image: sketch19 },
    { title: 'Traditonal Dance Sketch', image: sketch20 },
    { title: 'Sai Baba Art', image: sketch21 },
    { title: 'Flower Pencil Sketch', image: sketch22 },
    { title: 'The Boy Hair Style Art', image: sketch23 },
    { title: 'The Beautiful Forest in Deer Art', image: sketch24 },
    { title: 'The Birds Sketch', image: sketch25 },
    { title: 'Village Nature Sketch', image: sketch26 },
    { title: 'Shiva Art', image: sketch27 },
    { title: 'Radha Krishna Mandala', image: sketch28 },
    { title: 'Peacock Art', image: sketch29 },
    { title: 'Animal Love With Human Sketch', image: sketch30 },
    { title: 'Lord Krishna', image: sketch31 },
    { title: 'The Man With Sad Sketch', image: sketch32 },
  ];

  const videoLinks = [
    { title: 'Sketch Video 1', url: 'https://www.youtube.com/embed/R4kEPuKBagg?si=4hVgHgmJUmjUfcsF' },
    { title: 'Sketch Video 2', url: 'https://www.youtube.com/embed/bVEbkSstztQ?si=p6GI6ZwatXRGDYAA' },
    { title: 'Sketch Video 3', url: 'https://www.youtube.com/embed/Mw8VoLAXfM4?si=SsoXwypE-swU6Inz' },
    { title: 'Sketch Video 4', url: 'https://www.youtube.com/embed/oQP5zD9gmVs?si=rGFGa-ghX-hpZkWc' },
  ];

const shorts = [
  { title: 'Short 1', url: 'https://www.youtube.com/embed/WLGha_gmcc8' },
  { title: 'Short 2', url: 'https://www.youtube.com/embed/0aVehEcaBLI' },
  { title: 'Short 3', url: 'https://www.youtube.com/embed/ffOehaeMoDs' },
  { title: 'Short 4', url: 'https://www.youtube.com/embed/n0oufLXGTWw' },
  { title: 'Short 5', url: 'https://www.youtube.com/embed/0GmySQ9BOrk' },
  { title: 'Short 6', url: 'https://www.youtube.com/embed/bLBnuwz07T4' },
  { title: 'Short 7', url: 'https://www.youtube.com/embed/T1yzC7yBJ2w' },
  { title: 'Short 8', url: 'https://www.youtube.com/embed/8cybTAPkJvY' },
  { title: 'Short 9', url: 'https://www.youtube.com/embed/5OPVGTcl2tA' },
  { title: 'Short 10', url: 'https://www.youtube.com/embed/wfPNG0IjY98' },
  { title: 'Short 11', url: 'https://www.youtube.com/embed/T2gPeIHRqu8' },
  { title: 'Short 12', url: 'https://www.youtube.com/embed/xpbUgPsGERk' },
  { title: 'Short 13', url: 'https://www.youtube.com/embed/7FIguJXBQBg' },
  { title: 'Short 14', url: 'https://www.youtube.com/embed/2W-4XJUMQr0' },
  { title: 'Short 15', url: 'https://www.youtube.com/embed/b_jEimodgbQ' },
  { title: 'Short 16', url: 'https://www.youtube.com/embed/okdnDmSvpGc' },
  { title: 'Short 17', url: 'https://www.youtube.com/embed/6tJWqQXDQ_Q' },
  { title: 'Short 18', url: 'https://www.youtube.com/embed/30ZX6b0ufCk' },
  { title: 'Short 19', url: 'https://www.youtube.com/embed/o4A8WBivfRw' },
  { title: 'Short 20', url: 'https://www.youtube.com/embed/BQbQlNPtYAY' },
];

  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <img src={dp} alt="Profile" className="profile-pic" />
        <h2 className="username">@snap_to_sketch</h2>
      </div>

      <div className="gallery-tabs">
        <button
          className={activeTab === 'images' ? 'active' : ''}
          onClick={() => setActiveTab('images')}
        >
          🖼️ Images
        </button>
        <button
          className={activeTab === 'videos' ? 'active' : ''}
          onClick={() => setActiveTab('videos')}
        >
          🎥 Videos
        </button>
        <button
          className={activeTab === 'shorts' ? 'active' : ''}
          onClick={() => setActiveTab('shorts')}
        >
          📱 Shorts
        </button>
      </div>

      <div className="gallery-grid">
        {activeTab === 'images' &&
          imageSketches.map((sketch, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={sketch.image}
                alt={sketch.title}
                className="card-image"
                onClick={() => setModalImage(sketch.image)}
              />
              <h3 className="card-title">{sketch.title}</h3>
            </div>
          ))}

        {activeTab === 'videos' &&
          videoLinks.map((video, index) => (
            <div className="gallery-card" key={index}>
              <iframe
                src={video.url}
                title={video.title}
                className="video-frame"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="card-title">{video.title}</h3>
            </div>
          ))}

        {activeTab === 'shorts' &&
          shorts.map((short, index) => (
            <div className="gallery-card" key={index}>
              <iframe
                src={short.url}
                title={short.title}
                className="video-frame"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="card-title">{short.title}</h3>
            </div>
          ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <img
            src={modalImage}
            alt="Full preview"
            className="modal-content"
            onClick={handleModalClick}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
