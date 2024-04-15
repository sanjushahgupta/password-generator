import React, { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [passwordLength, setpasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(false);
  const [password, setPassword] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("copy");

  const generateRandomPassword = () => {
    let generatedPassword = "";
    let chars = ["$", "@", "*", "?"];
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    if (includeSpecialCharacters) {
      letters.push(...chars);
      let index = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[index];
    }

    if (includeNumbers) {
      letters.push(...nums);
      let index = Math.floor(Math.random() * nums.length);
      generatedPassword += nums[index];
    }

    for (let i = generatedPassword.length; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * letters.length);
      generatedPassword += letters[index];
    }

    setPassword(generatedPassword);
  };

  const handleCopyPassword = async () => {
    try {
      await window.navigator.clipboard.writeText(password);
      setCopyButtonText("copied");
    } catch (e) {
      console.error("Failed to copy password:", e);
    }
  };

  useEffect(() => {
    generateRandomPassword();
    setCopyButtonText("copy");
  }, [passwordLength, includeNumbers, includeSpecialCharacters]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div
          className="w-full max-w-md mx-auto rounded-lg shadow-md px-4 
          my-8 text-orange-500 bg-gray-700"
        >
          <h1 className="w-full max-w-md  p-4 text-xl text-white">
            Password Generator
          </h1>
          <div className="flex overflow-hidden rounded-lg">
            <input
              className="outline-none w-full py-1 px-4 rounded-lg mb-4"
              value={password}
              type="text"
              placeholder="password"
              readOnly
            ></input>
            <button
              onClick={handleCopyPassword}
              className="bg-blue-700 text-white px-3 py-3 mb-4"
            >
              {copyButtonText}
            </button>
          </div>
          <div className="flex gap-x-2 p-4">
            <input
              id="lengthOfPassword"
              className="cursor-pointer"
              type="range"
              max={40}
              min={7}
              value={passwordLength}
              onChange={(e) => setpasswordLength(e.target.value)}
            ></input>
            <label htmlFor="lengthOfPassword">Length:{passwordLength} </label>
            <input
              id="numberAllowed"
              checked={includeNumbers}
              value={includeNumbers}
              type="checkbox"
              onClick={(e) => setIncludeNumbers((prev) => !prev)}
            ></input>
            <label htmlFor="numberAllowed">Numbers</label>
            <input
              id="charAllowed"
              type="checkbox"
              checked={includeSpecialCharacters}
              value={includeSpecialCharacters}
              onClick={(e) => setIncludeSpecialCharacters((prev) => !prev)}
            ></input>
            <label htmlFor="charAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
