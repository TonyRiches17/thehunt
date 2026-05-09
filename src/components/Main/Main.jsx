import "./Main.css";

function Main() {
  return(
    <div className="main">
      <p className="main__instructions">Welcome to the Hunt. The following are a set of instructions to help guide
        you through your day. This hunt shall consist of a few locations and a few people you must visit/contact in order
        to obtain the necessary codes to complete the hunt. Once you obtain a (4-digit) code you may enter it into any code box
        underneath. Only one box will accept the respective code, so you may have to try them all.
        Each clue shall provide you with a detail to remember, and a code to enter. Each correctly
        entered code will reveal the next location. Have Fun!
      </p>
      <div className="main__codes-container">
        <input type="number" className="main__input" />
        <span className="main__divider">-----</span>
        <input type="number" className="main__input" />
        <span className="main__divider">-----</span>
        <input type="number" className="main__input" />
        <span className="main__divider">-----</span>
        <input type="number" className="main__input" />
        <span className="main__divider">-----</span>
        <input type="number" className="main__input" />
      </div>
      <button type="button" className="main__button">Submit</button>
    </div>
  )
}

export default Main;