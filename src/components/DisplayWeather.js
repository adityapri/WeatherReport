import weather from "./weather.json";

//-------------------------Fetching Requirement-----------------------------
const _info = weather.query.results.channel;

const city = _info.location.city;
const country = _info.location.country;
const region = _info.location.region;

const time = _info.item.condition.date.split(" ")[4];
const time_zone = _info.item.condition.date.split(" ")[6];
const temp = _info.item.condition.temp;
const weather_condition = _info.item.condition.text;
//----------------------------------------------------------------------------

export function DisplayWeather() {
  return (
    <div className="displayWeather">
      <div className="main-card">
        <div className="cardtitle">
          {city}, {region}, {country} As of {time} {time_zone}
        </div>
        <h1>
          {temp}
          <sup>o</sup>
        </h1>
        <span>{weather_condition}</span>
      </div>
    </div>
  );
}
