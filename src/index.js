import headerContent from "./components/header/header";
import {firstTab, secondTab} from './components/nav/nav'

const initializeApp = () => {
    const content = document.querySelector("#content");
    content.appendChild(headerContent());
    content.appendChild(firstTab());
    content.appendChild(secondTab());

}
initializeApp();


