import "../styles.css";
import weather from "./weather.json";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import img from "./half2.png";
import SwipeUpAltIcon from "@mui/icons-material/SwipeUpAlt";
import SwipeDownAltIcon from "@mui/icons-material/SwipeDownAlt";

const weather_details_path = weather.query.results.channel;

// ----------------------------Fetching Astronomy(Sunrise & Sunset Time)-----------------------------------
let upTime = weather_details_path.astronomy.sunrise.split(" ")[0];
let downTime = weather_details_path.astronomy.sunset.split(" ")[0];
let downTime_split = downTime.split(":");
let downTime_converted =
  Number(downTime_split[0]) + 12 + ":" + downTime_split[1];
// ---------------------------------------------------------------------------------------------------------

//-----------------------------Fetching High/low------------------------------------------------------------
const high = weather_details_path.item.forecast[0].high;
const low = weather_details_path.item.forecast[0].low;
//----------------------------------------------------------------------------------------------------------

//------------Fetching Humidity,Pressure,Wind speed,Visibility, UV Index------------------------------------
const humidity = weather_details_path.atmosphere.humidity;
const pressure = weather_details_path.atmosphere.pressure;
const wind = weather_details_path.wind.speed;
const visibility = weather_details_path.atmosphere.visibility;
const uvIndex = weather_details_path.atmosphere.rising;
//----------------------------------------------------------------------------------------------------------

export function WeatherDetails() {
  return (
    <div className="weather_details_wrapper">
      <div className="Time">
        <img className="circle_img" src={img} width="10%" />
        <div className="astronomy">
          <SwipeUpAltIcon />
          {upTime} {downTime_converted}
          <SwipeDownAltIcon />
        </div>
      </div>
      <h3 className="weather_details_heading">
        {/* Weather Today in New York City, NY, United States */}
        {weather_details_path.item.title}
      </h3>

      <div className="main-card">
        <div class="container">
          {/* First Row */}
          <div class="row">
            <div class="col-6">
              <hr />
              <PriorityHighIcon />
              <span style={{ marginRight: "10rem" }}>High/Low</span>
              <span>
                {high}/{low}
              </span>
            </div>
            <div class="col-6">
              <hr />
              <AirIcon />
              <span style={{ marginRight: "10rem" }}> Wind</span>
              <ArrowRightIcon />
              <span>{wind}</span>
            </div>
          </div>
          {/* Second row */}
          <div class="row">
            <div class="col-6">
              <hr />
              <InvertColorsIcon />
              <span style={{ marginRight: "10rem" }}>Humidity</span>
              <span>{humidity}%</span>
            </div>
            <div class="col-6">
              <hr />
              <VisibilityIcon />
              <span style={{ marginRight: "10rem" }}> Visibility</span>
              <span>{visibility}</span>
            </div>
          </div>
          {/* Third row */}
          <div class="row">
            <div class="col-6">
              <hr />
              <UnfoldLessIcon />
              <span style={{ marginRight: "10rem" }}>Pressure</span>
              <span>{pressure}mb</span>
            </div>
            <div class="col-6">
              <hr />
              <WbSunnyIcon />
              <span style={{ marginRight: "10rem" }}> UV Index</span>
              <span>{uvIndex} of 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
