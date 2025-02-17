import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGenerateQrCode() {
    if (input.trim()) {
      setQrCode(input.trim());
      setInput(""); // Clear input after generating QR code
    }
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={!input.trim()} // Simplified the condition to disable the button
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>{qrCode && <QRCode value={qrCode} size={400} bgColor="#fff" />}</div>
    </div>
  );
}
