import { useState } from "react";
import "./Main.css";
import { videos } from "../../constants";

function Main() {
  const [input, setInput] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    answer: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  const complete = input.code1 === "1223" && input.code2 === "0224" && input.code3 > 2000 && input.code3 < 2145 && input.code4 === "2405" && input.code5 === "9008";

  return(
    <div className="main">
      <p className="main__instructions">Welcome to the Hunt. The following are a set of instructions to help guide
        you through your day. This hunt shall consist of a few locations and a few people you must visit/contact in order
        to obtain the necessary codes to complete the hunt. Once you obtain a (4-digit) code you may enter it into any code box
        underneath. Only one box will accept the respective code, so you may have to try them all.
        Each clue shall provide you with a detail to remember, and a code to enter. Each correctly
        entered code will reveal the next location. Your first set of instructions is to contact your Best Friend. Have Fun!
      </p>
      <div className="main__codes-container">
        <input maxLength={4} placeholder="Box 1" onChange={handleInputChange} name="code1" type="text" className="main__input" />
        <input maxLength={4} placeholder="Box 2" onChange={handleInputChange} name="code2" type="text" className="main__input" />
        <input maxLength={4} placeholder="Box 3" onChange={handleInputChange} name="code3" type="text" className="main__input" />
        <input maxLength={4} placeholder="Box 4" onChange={handleInputChange} name="code4" type="text" className="main__input" />
        <input maxLength={4} placeholder="Box 5" onChange={handleInputChange} name="code5" type="text" className="main__input" />
      </div>
      <div className="main__clue">
        {input.code1 === "1223" ? (
          <p className="main__clue-correct">
            Box 1: Good Job. The clue that this code reveals, is for you to call this number (810)-789-3152.
          </p>
        ) : input.code1.length >= 4 ? (
          <p className="main__clue-incorrect">
            Box 1: Wrong code, try another box.
          </p>
        ) : null}
      </div>
      <div className="main__clue">
        {input.code2 === "0224" ? (
          <p className="main__clue-correct">
            Box 2: Good Job. The clue that this code reveals, is for you to contact your Parents.
          </p>
        ) : input.code2.length >= 4 ? (
          <p className="main__clue-incorrect">
            Box 2: Wrong code, try another box.
          </p>
        ) : null}
      </div>
      <div className="main__clue">
        {input.code3 > 2000 && input.code3 < 2145  ? (
          <p className="main__clue-correct3">
            Box 3: Good Job. Go to your backyard to obtain the final entry in the answer box.
          </p>
        ) : input.code3.length >= 4 ? (
          <p className="main__clue-incorrect">
            Box 3: Wrong code, try another box.
          </p>
        ) : null}
      </div>
      <div className="main__clue">
        {input.code4 === "2405" ? (
          <p className="main__clue-correct">
            Box 4: Good Job. The clue that this code reveals, is for you to check your mailbox.
          </p>
        ) : input.code4.length >= 4 ? (
          <p className="main__clue-incorrect">
            Box 4: Wrong code, try another box.
          </p>
        ) : null}
      </div>
      <div className="main__clue">
        {input.code5 === "9008" ? (
          <p className="main__clue-correct">
            Box 5: Good Job. Get dressed for the outing. Once you are done, enter the time (in military time) in the remaining codebox.
          </p>
        ) : input.code5.length >= 4 ? (
          <p className="main__clue-incorrect">
            Box 5: Wrong code, try another box.
          </p>
        ) : null}
      </div>
      <input onChange={handleInputChange} placeholder="Answer" type="text" name="answer"  className={complete ? "main__input-answer" : "main__input-answer_off"} />
        {complete && input.answer.toLowerCase() === "yes" && (
          <ul className="main__video-container">
            {videos.map((video, index) => (
              <li className="main__video-videos" key={index}>
                <video className="main__video-video" controls>
                  <source src={video} type="video/mp4" />
                </video>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default Main;