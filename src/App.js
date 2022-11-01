import "./App.css";
import Card from "./components/Card";
import colorPickerLogo from "./color-picker.png";
// import { useState } from "react";

function App() {
  const colors = [
    {
      code: "#000000",
      name: "Black",
    },
    {
      code: "#0C090A",
      name: "Night",
    },
    {
      code: "#3A3B3C",
      name: "Dark Gray",
    },
    {
      code: "#463E3F",
      name: "Black Eel",
    },
    {
      code: "#565051",
      name: "Vampire Gray",
    },
    {
      code: "#52595D",
      name: "Iron Gray",
    },
    {
      code: "#666362",
      name: "Ash Gray",
    },
    {
      code: "#C0C0C0",
      name: "Silver",
    },
    {
      code: "#E5E4E2",
      name: "Platinum",
    },
    {
      code: "#98AFC7",
      name: "Blue Gray",
    },
    {
      code: "#728FCE",
      name: "Light Purple Blue",
    },
    {
      code: "#4863A0",
      name: "Azure Blue",
    },
    {
      code: "#0000FF",
      name: "Blue",
    },
    {
      code: "#0000A5",
      name: "Earth Blue",
    },
    {
      code: "#2B65EC",
      name: "Ocean Blue",
    },
    {
      code: "#1589FF",
      name: "Neon Blue",
    },
    {
      code: "#00BFFF",
      name: "DeepSkyBlue",
    },
    {
      code: "#00FFFF",
      name: "Aqua or Cyan",
    },
    {
      code: "#033E3E",
      name: "Deep Teal",
    },
    {
      code: "#2C3539",
      name: "Gunmetal",
    },
    {
      code: "#008000",
      name: "Green",
    },
    {
      code: "#006400",
      name: "DarkGreen",
    },
    {
      code: "#12AD2B",
      name: "Parrot Green",
    },
    {
      code: "#16F529",
      name: "Neon Green",
    },
    {
      code: "#90EE90",
      name: "LightGreen",
    },
    {
      code: "#FFFF00",
      name: "Yellow",
    },
    {
      code: "#FFD700",
      name: "Gold",
    },
    {
      code: "#FFA500",
      name: "Orange",
    },
    {
      code: "#6F4E37",
      name: "Coffee",
    },
    {
      code: "#B5651D",
      name: "Light Brown",
    },
    {
      code: "#2C3539",
      name: "Red",
    },
    {
      code: "#A52A2A",
      name: "Brown",
    },
    {
      code: "#2C3539",
      name: "Dark Pink",
    },
    {
      code: "#FF69B4",
      name: "HotPink",
    },
    {
      code: "#EE82EE",
      name: "Violet",
    },
    {
      code: "#FFFFFF",
      name: "White",
    },
    {
      code: "#F8F0E3",
      name: "Off White",
    },
    {
      code: "#8467D7",
      name: "Light Purple",
    },
    {
      code: "#A06AB4",
      name: "Lavender",
    },
    {
      code: "#07BB9C",
      name: "Blue Green",
    },
    {
      code: "#D773A2",
      name: "Lilac",
    },
  ];

  return (
    <>
      <h1>
        Color Picker &nbsp;
        <img
          style={{ width: "2.5rem", paddingTop: "0.5rem" }}
          src={colorPickerLogo}
          alt="Logo"
        />
      </h1>
      <main>
        {colors.map((e, idx) => {
          return (
            <>
              <Card key={idx} code={e.code} name={e.name} />
            </>
          );
        })}
      </main>
    </>
  );
}

export default App;
