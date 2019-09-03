import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ErrorBoudary, Err } from "./AppWithError";
import * as serviceWorker from "./serviceWorker";
import { Input } from "./Input";
import { ShowHide } from "./ShowHide";

// ReactDOM.render(
//   <ErrorBoudary fallback={<h1>Error title</h1>}>
//     <button
//       onClick={() => {
//         try {
//           throw new Error();
//         } catch (e) {}
//       }}
//     >
//       Click me
//     </button>
//   </ErrorBoudary>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <Input autoFocus={true} />
//     <Input autoFocus={true} />
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(<ShowHide />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
