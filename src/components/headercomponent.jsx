 import React from "react";
function HeaderComponenet({ header }) {
  return (
    <div
      style={{
        width: "100%",
        height: 80, // fixed header height
        background: "rgba(202, 134, 134, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          maxWidth: "1200px",
          margin: 0,
          textAlign: "center",
          
          padding: "0 24px",
          color:"rgba(30, 30, 31, 0.7)"
        }}
      >
        {header}
      </h1>
    </div>
  );
}

export default HeaderComponenet;



