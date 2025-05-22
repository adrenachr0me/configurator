import { Link } from "react-router-dom";

const BannerSection1 = () => {
  return (
    <div className="text-banner">
      <h1>Thinking about diving in wonderful world of games?</h1>
      <p>Are you looking for the best components and builds at great prices?</p>
      <p>
        Working and gaming stations made with determination and extra love are
        already waiting for you.
      </p>
      <div className="banner-buttons">
        <Link to="/configurator">
          <button className="button-large">
            Get to configurator
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "8px", width: "20px", height: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </Link>
        <Link to="/featured-builds">
          <button className="button-large button-secondary">
            Ready Builds
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerSection1;
