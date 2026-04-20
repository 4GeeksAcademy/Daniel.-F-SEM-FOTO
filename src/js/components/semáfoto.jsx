import React from "react";

const [ color, setColor ] = useState("red");

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TrafficLight />);

