import React, { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [lengthOfPassword, setLengthOfPassword] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const PasswordGenerator = () => {
    let newPassword = "";
    const char = ["$", "@", "!", "*", "?"];
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let str = [
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
    if (charAllowed) str.push(...char);
    if (numberAllowed) str.push(...num);
    for (let i = 0; i < lengthOfPassword; i++) {
      let index = Math.floor(Math.random() * str.length);
      newPassword += str[index];
    }

    setGeneratedPassword(newPassword);
  };

  useEffect(() => {
    PasswordGenerator();
  }, [lengthOfPassword, numberAllowed, charAllowed]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto rounded-lg shadow-md px-4  my-8 text-orange-500
  bg-gray-700"
      >
        <h1 className="w-full max-w-md  p-4 text-xl text-white">
          Password Generator
        </h1>
        <div className="flex overflow-hidden rounded-lg">
          <input
            className="outline-none w-full py-1 px-4 rounded-lg mb-4"
            value={generatedPassword}
            type="text"
            placeholder="password"
            readOnly
          ></input>
          <button className="bg-blue-700 text-white px-3 py-3 mb-4">
            copy
          </button>
        </div>
        <div className="flex gap-x-2">
          <input
            id="lengthOfPassword"
            className="cursor-pointer"
            type="range"
            max={40}
            min={7}
            value={lengthOfPassword}
            onChange={(e) => setLengthOfPassword(e.target.value)}
          ></input>
          <label htmlFor="lengthOfPassword">Length:{lengthOfPassword} </label>
          <input
            id="numberAllowed"
            value={numberAllowed}
            type="checkbox"
            onClick={(e) => setNumberAllowed((prev) => !prev)}
          ></input>
          <label htmlFor="numberAllowed">Numbers</label>
          <input
            id="charAllowed"
            type="checkbox"
            value={charAllowed}
            onClick={(e) => setCharAllowed((prev) => !prev)}
          ></input>
          <label htmlFor="charAllowed">Characters</label>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
