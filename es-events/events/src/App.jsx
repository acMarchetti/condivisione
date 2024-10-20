import { AlertClock } from "./AlertClock";

export function App() {
  const clock = () => {
    alert(new Date());
  };
  return (
    <>
      <AlertClock clock={clock} />
    </>
  );
}
