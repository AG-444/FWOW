import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically load images from the public/radioMessages folder
    const fetchImages = async () => {
      // Assuming directory listing is enabled on your server
      const response = await fetch('/radioMessages/');
      const html = await response.text();

      // Parse HTML to extract image file names
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const imageElements = Array.from(doc.querySelectorAll('a'));
      
      // Filter and map valid image URLs
      const imagePaths = imageElements
        .map((el) => el.href)
        .filter((path) => path.endsWith('.jpg') || path.endsWith('.png') || path.endsWith('.jpeg'));

      setImages(imagePaths);
    };

    fetchImages();
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundImage: "url('/images/luxa.org-opacity-changed-._ferraribglargeredit.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <header className="header">
        <div className="website-name">
          <h1>Forza Ferrari</h1>
        </div>
        <div className="submission-link">
          <a href="https://forms.gle/LNJuwDAxMhXmPCui8" className="user-submissions-link">
            Submit more!
          </a>
        </div>
      </header>

      {/* Paragraph */}
      <p className="forza-ferrari">Ferrari Words of Wisdom.</p>

      {/* Main Content */}
      <main className="main-content">
        <div className="image-gallery">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div className="image-item" key={index}>
                <img src={image} alt={`Radio Message ${index + 1}`} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Next year is our year, right?</p>
      </footer>
    </div>
  );
};

export default App;
