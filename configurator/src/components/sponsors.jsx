const Sponsors = () => {
  const sponsors = [
    { name: "NVIDIA", image: "/placeholder.svg?height=80&width=200" },
    { name: "HyperX", image: "/placeholder.svg?height=80&width=200" },
    { name: "Samsung", image: "/placeholder.svg?height=80&width=200" },
    { name: "Intel", image: "/placeholder.svg?height=80&width=200" },
    { name: "AMD", image: "/placeholder.svg?height=80&width=200" },
  ];

  return (
    <div className="sponsors">
      <div className="container">
        <h2 className="sponsors-title">Our Partners</h2>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-logo">
              <img
                src={sponsor.image || "/placeholder.svg"}
                alt={sponsor.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
