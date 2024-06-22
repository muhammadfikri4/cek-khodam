import { useState } from "react";
import "./App.css";

function App() {
  const initialKhodam = [
    "Sepeda Tua",
    "Kipas Reok",
    "Stang Jepit",
    "Kyubi",
    "Gagang Pintu",
    "Mio Karbu",
    "Oli Samping",
    "Kuntilanak",
    "Kadal Oscar Oasis",
    "Minyak Tawon",
    "Tombak Zilong",
    "Gerobak Ketoprak",
    "Gayung",
    "Cicak Second Choice",
    "Boti",
    "Janda Pirang",
    "Ular Depresi",
    "Kucing Garong",
    "Naga Indosiar",
    "Kerang Ajaib",
    "Vleg Racing",
    "taplak meja",
    "yiloro Kidul",
    "Undur-Undur",
    "Kumis Lele",
    "Seblak Ceker",
    "Kak gem",
    "Ketupat",
    "Semut rangrang",
    "Sendal Jepit",
    "Bebek Madura",
    "Semak Belukar",
    "Kecoa Jawa",
    "Kudanil Dribble",
    "Tudung Saji",
    "Tuyul Mohawk",
    "Kursi Lipet",
    "Es lilin Coquette",
    "Kupu-kupu malam",
    "Pawang Buaya",
    "Kunci Inggris",
    "Ban Motor",
    "Sepedah Goyang",
    "Kacamata Kuda",
    "Karet Uduk",
    "Streples Nasi Padang",
    "Nasi Kucing",
    "Kura-kura Ninja",
    "Uler Melingkar",
    "Soft Case",
    "Sabun Giv",
    "Cabe Keriting",
    "gajah marah",
    "Singa Insom",
    "Monyet Emas",
    "Nugget Rebus",
    "Aldi Taher",
    "Karbit",
    "Rafathar",
    "Banteng PDIP",
    "Badut Mixue",
    "Es teler",
    "Cocomelon",
    "Cupang",
    "Barongsai",
    "Payung Kagura",
    "Kuda Metal",
    "pocong ngondek",
    "Madara Uchiha",
  ];
  // const [khodam, setKhodam] = useState();
  const [name, setName] = useState<string>("");
  const [generatedRandom, setGeneratedRandom] = useState<number>(0);
  const [show, setShow] = useState(false);

  const cekKhodam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  console.log(generatedRandom);
  return (
    <>
      {show && (
        <div>
          <p>Khodam {name} adalah :</p>
          <h1>
            {name.includes("fikri") || name.includes("andini")
              ? "Rafathar"
              : initialKhodam[generatedRandom]}
          </h1>
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input type="text" onChange={cekKhodam} />
        <button
          disabled={!name}
          onClick={() => {
            setShow(true);
            setGeneratedRandom(
              Math.floor(Math.random() * initialKhodam.length)
            );
          }}
        >
          CEK KODAM
        </button>
      </div>
    </>
  );
}

export default App;
