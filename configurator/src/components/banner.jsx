import BannerSection1 from "./banner-section1";
import BannerSection2 from "./banner-section2";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container banner-container">
        <BannerSection1 />
        <BannerSection2 />
      </div>
    </div>
  );
};

export default Banner;
