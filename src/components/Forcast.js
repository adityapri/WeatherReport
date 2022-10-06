import { useReducer } from "react";
import weather from "./weather.json";

// const url_breeze = " http://openweathermap.org/img/wn/50d@2x.png";

const forcast_array = weather.query.results.channel.item.forecast;

const image_code = {
  "Partly Cloudy": "02",
  Cloudy: "03",
  Rain: "10",
  "Mostly Cloudy": "04",
  "Scattered Showers": "09",
  Breezy: "50"
};

const arrToBeRendered = forcast_array.map((info) => {
  const url = `http://openweathermap.org/img/wn/${
    image_code[info.text]
  }d@2x.png`;

  return (
    <div>
      <h3>Weather Forecast</h3>
      <div className="carousel-inner">
        <div className="carousel-item active ">
          <div className="card-wrapper">
            <div className="card1">
              <img src={url} className="card-img-top" alt="..." />
              <sup>{info.text}</sup>
              <div className="card-body">
                <h5 className="card-title">{info.date}</h5>
                <div className="card-text">
                  <div className="high">
                    <h6>High</h6>
                    <p>{info.high}</p>
                  </div>
                  <div class="vl"></div>
                  <div className="low">
                    <h6>Low</h6>
                    <p>{info.low}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // -------------------------------
  );
});

// -----------------------reducer handling--------------------------

const initialValue = 1,
  total_forcast = arrToBeRendered.length;

const reducer = (currState, action) => {
  switch (action) {
    case "next":
      return (currState + 1) % total_forcast;
    case "prev":
      if (currState === 0) return total_forcast - 1;
      else return currState - 1;
    default:
      return initialValue;
  }
};
// ------------------------------------------------------------------
export function Forcast() {
  // const [day, setDay] = useState(0);
  const [day, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="forcast_wrapper">
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        {/* --------------------Carousel------------------------ */}

        {arrToBeRendered[day]}

        {/* -------------------Button Control---------------------- */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          onClick={() => dispatch("prev")}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          onClick={() => dispatch("next")}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        {/* ----------------------------------------- */}
      </div>
    </div>
  );
}
