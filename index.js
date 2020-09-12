/** @jsx createElement */
/*
 *  TODO:
 *  - handle props
 *  - handle events
 *  - handle functional components
 *  - fragments?
 */
console.log("loaded jsx");

function createElement(tag, props, ...children) {
  console.log("createElement:", tag, props, children);
  const element = document.createElement(tag);

  children.forEach((child) => {
    if (child.nodeType) {
      element.appendChild(child);
    } else {
      const textNode = document.createTextNode(child);
      element.appendChild(textNode);
    }
  });

  return element;
}

const Hello = (
  <div>
    <h1>Hello world!</h1>
    <unkowncomponent foo="bar">what???</unkowncomponent>
  </div>
);

document.getElementById("root").appendChild(Hello);