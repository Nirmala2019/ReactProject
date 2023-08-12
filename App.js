/*const heading = React.createElement("h1",{id: "heading", xyz: "abc"},"Hello World from React...!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/


/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag </h1>
 * <h2>I am h2 tag </h2>
 * </div>
 * 
 * * <div id="child">
 * <h1>I am h1 tag </h1>
 * <h2>I am h2 tag </h2>
 * </div>
 * </div>
 * 
 * 
 * 
 * 
 */
/**Nested structure in react */
const haeding = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {},
           [ React.createElement("h1",{},"i am h1 tag"), React.createElement("h2",{},"I am h2 tag ")])
    ),
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {},
           [ React.createElement("h1",{},"i am h1 tag of child2"), React.createElement("h2",{},"I am h2 tag of child2")])
    )]
);
console.log(haeding);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(haeding);