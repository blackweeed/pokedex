import React from "react";
import pokeball from "../images/pokeballColor.png";

const Modal = ({
  onClick,
  id,
  name,
  type,
  height,
  weight,
  stats,
  statsName,
  image,
}) => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0",
        left: 0,
        zIndex: "10",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        backgroundImage: "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          borderRadius: "50%",
          padding: "5px 10px",
          background: "black",
          color: "white",
          fontWeight: "900",
          cursor: "pointer",
        }}
      >
        X
      </div>
      <div>
        <img
          src={image}
          alt={name}
          style={{ filter: "drop-shadow(2px 4px 12px black" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          width: "450px",
          height: "500px",
        }}
      >
        <div className="stat-container-title">
          <img className="image-title" src={image} alt={name} />
          <p style={{ width: "180px", color: "black" }}>No. {id}</p>
          <p>{name}</p>
          <img className="pokeball-title" src={pokeball} alt="pokeball" />
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            className="stats-left"
            style={{ background: "#90979f38", textAlign: "center" }}
          >
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="stats-right" style={{ background: "#fffff" }}>
            <p>{type}</p>
            <p>{height}0 cm</p>
            <p>{weight} lbs</p>
          </div>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
          <div>
            {stats.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
