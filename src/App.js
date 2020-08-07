import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("global");

  // Side effect to load info for cards!!!
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData();
      setData(data);
    };
    fetchAPI();
  }, []);

  //   Country change handler loads particular country info & sets country as active
  const onCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker country={country} onCountryChange={onCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
