const BannerSection2 = () => {
  return (
    <div className="banner-image">
      <div className="image-container">
        <div className="glow-effect"></div>
        <div className="image-card">
          <img
            src="/placeholder.svg?height=400&width=500"
            alt="Gaming PC"
            className="w-full h-auto"
          />
          <div className="image-overlay">
            <div className="image-overlay-title">RTX 4080 Gaming PC</div>
            <div className="image-overlay-footer">
              <span className="price">From $1,499.99</span>
              <span className="tag">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection2;
