import React, { useEffect, useState } from "react";
import Weather from './Weather';
export default function Home() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kampala");
  
  const API_KEYS="9aa3ff2e2e64af2f7aa3c1385370828e"

  useEffect(() => {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEYS}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
    {(typeof data.main != 'undefined') ? (
      <Weather weatherData={data}/>
    ): (
      <div></div>
    )}
    
  </div>
  );
}