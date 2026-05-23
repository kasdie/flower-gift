import { useEffect, useState } from "react";
import myPhoto from "./assets/myphoto.png";

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

  const fallingFlowers = Array.from({ length: 25 });

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center">

      {/* Falling flowers */}
      {fallingFlowers.map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          🌸
        </div>
      ))}

      {/* Plants */}
      <div className="absolute bottom-0 left-0 text-8xl opacity-60">
        🌿
      </div>

      <div className="absolute bottom-0 right-0 text-8xl opacity-60">
        🌿
      </div>

      <div className="absolute top-10 left-10 text-6xl opacity-50">
        🌼
      </div>

      <div className="absolute top-20 right-20 text-6xl opacity-50">
        🤍
      </div>

      {/* First Scene */}
      {!opened && (
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center z-10 max-w-xl border border-white animate-fade">

          <h1 className="text-5xl font-bold text-pink-500 mb-6">
            helo bé iu 🌸
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            cho em cái này nè 
            <br />
            chỉ để tặng em một điều dễ thương hôm nay ✨
          </p>

          <button
            onClick={() => setOpened(true)}
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Nhấn dô đây nhé 💐
          </button>
        </div>
      )}

      {/* Second Scene */}
      {opened && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-pink-100/80 backdrop-blur-sm transition-all duration-1000 animate-scene">

          {/* Big Bouquet */}
          <div className="text-[220px] animate-float drop-shadow-2xl">
            💐
          </div>

          {/* VN Text Box */}
          {showText && (
            <div className="mt-6 bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-2xl w-[80%] max-w-2xl border border-white animate-fade">

              <p className="text-pink-600 text-2xl font-semibold mb-3">
                🌼 Một bông hoa dành cho bé iu
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Mốt có giận anh thì nhớ mở cái này ra nhé..
                <br />
                Lo ngủ sớm di, nhẹ nhàng với ngoan ngoãn với nhau nữa nhé - iu em 🍀
              </p>

              <button
                className="mt-5 bg-pink-300 hover:bg-pink-400 text-white px-6 py-3 rounded-2xl transition-all"
              >
                Em mà lì thì anh sẽ đánh dưa leo hehe 🌸
              </button>
              <img
                src={myPhoto}
                 alt="gift"
                   className="w-48 mt-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
                    />
              
            </div>
          )}
        </div>
      )}
    </div>
  );
}