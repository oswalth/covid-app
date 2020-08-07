import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

const fetchData = async (country) => {
  let dataURL = URL;
  if (country) {
    dataURL += `/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dataURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export { URL, fetchData };
