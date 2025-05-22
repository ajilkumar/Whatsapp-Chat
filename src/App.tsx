import React, { useState } from "react";
import whatsappIcon from "./assets/wa.png";
import backgroundImage from "./assets/wa-bg.png";

const App: React.FC = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChat = () => {
    const cleanedPhone = phone.replace(/\D/g, "");
    const cleanedCode = countryCode.replace(/\D/g, "");

    if (!/^\d{7,15}$/.test(cleanedPhone)) {
      setError("Enter a valid phone number.");
      return;
    }

    const fullNumber = cleanedCode + cleanedPhone;
    const url = `https://wa.me/${fullNumber}`;
    window.open(url, "_blank");
    setError("");
  };

  return (
    <main
      className="flex flex-col h-screen bg-[#ece5dd] bg-cover bg-center items-center justify-between px-4 py-8 font-Poppins"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
      }}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center">
        <img
          src={whatsappIcon}
          alt="WhatsApp Logo"
          className="w-20 h-20 sm:w-20 sm:h-20 md:w-22 md:h-22"
        />
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-[#11796d] text-center font-poppins mt-4 sm:mt-6">
          Chat without saving the number
        </h1>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center space-y-6 w-[300px] max-w-md mt-[-70px]">
        <div className="flex items-center w-full rounded overflow-hidden">
          <input
            type="text"
            value={countryCode}
            className="w-[65px] px-4 py-2 bg-gray-100 text-gray-700 border-r border-gray-300 outline-none"
            onChange={(e) => setCountryCode(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter the number"
            className="w-full px-4 py-2 outline-none bg-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          onClick={handleChat}
          className="bg-[#11796d] text-white text-lg px-10 py-2 rounded-xl hover:bg-[#11796d] transition cursor-pointer"
        >
          Chat
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      {/* Footer */}
      <footer className="text-sm text-center text-[#11796e]">
        Designed & Built by Ajil <br /> © {new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default App;
