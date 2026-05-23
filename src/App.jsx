
import { useEffect, useState } from "react";
import myPhoto from "./assets/myphoto.jpg";

export default function FlowerGiftGame() {
  const [opened, setOpened] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        setShowText(true);
      }, 1200);
    }
  }, [opened]);

  const flowers = Array.from({ length: 20 });

  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        background:
          "linear-gradient(to bottom, #ffe4ec, #ffd6e7, #ffc9de)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      {/* Falling flowers */}
      {flowers.map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: "28px",
            opacity: 0.7,
          }}
        >
          🌸
        </div>
      ))}

      {!opened && (
        <div
          style={{
            background: "rgba(255,255,255,0.7)",
            padding: "40px",
            borderRadius: "30px",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            backdropFilter: "blur(10px)",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              color: "#ff4fa3",
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            helo bé iu 🌸
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "20px",
              lineHeight: 1.8,
            }}
          >
            Nhấn dô đây nhé...
            <br />
            cho em cái này nè ✨
          </p>

          <button
            onClick={() => setOpened(true)}
            style={{
              marginTop: "30px",
              background: "#ff69b4",
              border: "none",
              color: "white",
              padding: "16px 32px",
              borderRadius: "20px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            💐
          </button>
        </div>
      )}

      {opened && (
        <div
          style={{
            textAlign: "center",
            animation: "fadein 1s ease",
          }}
        >
          <div
            style={{
              fontSize: "220px",
            }}
          >
            💐
          </div>

          {showText && (
            <div
              style={{
                background: "rgba(255,255,255,0.7)",
                padding: "30px",
                borderRadius: "30px",
                maxWidth: "700px",
                margin: "auto",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
            >
              <h2
                style={{
                  color: "#ff5fa2",
                }}
              >
                Cho em 1 bông hoa nè 🌼
              </h2>

              <p
                style={{
                  color: "#555",
                  fontSize: "20px",
                  lineHeight: 1.8,
                }}
              >
                Nhớ ngủ sớm đi nhé..
                <br />
                Ngoan ngoãn với nhẹ nhàng với nhau hơn nhéee, iu em ✨
              </p>

              <img
                src={myPhoto}
                alt="cute"
                style={{
                  width: "230px",
                  marginTop: "25px",
                  borderRadius: "24px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

