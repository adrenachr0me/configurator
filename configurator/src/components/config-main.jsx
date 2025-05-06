import React from "react";
import { useEffect, useState } from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import configurator from "./configurator";
import axios from "axios";

function ConfigMain() {
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

  useEffect(() => {
    api.get("/cpus").then((res) => {
      console.log("CPUs:", res.data);
      setCpus(res.data);
    });
    api.get("/gpus").then((res) => setGpus(res.data));
    api.get("/rams").then((res) => setRams(res.data));
    api.get("/motherboards").then((res) => setMotherboard(res.data));
    api.get("/storage").then((res) => setStorage(res.data));
    api.get("/cases").then((res) => setCase(res.data));
    api.get("/cooler").then((res) => setCooler(res.data));
    api.get("/power").then((res) => setPower(res.data));
  }, []);
  return (
    <div className="config-main">
      <h1>Configurate your PC</h1>
      <p>Choose your options</p>
      <table>
        <tbody>
          <tr>
            <td>Processor</td>
            <td>
              <select>
                {cpus.map((cpus) => (
                  <option key={cpus._id}>
                    {cpus.brand} {cpus.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>
              <select>
                {gpus.map((gpu) => (
                  <option key={gpu._id}>
                    {gpu.brand} {gpu.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>
              <select>
                {rams.map((ram) => (
                  <option key={ram._id}>
                    {ram.brand} {ram.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>
              <select>
                {storage.map((storage) => (
                  <option key={storage._id}>
                    {storage.brand} {storage.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Power Supply</td>
            <td>
              <select>
                {power.map((power) => (
                  <option key={power._id}>
                    {power.brand} {power.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Case</td>
            <td>
              <select>
                {cases.map((cases) => (
                  <option key={cases._id}>
                    {cases.brand} {cases.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Motherboard</td>
            <td>
              <select>
                {motherboard.map((motherboard) => (
                  <option key={motherboard._id}>
                    {motherboard.brand} {motherboard.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Cooler</td>
            <td>
              <select>
                {cooler.map((cooler) => (
                  <option key={cooler._id}>
                    {cooler.brand} {cooler.model}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ConfigMain;
