import { useState } from "react";

const Greeting=()=>{
    const [changedText, setChangedText] = useState(false);
 const changedTextHandler=()=>{
    setChangedText(true);
 }

return (
  <div>
    <h2>Hello world!</h2>
    {!changedText && <p>Greetings from Pathan</p>}
    {changedText && <p> Changed!</p>}
    <button onClick={changedTextHandler}>Change Text</button>
  </div>
);

};
export default Greeting;