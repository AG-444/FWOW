import React from "react";
import "./App.css";


const App = () => {
  // Generate 30 random image URLs from Picsum
  const images = Array.from({ length: 30 }, (_, index) => `https://picsum.photos/300?random=${index}`);

  return (
    <div className="app"
    style={{
      backgroundImage: "url('/images/luxa.org-opacity-changed-._ferraribglargeredit.jpg')",
      
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      backgroundPosition: "center",
    }}>
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
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image} alt={`Random Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Next year is our year, right? </p>
      </footer>
    </div>
  );
};

export default App;
