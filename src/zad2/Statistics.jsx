import React from "react";
import "./statistics.css";

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          <li className="stat-item item-1">
            <span className="stat-label">.docx</span>
            <span className="percentage">{stats[0].percentage}%</span>
          </li>
          <li className="stat-item item-2">
            <span className="stat-label">.mp3</span>
            <span className="percentage">{stats[2].percentage}%</span>
          </li>
          <li className="stat-item item-3">
            <span className="stat-label">.pdf</span>
            <span className="percentage">{stats[1].percentage}%</span>
          </li>
          <li className="stat-item item-4">
            <span className="stat-label">.psd</span>
            <span className="percentage">{stats[3].percentage}%</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
