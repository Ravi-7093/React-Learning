const heading = React.createElement("h1",{id:"heading"},"Hello World from React");// 3 arguments first tag, object , content . The object is to provide the attributes
const root = ReactDOM.createRoot(document.getElementById("root"));// when rendering in react we use react dom ie main root we attach all elemnts 

const parent = React.createElement(   // parent is an React Object becomes an HTML element while rendering on the dom so that browser can understand 
    "div",
    {id:"parent"},
   [ React.createElement("div",{id:"child"},
   [React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am h1 tag")]),
   React.createElement("div",{id:"child2"},
   [React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am h1 tag")])]); // creating array to pass to children at same level 
root.render(parent);// while rendering on the dom it creates element initially its an object 
