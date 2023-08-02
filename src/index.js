import ReactDom from "react-dom/client"; 
import App from "./App";
import { ModalProvider } from "./context/modal-context";
import { ThemeProvider } from "./context/theme-context";
import './index.css'



const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(
    <ThemeProvider>
        <ModalProvider>
            <App/>
        </ModalProvider>
    </ThemeProvider>
);