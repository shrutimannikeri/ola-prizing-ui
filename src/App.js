import "./App.css";

function App() {
  // 50
  const duration = "20 min";
  const rides = [
    {
      pic:
        "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg",
      time: duration,
      description: "Comfy, economical cars",
      type: "Mini",
      multiplier: 5,
      discount: 0,
    },
    {
      pic: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto.svg",
      time: duration,
      description: "Get autos at your doorstep",
      type: "Auto",
      multiplier: 4,
      discount: 0,
    },
    {
      pic:
        "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play-active.svg",
      time: duration,
      description: "Music, movies, TV and more",
      type: "Prime Play",
      multiplier: 6,
      discount: 5,
    },

    {
      pic:
        "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg",
      time: duration,
      description: "Spacious sedans, top drivers",
      type: "Prime Sedan",
      multiplier: 5.5,
      discount: 5,
    },
    {
      pic:
        "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg",
      time: duration,
      description: "Beat the traffic on a bike",
      type: "Bike",
      multiplier: 2,
      discount: 4,
    },
    {
      pic:
        "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg",
      time: duration,
      description: "Spacious SUVs",
      type: "Prime Suv",
      multiplier: 8,
      discount: 0,
    },
  ];
  return (
    <div className="App">
      <Cablist cablist={rides} />
    </div>
  );
}
function Cablist({ cablist }) {
  return (
    <div className="cab-container">
      {cablist.map((cabs, ind) => (
        <Cabdisplay cab={cabs} />
      ))}
    </div>
  );
}
function Cabdisplay({ cab }) {
  return (
    <div className="cab-list">
      <div className="cab-group-container">
        <img src={cab.pic} alt="looding" className="cab-img"/>
        <p className="time-minu">{cab.time}</p>
      </div>

      <div className="cab-group-container">
        <h4 className="cab-name">{cab.type}</h4>
        <p className="about-cab">{cab.description}</p>
      </div>

      <PriceDetail price={cab.multiplier} discount={cab.discount} />
    </div>
  );
}
function PriceDetail({ price, discount }) {
  const distance = 5000; // 5 km
  const basePrice = (distance / 1000) * 10;
  const totalprice = Number(price) * basePrice;
  const discountedPrice = Math.round(
    basePrice * totalprice * (1 - discount / 100)
  );
  return (
    <div className="cab-group-container">
      <p className="cab-price"> ₹{discountedPrice} </p>
      {discount > 0 ? (
        <p className="cab-discount"> ₹{basePrice * totalprice} </p>
      ) : null}
    </div>
  );
}

export default App;