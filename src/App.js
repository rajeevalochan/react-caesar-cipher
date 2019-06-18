import React, { useState } from "react";
import TextFieldInput from "./components/TextFied";
import SelectInput from "./components/SelectInput";
import "./App.css";

function App() {
  const [plainText, setPlainText] = useState("");
  const [caserText, setCaserText] = useState("");
  const [shiftValue, setShiftValue] = useState("");
  const [currentTextBox, setCurrentTextBox] = useState("");

  //Caser Cipher
  function isUpperCase(str) {
    return str === str.toUpperCase();
  }

  //decipher the string
  let ceaserCipher = (str, key) => {
    let decipher = "";

    //decipher each letter
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 64) {
        decipher += str[i];
      } else if (isUpperCase(str[i])) {
        decipher += String.fromCharCode(
          ((str.charCodeAt(i) + key - 65) % 26) + 65
        );
      } else {
        //else add lowercase letters
        decipher += String.fromCharCode(
          ((str.charCodeAt(i) + key - 97) % 26) + 97
        );
      }
    }

    return decipher;
  };

  const handleChange = name => _e => {
    const encryptedText = ceaserCipher(_e.target.value, shiftValue);
    setCurrentTextBox(name);

    if (name === "plainText") {
      setPlainText(_e.target.value);
      setCaserText(encryptedText);
    } else if (name === "caserText") {
      setPlainText(encryptedText);
      setCaserText(_e.target.value);
    }
  };
  const handleShiftValue = _e => {
    let encryptedText;
    if (currentTextBox === "plainText") {
      encryptedText = ceaserCipher(plainText, _e.target.value);
      setPlainText(plainText);
      setCaserText(encryptedText);
    } else if (currentTextBox === "caserText") {
      encryptedText = ceaserCipher(caserText, _e.target.value);
      setPlainText(encryptedText);
      setCaserText(caserText);
    }

    setShiftValue(_e.target.value);
  };

  return (
    <div className="App">
      <h1>Ceaser Cipher</h1>
      <div>
        <SelectInput
          onChange={handleShiftValue}
          value={shiftValue}
          menuItem={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextFieldInput
          label="Plain Text"
          name="plainText"
          value={plainText}
          onChange={handleChange}
        />
        <TextFieldInput
          label="Caesar Text"
          name="caserText"
          value={caserText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
