import React, { useState, useEffect } from "react";
import axios from "axios";

const Allphotos = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects/photos");
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    setSelectedImage(photos[currentIndex === 0 ? photos.length - 1 : currentIndex - 1].images[0]);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    setSelectedImage(photos[currentIndex === photos.length - 1 ? 0 : currentIndex + 1].images[0]);
  };

  if (!photos.length) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 mt-20">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-gray-200">
        Our Photos
      </h2>
      <p className="text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-8">
        Explore our collection of photos showcasing our work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => {
              setSelectedImage(photo.images[0]);
              setCurrentIndex(index);
            }}
          >
            <img src={photo.images[0]} alt={`Photo ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <button
              className="absolute top-0 right-0 m-4 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              &#10005;
            </button>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
              onClick={handlePrevImage}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
              onClick={handleNextImage}
            >
              &#10095;
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Allphotos;
