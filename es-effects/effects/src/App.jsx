import { Clock } from "./Clock";
import { Counter } from "./Counter";

export function App() {
  return (
    <>
      <Counter initialValue={0} increment={1} />;
      <Clock />
    </>
  );
}
