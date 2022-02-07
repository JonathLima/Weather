import axios from "axios";

const key = "dba0cd549a4f57e71365e81d0c0f94a5";

export const getCity = async (city: String) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;

  const response = await axios.get(url);
  return response.data;
};

export const getTemp = async (lat: Number, lon: Number) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

  const response = await axios.get(url);
  return response.data;
};
