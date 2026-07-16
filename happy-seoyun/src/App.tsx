import "./App.css";
import image from "./assets/seoyun.jpeg";
import heartDrawing from "./assets/heart_drawing.png";
import ring from "./assets/ring.png";
import sparkle from "./assets/sparkle.png";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#273e37",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "80%",
          width: "80%",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          top: "7%",
          // top: "10%",
          right: "3%",
          width: "100%",
          height: "100%",
        }}
      >
        <a
          href="https://fontmeme.com/cursive-fonts/"
          style={{
            position: "relative",

            // right: "5%",
            width: "72%",
            // rotate: "-5deg",
            transformOrigin: "top left",
          }}
        >
          <img
            src="https://fontmeme.com/permalink/260716/0938560d.png"
            alt="cursive-fonts"
          />
        </a>
        <a
          href="https://fontmeme.com/cursive-fonts/"
          style={{
            // right: "5%",
            width: "92%",
            // rotate: "-5deg",
            transformOrigin: "top left",
          }}
        >
          <img
            src="https://fontmeme.com/permalink/260716/e03d29dc.png"
            alt="cursive-fonts"
          />
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          right: "3%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          fontFamily: "cursive",
        }}
      >
        <p>𝑂𝑐𝑡𝑜𝑏𝑒𝑟 17, 2026</p>
        <p>𝑃𝑙𝑒𝑎𝑠𝑒 𝑟𝑒𝑣𝑖𝑠𝑖𝑡 𝑡ℎ𝑖𝑠 𝑠𝑖𝑡𝑒 𝑎𝑓𝑡𝑒𝑟 8/21</p>
      </div>

      <img
        src={heartDrawing}
        className="float-heart"
        style={{
          position: "absolute",
          bottom: "50%",
          left: "5%",
          width: "20%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          // width: "fit-content",
          right: "10%",
        }}
      >
        <img
          src={ring}
          className="sparkle-ring"
          style={{
            width: "50px",
            objectFit: "cover",
          }}
        />
        <img
          src={sparkle}
          className="twinkle"
          style={
            {
              position: "absolute",
              top: "0",
              width: "15px",
              "--dur": "1.4s",
              "--delay": "0.2s",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}

export default App;
