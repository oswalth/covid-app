import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import axios from "axios";
import { URL } from "../../api";

const CountryPicker = ({ country, onCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${URL}/countries`).then((res) => {
        setCountries(res.data.countries);
      });
    } catch (error) {}
  }, []);

  const handleCountryChange = (e) => {
    onCountryChange(e.target.value);
  };

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect selected={country} onChange={(e) => handleCountryChange(e)}>
        <option value="">Global</option>
        {countries.map((country) => {
          return (
            <option key={country.iso3 + country.name} value={country.iso3}>
              {country.name}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
