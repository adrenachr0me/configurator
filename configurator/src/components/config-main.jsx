import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import configurator from "./configurator";
function ConfigMain() {
  return (
    <div className="config-main">
      <h1>Configurate your PC</h1>
      <p>Choose your options</p>
      <table>
        <tr>
          <td>Processor</td>
          <td>
            <select>
              <option value="intel">Intel</option>
              <option value="amd">AMD</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Motherboard</td>
          <td>
            <select>
              <option value="asus">ASUS</option>
              <option value="gigabyte">Gigabyte</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>
            <select>
              <option value="8gb">8GB</option>
              <option value="16gb">16GB</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>
            <select>
              <option value="ssd">SSD</option>
              <option value="hdd">HDD</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Power Supply</td>
          <td>
            <select>
              <option value="500w">500W</option>
              <option value="750w">750W</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Case</td>
          <td>
            <select>
              <option value="atx">ATX</option>
              <option value="micro-atx">Micro-ATX</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default ConfigMain;
