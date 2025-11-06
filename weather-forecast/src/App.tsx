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

  return (
    <>
      
    </>
  )
}

export default App
