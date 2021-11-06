const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
//jsx is the item to be rendered
//the target node is the DOM node that you want to render the component to
ReactDOM.render(JSX, document.getElementById("challenge-node"));
