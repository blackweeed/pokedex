import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src="pokeball"
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>423</p>
          </div>
          <div className="seen">
            <img
              src="pokeball"
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>623</p>
          </div>
        </div>
      </div>
      <p style={{ color: "white" }}>A -&gt; Z</p>
    </div>
  );
};

export default Topbar;
