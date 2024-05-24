import { useState } from "react";

export default function Player() {
  let [playerName, setPlayerName] = useState()
  let [submitted, setSubmitted] = useState(false)
  function handleEntreName(event) {
    setSubmitted(false)
    console.log(event.target.value)
    setPlayerName(event.target.value)
  }
  function handleButtonClick() {
    setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"} </h2>
      <p>
        <input type="text" value={playerName} onChange={handleEntreName} />
        <button onClick={handleButtonClick} >Set Name</button>
      </p>
    </section>
  );
}
