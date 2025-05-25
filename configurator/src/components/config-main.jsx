import React from "react";
import { useEffect, useState } from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import configurator from "./configurator";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ConfigMain({ config, setConfig, prebuildConfig, setPrebuildConfig }) {
  console.log("prebuildConfig:", prebuildConfig);
  const [cpus, setCpus] = useState([]);
  const [gpus, setGpus] = useState([]);
  const [rams, setRams] = useState([]);
  const [motherboard, setMotherboard] = useState([]);
  const [storage, setStorage] = useState([]);
  const [cases, setCase] = useState([]);
  const [cooler, setCooler] = useState([]);
  const [power, setPower] = useState([]);
  const api = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/cpus");
        setCpus(response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.get("/gpus");
        setGpus(response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.get("/rams");
        setRams(response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.get("/motherboards");
        setMotherboard(response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.get("/storage");
        setStorage(response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.get("/cases");
        setCase(response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.get("/cooler");
        setCooler(response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.get("/power");
        setPower(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (prebuildConfig) {
      setPrebuildConfig((prev) => ({
        ...prev,
        components: {
          ...prev.components,
          [option]: selected,
        },
      }));
    }
  }, [prebuildConfig, option, selected]);
  const handleOptionChange = (option, value) => {
    if (prebuildConfig && prebuildConfig.components[option]) {
      return;
    }
    const selected = {
      cpu: cpus.find((cpu) => cpu._id === value),
      gpu: gpus.find((gpu) => gpu._id === value),
      ram: rams.find((ram) => ram._id === value),
      motherboard: motherboard.find((motherboard) => motherboard._id === value),
      storage: storage.find((storage) => storage._id === value),
      cases: cases.find((cases) => cases._id === value),
      cooler: cooler.find((cooler) => cooler._id === value),
      power: power.find((power) => power._id === value),
    }[option];

    setConfig((prev) => ({
      ...prev,
      [option]: selected,
    }));
  };

  const getPrebuildValue = (option) => {
    if (prebuildConfig && prebuildConfig.components) {
      return prebuildConfig.components[option]?._id;
    }
    return null;
  };

  return (
    <div className="config-main">
      <h1>Configurate your PC</h1>
      <p>Choose your options</p>
      <table className="config-table">
        <tbody>
          <tr>
            <td>Processor</td>
            <td>
              <select
                value={getPrebuildValue("cpu") || config.cpu?._id}
                onChange={(e) => handleOptionChange("cpu", e.target.value)}
              >
                <option value="" disabled>
                  Select CPU
                </option>
                {cpus.map((cpu, index) => (
                  <option key={cpu._id} value={cpu._id}>
                    {cpu.brand} {cpu.model} {cpu.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log("CPU selected:", config.cpu);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>
              <select
                value={getPrebuildValue("gpu") || config.gpu?._id}
                onChange={(e) => handleOptionChange("gpu", e.target.value)}
              >
                <option value="" disabled>
                  Select GPU
                </option>
                {gpus.map((gpu, index) => (
                  <option key={gpu._id} value={gpu._id}>
                    {gpu.brand} {gpu.model} {gpu.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log("GPU selected:", config.gpu);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>
              <select
                value={getPrebuildValue("ram") || config.ram?._id}
                onChange={(e) => handleOptionChange("ram", e.target.value)}
              >
                <option value="" disabled>
                  Select RAM
                </option>
                {rams.map((ram, index) => (
                  <option key={ram._id} value={ram._id}>
                    {ram.brand} {ram.model} {ram.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log("RAM selected:", config.ram);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>
              <select
                value={getPrebuildValue("storage") || config.storage?._id}
                onChange={(e) => handleOptionChange("storage", e.target.value)}
              >
                <option value="" disabled>
                  Select Storage
                </option>
                {storage.map((storage, index) => (
                  <option key={storage._id} value={storage._id}>
                    {storage.brand} {storage.model} {storage.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log("Storage selected:", config.storage);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
          <tr>
            <td>Power Supply</td>
            <td>
              <select
                value={getPrebuildValue("power") || config.power?._id}
                onChange={(e) => handleOptionChange("power", e.target.value)}
              >
                <option value="" disabled>
                  Select PS
                </option>
                {power.map((power, index) => (
                  <option key={power._id} value={power._id}>
                    {power.brand} {power.model} {power.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log("Power selected:", config.power);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
          <tr>
            <td>Case</td>
            <td>
              <select
                value={getPrebuildValue("cases") || config.cases?._id}
                onChange={(e) => handleOptionChange("cases", e.target.value)}
              >
                <option value="" disabled>
                  Select Case
                </option>
                {cases.map((cases, index) => (
                  <option key={cases._id} value={cases._id}>
                    {cases.brand} {cases.model} {cases.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log(config.cases);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
          <tr>
            <td>Motherboard</td>
            <td>
              <select
                value={
                  getPrebuildValue("motherboard") || config.motherboard?._id
                }
                onChange={(e) =>
                  handleOptionChange("motherboard", e.target.value)
                }
              >
                <option value="" disabled>
                  Select Motherboard
                </option>
                {motherboard.map((motherboard, index) => (
                  <option key={motherboard._id} value={motherboard._id}>
                    {motherboard.brand} {motherboard.model} {motherboard.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log(config.motherboard);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
          <tr>
            <td>Cooler</td>
            <td>
              <select
                value={getPrebuildValue("cooler") || config.cooler?._id}
                onChange={(e) => handleOptionChange("cooler", e.target.value)}
              >
                <option value="" disabled>
                  Select cooler
                </option>
                {cooler.map((cooler, index) => (
                  <option key={cooler._id} value={cooler._id}>
                    {cooler.brand} {cooler.model} {cooler.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log(config.cooler);
                }}
              >
                Confirm your choice
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ConfigMain;
