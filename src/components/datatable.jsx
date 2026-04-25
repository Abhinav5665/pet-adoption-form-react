import React from "react";

function DataTable({ data, onGoBack }) {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", padding: 0, margin: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .data-table-wrapper {
          animation: slideIn 0.6s ease-out;
        }

        .data-card {
          animation: slideIn 0.6s ease-out;
          animation-fill-mode: both;
        }

        .data-card:nth-child(1) { animation-delay: 0.1s; }
        .data-card:nth-child(2) { animation-delay: 0.2s; }
        .data-card:nth-child(3) { animation-delay: 0.3s; }
        .data-card:nth-child(4) { animation-delay: 0.4s; }
        .data-card:nth-child(5) { animation-delay: 0.5s; }

        .data-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .header-icon {
          display: inline-block;
          margin-right: 10px;
          font-size: 28px;
        }

        .back-button:hover {
          transform: translateX(-4px);
        }

        @media (max-width: 768px) {
          .data-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="data-table-wrapper" style={{ flex: 1, overflowY: "auto", padding: "40px 20px", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        {/* Header */}
        <div style={{ marginBottom: "40px", textAlign: "left", maxWidth: "1200px", margin: "0 auto 40px" }}>
          <h1 style={{ fontSize: "40px", fontFamily: "'Poppins', sans-serif", fontWeight: 700, margin: "0 0 10px 0", color: "#ffffff", letterSpacing: "-1px", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
            <span className="header-icon">🐾</span>
            Your Pet Family
          </h1>
          <p style={{ fontSize: "16px", color: "#f0f0f0", margin: 0, fontWeight: 500 }}>
            {data.length} {data.length === 1 ? "furry friend" : "furry friends"} registered for adoption
          </p>
        </div>

        {/* Empty State */}
        {data.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "16px", border: "2px dashed #cbd5e0", maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ fontSize: "64px", marginBottom: "20px" }}>🐕</div>
            <p style={{ fontSize: "16px", color: "#718096", margin: 0, fontWeight: 500 }}>No pets registered yet. Add your first furry friend!</p>
          </div>
        ) : (
          /* Cards Grid */
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            {data.map((entry, index) => (
              <div key={index} className="data-card" style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)", border: "1px solid rgba(59, 130, 246, 0.1)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", cursor: "pointer" }}>
                {/* Pet Info Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div>
                    <h3 style={{ fontSize: "22px", fontFamily: "'Poppins', sans-serif", fontWeight: 700, margin: "0 0 8px 0", color: "#1a202c" }}>{entry.petName}</h3>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ display: "inline-block", backgroundColor: "#edf2f7", color: "#2d3748", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{entry.petType}</span>
                      <span style={{ display: "inline-block", backgroundColor: "#edf2f7", color: "#2d3748", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{entry.breed}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "36px" }}>
                    {entry.petType === "Dog" && "🐕"}
                    {entry.petType === "Cat" && "🐈"}
                    {entry.petType === "Rabbit" && "🐰"}
                    {entry.petType === "Goat" && "🐐"}
                    {entry.petType === "Hamster" && "🐹"}
                    {entry.petType === "Raccoon" && "🦝"}
                    {!["Dog", "Cat", "Rabbit", "Goat", "Hamster", "Raccoon"].includes(entry.petType) && "🐾"}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)", margin: "16px 0" }}></div>

                {/* Owner Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#718096", textTransform: "uppercase", letterSpacing: "0.5px" }}>Owner Name</label>
                    <p style={{ fontSize: "14px", color: "#2d3748", margin: 0, fontWeight: 500 }}>{entry.yourName}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#718096", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email Address</label>
                    <p style={{ fontSize: "14px", color: "#2d3748", margin: 0, fontWeight: 500 }}>{entry.email}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#718096", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone Number</label>
                    <p style={{ fontSize: "14px", color: "#2d3748", margin: 0, fontWeight: 500 }}>{entry.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back Button - Fixed at bottom */}
      <div style={{ padding: "20px", display: "flex", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <button className="back-button" style={{ backgroundColor: "#3b82f6", color: "white", border: "none", padding: "14px 32px", fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight: 600, borderRadius: "12px", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)", letterSpacing: "0.5px" }} onClick={onGoBack}>
          ← Back to Form
        </button>
      </div>
    </div>
  );
}

export default DataTable;