import React from "react";
import { useEffect, useState } from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import configurator from "./configurator";
import axios from "axios";
function ConfigMain({ config, setConfig }) {
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
              <select
                onChange={(e) => {
                  const selected = cpus.find(
                    (cpu) => cpu._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, cpu: selected }));
                }}
              >
                <option value="" disabled>
                  Select CPU
                </option>
                {cpus.map((cpus) => (
                  <option key={cpus._id} value={cpus._id}>
                    {cpus.brand} {cpus.model} {cpus.price}$
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
                onChange={(e) => {
                  const selected = gpus.find(
                    (gpu) => gpu._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, gpu: selected }));
                }}
              >
                <option value="" disabled>
                  Select GPU
                </option>
                {gpus.map((gpu) => (
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
                onChange={(e) => {
                  const selected = rams.find(
                    (ram) => ram._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, ram: selected }));
                }}
              >
                <option value="" disabled>
                  Select RAM
                </option>
                {rams.map((ram) => (
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
                onChange={(e) => {
                  const selected = storage.find(
                    (storage) => storage._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, storage: selected }));
                }}
              >
                <option value="" disabled>
                  Select Storage
                </option>
                {storage.map((storage) => (
                  <option key={storage._id} value={storage._id}>
                    {storage.brand} {storage.model} {storage.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log(config.storage);
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
                onChange={(e) => {
                  const selected = power.find(
                    (power) => power._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, power: selected }));
                }}
              >
                <option value="" disabled>
                  Select PS
                </option>
                {power.map((power) => (
                  <option key={power._id} value={power._id}>
                    {power.brand} {power.model} {power.price}$
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  console.log(config.power);
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
                onChange={(e) => {
                  const selected = cases.find(
                    (cases) => cases._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, cases: selected }));
                }}
              >
                <option value="" disabled>
                  Select Case
                </option>
                {cases.map((cases) => (
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
                onChange={(e) => {
                  const selected = motherboard.find(
                    (motherboard) => motherboard._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, motherboard: selected }));
                }}
              >
                <option value="" disabled>
                  Select Motherboard
                </option>
                {motherboard.map((motherboard) => (
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
                onChange={(e) => {
                  const selected = cooler.find(
                    (cooler) => cooler._id === e.target.value
                  );
                  setConfig((prev) => ({ ...prev, cooler: selected }));
                }}
              >
                <option value="" disabled>
                  Select cooler
                </option>
                {cooler.map((cooler) => (
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
