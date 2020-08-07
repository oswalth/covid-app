import React, { useState, useEffect } from "react";
import { URL } from "../../api/";
import axios from "axios";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get(URL + "/daily").then((res) => setChartData(res.data));
  }, []);

  return (
    <div className={styles.container}>
      {country !== "" && confirmed ? (
        <BarChart chartData={{ confirmed, recovered, deaths }} />
      ) : (
        <LineChart chartData={chartData} />
      )}
    </div>
  );
};

export default Chart;
