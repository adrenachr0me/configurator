import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

function ConfigMain({ config, setConfig, prebuildConfig }) {
  const [componentsData, setComponentsData] = useState({
    cpus: [],
    gpus: [],
    rams: [],
    motherboards: [],
    storage: [],
    cases: [],
    coolers: [],
    powers: [],
  });

  const api = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          cpusRes,
          gpusRes,
          ramsRes,
          motherboardsRes,
          storageRes,
          casesRes,
          coolersRes,
          powersRes,
        ] = await Promise.all([
          api.get("/cpus"),
          api.get("/gpus"),
          api.get("/rams"),
          api.get("/motherboards"),
          api.get("/storage"),
          api.get("/cases"),
          api.get("/cooler"),
          api.get("/power"),
        ]);

        setComponentsData({
          cpus: cpusRes.data,
          gpus: gpusRes.data,
          rams: ramsRes.data,
          motherboards: motherboardsRes.data,
          storage: storageRes.data,
          cases: casesRes.data,
          coolers: coolersRes.data,
          powers: powersRes.data,
        });
      } catch (error) {
        console.error("Ошибка при загрузке данных компонентов:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (prebuildConfig && prebuildConfig.components) {
      const {
        cpu,
        gpu,
        ram,
        motherboard,
        storage,
        case: pcCase,
        cooler,
        power,
      } = prebuildConfig.components;

      setConfig({
        cpu,
        gpu,
        ram,
        motherboard,
        storage,
        case: pcCase,
        cooler,
        power,
      });
    }
  }, [prebuildConfig, setConfig]);

  const handleOptionChange = (option, value) => {
    const selectedComponent = componentsData[`${option}s`].find(
      (item) => item._id === value
    );

    setConfig((prev) => ({
      ...prev,
      [option]: selectedComponent,
    }));
  };

  const renderSelectRow = (label, optionKey, dataKey) => (
    <tr>
      <td>{label}</td>
      <td>
        <select
          value={config[optionKey]?._id || ""}
          onChange={(e) => handleOptionChange(optionKey, e.target.value)}
        >
          <option value="" disabled>
            Choose your option {label}
          </option>
          {componentsData[dataKey].map((item) => (
            <option key={item._id} value={item._id}>
              {item.brand} {item.model} {item.price}$
            </option>
          ))}
        </select>
      </td>
      <td>
        <button
          onClick={() => {
            console.log(`${label} выбран:`, config[optionKey]);
          }}
        >
          Confirm your choice
        </button>
      </td>
    </tr>
  );

  return (
    <div className="config-main">
      <h1>Build your own PC</h1>
      <p>Choose your components</p>
      <table className="config-table">
        <tbody>
          {renderSelectRow("Processor", "cpu", "cpus")}
          {renderSelectRow("Videocard", "gpu", "gpus")}
          {renderSelectRow("RAM", "ram", "rams")}
          {renderSelectRow("Motherboard", "motherboard", "motherboards")}
          {renderSelectRow("Storage", "storage", "storage")}
          {renderSelectRow("Power supply", "power", "powers")}
          {renderSelectRow("Case", "case", "cases")}
          {renderSelectRow("Cooler", "cooler", "coolers")}
        </tbody>
      </table>
    </div>
  );
}

export default ConfigMain;
