import { useEffect, useState } from "react";
import { getCity, getTemp } from "../../services/api";
import { Weather } from "../Weather";
import styles from "./style.module.scss";

type Location = {
  lat: Number;
  lon: Number;
};

type Temp = {
  name: String;
  sys: {
    country: String;
  };
  weather: [{ main: String }];
  main: {
    temp: Number;
  };
};

export const Search = () => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState<Location[]>([]);
  const [temp, setTemp] = useState<Partial<Temp>>({});

  const getLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const buttonHandler = () => {
    temp;
  };

  useEffect(() => {
    async function fetchData() {
      if (location.length > 0) {
        const res = await getCity(location);
        return setCity(res);
      }
    }

    fetchData();
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      if (city.length) {
        const lat = city[0].lat;
        const lon = city[0].lon;
        const res = await getTemp(lat, lon);
        return setTemp(res);
      }
    }

    fetchData();
  }, [city]);

  return (
    <>
      <div className={styles.wrapperContainer}>
        <input
          type="text"
          value={location}
          onChange={getLocation}
          placeholder="Digite sua cidade..."
        />
        <button
          type="button"
          onClick={buttonHandler}
          className={styles.btnForm}
        >
          Buscar
        </button>
      </div>
      <Weather
        city={temp.name}
        condition={temp.weather ? temp.weather[0].main : null}
        temp={temp.main ? temp.main.temp.toFixed(0) + "ºC" : null}
      />
    </>
  );
};
