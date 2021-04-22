import headerContent from './components/header/header';

const content = document.querySelector("#content");

const contentStarter = ( tag, text, style) => {
    const element = document.createElement(tag);
    element.innerHTML = text;
    element.style = style
    return element;
}

function header () {
    return contentStarter("div", headerContent(), ("color: red ; background: blue"));
}
function navMenu () {
    return contentStarter("span", "navMenu")
}
function container () {
    return contentStarter("div", "content")
}
function footer () {
    return contentStarter("div", "footer")
}

content.appendChild(header());
content.appendChild(navMenu());
content.appendChild(container());
content.appendChild(footer())