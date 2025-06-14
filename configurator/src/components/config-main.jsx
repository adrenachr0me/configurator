import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import { API_BASE_URL } from "../config/api";
function ConfigMain({ config, setConfig, prebuildConfig }) {
  const [componentsData, setComponentsData] = useState({
    cpus: [],
    gpus: [],
    rams: [],
    motherboards: [],
    storages: [],
    cases: [],
    coolers: [],
    psus: [],
  });

  const api = axios.create({
    baseURL: API_BASE_URL,
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
          psusRes,
        ] = await Promise.all([
          api.get("/cpus"),
          api.get("/gpus"),
          api.get("/rams"),
          api.get("/motherboards"),
          api.get("/storage"),
          api.get("/cases"),
          api.get("/cools"),
          api.get("/power"),
        ]);

        setComponentsData({
          cpus: cpusRes.data,
          gpus: gpusRes.data,
          rams: ramsRes.data,
          motherboards: motherboardsRes.data,
          storages: storageRes.data,
          cases: casesRes.data,
          coolers: coolersRes.data,
          psus: psusRes.data,
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
        psu,
      } = prebuildConfig.components;

      setConfig({
        cpu,
        gpu,
        ram,
        motherboard,
        storage,
        case: pcCase,
        cooler,
        psu,
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
            Choose your option
          </option>
          {componentsData[dataKey].map((item) => (
            <option key={item._id} value={item._id}>
              {item.brand} {item.model} {item.price}$
            </option>
          ))}
        </select>
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
          {renderSelectRow("Storage", "storage", "storages")}
          {renderSelectRow("Power supply", "psu", "psus")}
          {renderSelectRow("Case", "case", "cases")}
          {renderSelectRow("Cooler", "cooler", "coolers")}
        </tbody>
      </table>
    </div>
  );
}

export default ConfigMain;
