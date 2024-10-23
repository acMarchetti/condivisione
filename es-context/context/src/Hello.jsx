import { useContext } from "react";
import { LanguageContext } from "./App";

export function Hello() {
  const lang = useContext(LanguageContext);

  return (
    <>
      <h2>{lang === "en" ? "Hello, world!" : "Ciao, Mondo!"}</h2>
    </>
  );
}
