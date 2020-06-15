import _ from 'lodash';

const Component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'world'], ' ');
  return element;
}

document.body.appendChild(Component());
