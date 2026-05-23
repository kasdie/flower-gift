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
            Một Món Quà Nhỏ 🌸
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "20px",
              lineHeight: 1.8,
            }}
          >
            Anh làm khu vườn nhỏ này...
            <br />
            chỉ để tặng em một điều dễ thương hôm nay ✨
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
            Nhấn để nhận hoa 💐
          </button>

          <div>
            <img
              src={myPhoto}
              alt="gift"
              style={{
                width: "220px",
                marginTop: "25px",
                borderRadius: "24px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
            />
          </div>
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
                🌼 Một bó hoa dành cho em
              </h2>

              <p
                style={{
                  color: "#555",
                  fontSize: "20px",
                  lineHeight: 1.8,
                }}
              >
                Có thể anh không giỏi nói những điều lãng mạn...
                <br />
                nhưng anh mong mỗi ngày của em đều nhẹ nhàng như khu vườn này ✨
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}