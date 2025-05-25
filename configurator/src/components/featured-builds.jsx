import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const FeaturedBuilds = () => {
  const api = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/prebuilds")
      .then((response) => {
        console.log(response.data);
        setBuilds(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("Builds:", builds);
  return (
    <div className="featured-builds" id="builds">
      <div className="container">
        <h2 className="section-title">Featured Builds</h2>
        <div className="builds-grid">
          {builds.map((build) => (
            <div key={build.id} className="build-card">
              <div className={`build-image ${build.colorClass}`}>
                <img
                  src={build.image || "/placeholder.svg"}
                  alt={build.title}
                  className="h-32 object-contain"
                />
              </div>
              <div className="build-content">
                <h3 className="build-title">{build.title}</h3>
                <p className="build-specs">{build.specs}</p>
                <p className="build-price">{`${build.price}$`}</p>
                <ul>
                  <li>
                    CPU: {build.components.cpu.brand}{" "}
                    {build.components.cpu.model}
                  </li>
                  <li>
                    GPU: {build.components.gpu.brand}{" "}
                    {build.components.gpu.model}
                  </li>
                  <li>
                    Cooler: {build.components.cooler.brand}{" "}
                    {build.components.cooler.model}
                  </li>
                  <li>
                    Motherboard: {build.components.motherboard.brand}{" "}
                    {build.components.motherboard.model}
                  </li>
                  <li>
                    RAM: {build.components.ram.brand}{" "}
                    {build.components.ram.model}{" "}
                    {build.components.ram.capacityGB}GB
                  </li>
                  <li>
                    Storage: {build.components.storage.brand}{" "}
                    {build.components.storage.model}{" "}
                    {build.components.storage.capacityGB}GB
                  </li>
                  <li>
                    PSU: {build.components.psu.brand}{" "}
                    {build.components.psu.model} {build.components.psu.wattage}W
                  </li>
                  <li>
                    Case: {build.components.case.brand}{" "}
                    {build.components.case.model}{" "}
                  </li>
                </ul>
                <Link
                  to="/configurator"
                  state={{ prebuildConfig: build }}
                  className="customize-button"
                >
                  Customize
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBuilds;
