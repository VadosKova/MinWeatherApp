import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css'

const API_KEY = "2e9c3bf87483ba1dc8ff5d5e2b31433e";

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [error, setError] = useState<string>("");
  const [requestCount, setRequestCount] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const savedHistory = localStorage.getItem("cityHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const getWeather = async (selectedCity?: string) => {
    const targetCity = selectedCity || city.trim();
    if (!targetCity) return;

    try {
      setError("");
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeatherData({
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });

      setHistory((prev) => {
        const updated = [targetCity, ...prev.filter((c) => c !== targetCity)].slice(0, 5);
        localStorage.setItem("cityHistory", JSON.stringify(updated));
        return updated;
      });
      
      setRequestCount((prev) => prev + 1);
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  return (
    <>
      
    </>
  )
}

export default App
