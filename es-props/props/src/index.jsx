import {createRoot} from "react-dom/client" 
import { App } from "./app"

const welcomeMessage = <App/>
createRoot(document.getElementById("root")).render(welcomeMessage)