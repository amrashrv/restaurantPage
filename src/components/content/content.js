export const seasonOfferContentCreator = () => {
    
    const content = document.querySelector('#content')
    const contentBox = document.createElement('div')
    contentBox.setAttribute('id', 'contentBox')
    contentBox.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas.</p> <p>Donec interdum ante ut enim consequat, quis varius nulla dapibus. Vivamus mollis fermentum augue a varius. Vestibulum in sapien at lectus gravida lobortis vulputate sed metus. Duis scelerisque justo et maximus efficitur. Donec eu eleifend quam. Curabitur aliquet commodo sapien eget vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel aliquet nunc, finibus posuere lorem. Suspendisse consectetur volutpat est ut ornare.</p>'
    content.appendChild(contentBox)
    return contentBox
}
export const menuContentCreator = () => {
    
    const content = document.querySelector('#content')
    const contentBox = document.createElement('div')
    contentBox.setAttribute('id', 'contentBox')
    contentBox.innerHTML = '<p>Quisque sit amet turpis leo. Maecenas sed dolor mi. Pellentesque varius elit in neque ornare commodo ac non tellus. Mauris id iaculis quam. Donec eu felis quam. Morbi tristique lorem eget iaculis consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean at tellus eget risus tempus ultrices. Nam condimentum nisi enim, scelerisque faucibus lectus sodales at.</p>'
    content.appendChild(contentBox)
    return contentBox
}