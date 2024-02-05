
//
// <div id='parent'>
// <div id='child'>
// <h1>I'm h1 Tag</h1>
//<h2>I'm h2 Tag</h2>
//</div>
// <div id='child2'>
// <h1>I'm h1 Tag</h1>
//<h2>I'm h2 Tag</h2>
//</div>
//</div>
//
//ReactElement(Object) ⇒ HTML (Browser Understands)





const parent = React.createElement(
    "div",
    { id: 'parent', xyz: 'abc' },
   
    [
        React.createElement(
            "div",
            { id: 'child', xyz: 'abc' },
           [
            React.createElement("h1",{}, "I'm h1 Tag" ),
            React.createElement("h2",{}, "I'm h2 Tag" )
        ]
        ),
        React.createElement(
            "div",
            { id: 'child2', xyz: 'abc' },
           [
            React.createElement("h1",{}, "I'm h1 Tag" ),
            React.createElement("h2",{}, "I'm h2 Tag" )
        ]
        ),
        React.createElement(
            "div",
            { id: 'child3', xyz: 'abc' },
           [
            React.createElement("h1",{}, "I'm h1 Tag" ),
            React.createElement("h2",{}, "I'm h2 Tag" )
        ]
        )
    ]
);


// const heading = React.createElement(
//     "h1",
//     { id: 'heading', xyz: 'abc' },
//     "React JS"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);