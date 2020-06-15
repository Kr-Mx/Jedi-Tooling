export const renderElements = (HTMLElementsArray) => {
    document.body.classList.add('body');
    HTMLElementsArray.forEach((elementData) => {
        const {insertionPoint, className, tagName, innerText, attributes} = elementData;
        let fragment = document.querySelector(`.${insertionPoint}`);
        let element = document.createElement(tagName);
        fragment.append(element);
        element.classList.add(className);
        if (innerText) {
            element.innerText = innerText
        }
        if (attributes) {
            Object.entries(attributes).forEach(attribute=>{
                element.setAttribute(...attribute)
            })
        }
    })
}
