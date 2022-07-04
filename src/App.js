import React from "react";
import { render } from "react-dom";
import Pet from "./Pet"
import SearchParams from "./SearchParams";



const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
        </div>
    );
};

render(<App />, document.getElementById("root"));



// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "Luna",
//             animal: "Dog",
//             breed: "Havanese"
//         }),
//         React.createElement(Pet, {
//             name: "Pepper",
//             animal: "Bird",
//             breed: "Cockatiel"
//         }),
//         React.createElement(Pet, {
//             name: "Doink",
//             animal: "Cat",
//             breed: "Mix"
//         }),
//     ]);
// };


// const App = () => {
//     return (
//         <div>
//             <h1>Adopt Me!</h1>
//             <Pet name="Luna" animal="Dog" breed="Havanese" />
//             <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
//             <Pet name="Doink" animal="Cat" breed="Mix" />
//         </div>
//     );
// };