import { menuContentCreator, seasonOfferContentCreator } from "../content/content";


export const firstTab = () => {
    const firstButton = document.createElement('button');
    firstButton.setAttribute('id','tabOneButton');
    firstButton.innerHTML = "Season offer";
    firstButton.addEventListener('click', (e) => {seasonOfferContentCreator()})
    return firstButton;
}
export const secondTab = () =>{
    const secondButton = document.createElement('button');
    secondButton.setAttribute('id','tabTwoButton');    
    secondButton.innerHTML = "Menu";
    secondButton.addEventListener('click', (e) => {menuContentCreator()})
    return secondButton;
}


