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

  useEffect(() => {
    axios.get("/api/cpus").then((res) => {
      console.log("CPUs:", res.data);
      setCpus(res.data.data);
    });
    axios.get("/api/gpus").then((res) => setGpus(res.data.data));
    axios.get("/api/rams").then((res) => setRams(res.data.data));
    axios.get("/api/motherboards").then((res) => setMotherboard(res.data.data));
    axios.get("/api/storage").then((res) => setStorage(res.data.data));
    axios.get("/api/cases").then((res) => setCase(res.data.data));
    axios.get("/api/cooler").then((res) => setCooler(res.data.data));
    axios.get("/api/power").then((res) => setPower(res.data.data));
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
                  <option key={cpus._id}>{cpus.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>
              <select>
                {gpus.map((gpu) => (
                  <option key={gpu._id}>{gpu.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>
              <select>
                {rams.map((ram) => (
                  <option key={ram._id}>{ram.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>
              <select>
                {storage.map((storage) => (
                  <option key={storage._id}>{storage.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Power Supply</td>
            <td>
              <select>
                {power.map((power) => (
                  <option key={power._id}>{power.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Case</td>
            <td>
              <select>
                {cases.map((cases) => (
                  <option key={cases._id}>{cases.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Motherboard</td>
            <td>
              <select>
                {motherboard.map((motherboard) => (
                  <option key={motherboard._id}>{motherboard.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Cooler</td>
            <td>
              <select>
                {cooler.map((cooler) => (
                  <option key={cooler._id}>{cooler.name}</option>
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
