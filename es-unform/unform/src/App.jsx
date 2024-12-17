import { FocusableInput } from "./FocusableInput";
import UncontrolledLogin from "./UncrolledLogin";

export function App() {
  return (
    <StrictMode>
      <UncontrolledLogin />
      <FocusableInput />
    </StrictMode>
  );
}
