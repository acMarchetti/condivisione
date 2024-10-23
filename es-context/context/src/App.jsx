import { createContext, useState } from "react";
import { Hello } from "./Hello";
export const LanguageContext = createContext("en");

export function App() {
  const [lang, setLang] = useState("en");
  function handleLanguage(event) {
    setLang(event.target.value);
  }
  return (
    <>
      <LanguageContext.Provider value={lang}>
        <Hello />
      </LanguageContext.Provider>

      <select name="langHandler" id="langHandler" onChange={handleLanguage}>
        <option value="it">Ita</option>
        <option value="en">Eng</option>
      </select>
    </>
  );
}
