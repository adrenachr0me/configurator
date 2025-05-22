import { Link } from "react-router-dom"

const FeaturedBuilds = () => {
  const builds = [
    {
      id: 1,
      name: "Starter Gaming PC",
      price: "$599.99",
      specs: "RTX 3060, i5-12400F, 16GB RAM",
      image: "/placeholder.svg?height=200&width=300",
      colorClass: "build-blue",
    },
    {
      id: 2,
      name: "Pro Streamer Build",
      price: "$1,299.99",
      specs: "RTX 4070, i7-13700K, 32GB RAM",
      image: "/placeholder.svg?height=200&width=300",
      colorClass: "build-red",
    },
    {
      id: 3,
      name: "Ultimate Gaming Rig",
      price: "$2,499.99",
      specs: "RTX 4090, i9-13900K, 64GB RAM",
      image: "/placeholder.svg?height=200&width=300",
      colorClass: "build-green",
    },
  ]

  return (
    <div className="featured-builds">
      <div className="container">
        <h2 className="section-title">Featured Builds</h2>
        <div className="builds-grid">
          {builds.map((build) => (
            <div key={build.id} className="build-card">
              <div className={`build-image ${build.colorClass}`}>
                <img src={build.image || "/placeholder.svg"} alt={build.name} className="h-32 object-contain" />
              </div>
              <div className="build-content">
                <h3 className="build-title">{build.name}</h3>
                <p className="build-specs">{build.specs}</p>
                <p className="build-price">{build.price}</p>
                <Link to="/configurator" className="customize-button">
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
  )
}

export default FeaturedBuilds
