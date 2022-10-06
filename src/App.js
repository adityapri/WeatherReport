import "./styles.css";
import { DisplayWeather } from "./components/DisplayWeather";
import { WeatherDetails } from "./components/WeatherDetails";
import { Forcast } from "./components/Forcast";

export default function App() {
  return (
    <div className="App">
      <DisplayWeather />
      <Forcast />
      <WeatherDetails />
    </div>
  );
}
