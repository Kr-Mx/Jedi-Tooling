import './styles/style.css'
import PROJECT_CONSTANTS from './constants/PROJECT_CONSTANTS'
import {renderElements} from "./helpers/renderElements";

const {links, classNames} = PROJECT_CONSTANTS

const HTMLElementsArray = classNames.map(
  (className, index, array) => {
    const elementData = {
      insertionPoint: 'container',
      className: className,
    }
    const notLinksAmount = array.filter(className => className !== 'link').length
    const linkPosition = index - notLinksAmount
    switch (className) {
      case 'container':
        elementData.insertionPoint = 'body'
        elementData.tagName = 'div'
        break
      case 'heading':
        elementData.tagName = 'h1'
        elementData.innerText = 'Forte Frontend Jedi Course'
        break
      case 'linksWrapper':
        elementData.insertionPoint = 'container'
        elementData.tagName = 'div'
        break
      case 'link':
        const [title, href] = Object.entries(links)[linkPosition]
        elementData.insertionPoint = 'linksWrapper'
        elementData.tagName = 'a'
        elementData.attributes = {title, href}
    }
    return elementData
  }
)

renderElements(HTMLElementsArray)
