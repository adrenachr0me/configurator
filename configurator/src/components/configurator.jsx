import React, { useEffect } from "react";
import "../index.css";
import { useLocation } from "react-router-dom";
import Header from "./header";
import ConfigMain from "./config-main";
import Footer from "./footer";
import ButtonCart from "./cart-button";

function Configurator({
  config,
  setConfig,
  prebuildConfig,
  setPrebuildConfig,
}) {
  const location = useLocation();
  const statePrebuild = location.state?.prebuildConfig;

  useEffect(() => {
    if (statePrebuild) {
      setPrebuildConfig(statePrebuild);
      setConfig(statePrebuild.components);
    }
  }, [statePrebuild, setPrebuildConfig, setConfig]);

  return (
    <div>
      <Header />
      <ConfigMain
        config={config}
        setConfig={setConfig}
        prebuildConfig={prebuildConfig}
        setPrebuildConfig={setPrebuildConfig}
      />
      <ButtonCart config={config} />
      <Footer />
    </div>
  );
}

export default Configurator;
