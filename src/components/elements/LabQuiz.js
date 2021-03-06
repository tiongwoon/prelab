import React, { useState } from "react";
import { Collapse, Button } from "@chakra-ui/core";
import MathJax from "react-mathjax2";
import * as math from "mathjs";

export default function LabQuiz() {
  //Create state for the quiz
  const [valueOne, setvalueOne] = useState("");
  const [valueTwo, setvalueTwo] = useState("");
  const [valueThree, setvalueThree] = useState("");
  const [valueFour, setvalueFour] = useState("");
  const [valueFive, setvalueFive] = useState("");

  const [answerOne, setanswerOne] = useState(""); //validate if answer is true
  const [answerTwo, setanswerTwo] = useState("");
  const [answerThree, setanswerThree] = useState("");
  const [answerFour, setanswerFour] = useState("");
  const [answerFive, setanswerFive] = useState("");

  function submitHandlerOne(event) {
    const eventValue = valueOne;
    setanswerOne(eventValue);
    event.preventDefault();
  }

  function changeHandlerOne(event) {
    setvalueOne(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  //For Q=Two
  function submitHandlerTwo(event) {
    const eventValue = valueTwo;
    setanswerTwo(eventValue);
    event.preventDefault();
  }

  function changeHandlerTwo(event) {
    setvalueTwo(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  //For Q-Three
  function submitHandlerThree(event) {
    const eventValue = valueThree;
    setanswerThree(eventValue);
    event.preventDefault();
  }

  function changeHandlerThree(event) {
    setvalueThree(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  //For Q-Four
  function submitHandlerFour(event) {
    const eventValue = valueFour;
    setanswerFour(eventValue);
    event.preventDefault();
  }

  function changeHandlerFour(event) {
    setvalueFour(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  //For Q-Five
  function submitHandlerFive(event) {
    const eventValue = valueFive;
    setanswerFive(eventValue);
    event.preventDefault();
  }

  function changeHandlerFive(event) {
    setvalueFive(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  //for the collapse, each show state for each button
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);

  function handleToggle(questionNumber) {
    if (questionNumber === 1) {
      setShowOne(!showOne);
    } else if (questionNumber === 2) {
      setShowTwo(!showTwo);
    } else if (questionNumber === 3) {
      setShowThree(!showThree);
    } else if (questionNumber === 4) {
      setShowFour(!showFour);
    } else if (questionNumber === 5) {
      setShowFive(!showFive);
    }
  }

  function showCollapse(questionNumber) {
    if (questionNumber === 1) {
      return showOne;
    } else if (questionNumber === 2) {
      return showTwo;
    } else if (questionNumber === 3) {
      return showThree;
    } else if (questionNumber === 4) {
      return showFour;
    } else if (questionNumber === 5) {
      return showFive;
    }
  }

  function Answer(questionNumber) {
    let answerState = [
      answerOne,
      answerTwo,
      answerThree,
      answerFour,
      answerFive,
    ];
    let userAnswer = JSON.parse(answerState[questionNumber - 1]); //convert it to number

    //Create Mathematical Expressions for solutions, order by the question
    const solutionTwo = `{\\large 85 \\cdot 0.1 = 8.5~ \\mathrm{mm} = 0.0085~ \\mathrm{m} }`; //needs tex to add space before units

    const solutionThree = `{\\large \\Delta p = \\rho g h  }`;
    const solutionThree_two = `{\\large = 1000~\\mathrm{kg m^{-3}} ~ \\cdot ~ 9.81~\\mathrm{ms^{-1}} ~ \\cdot ~ 0.0085~m }`;
    const solutionThree_three = `{\\large = 83.39~ \\mathrm{Pa} }`;

    const solutionFour = `{\\large \\rho = 1.2~\\mathrm{kgm^{-3}} }`;
    const solutionFour_two = `{\\large Pv=RT}`;
    const solutionFour_three = `{\\large \\rho = \\frac{1}{v}=\\frac{101\\cdot 10^{3}}{287 \\cdot (273+21)} }`;

    const solutionFive = `{\\large p_\\mathrm{total} = p_\\mathrm{static} + \\frac{\\rho \\cdot v^2}{2} }`;
    const solutionFive_two = `{\\large v = \\sqrt{\\frac{\\Delta p\\cdot 2}{\\rho}} }`;
    const solutionFive_three = ` {\\large = 11.8~\\mathrm{ms^{-1}} }`;

    //for answers handling and checking
    const solutions = {
      answer: [85.0, 8.5, 83.4, 1.2, 11.8],

      working: [
        <center> Reading off the manometer image gives a value of 85mm</center>,

        <MathJax.Context input="tex">
          <MathJax.Node>{solutionTwo}</MathJax.Node>
        </MathJax.Context>,

        <center>
          {" "}
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionThree}</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionThree_two}</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionThree_three}</MathJax.Node>
          </MathJax.Context>
        </center>,

        <center>
          Using the ideal gas relation,
          <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionFour_two}</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionFour_three}</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionFour}</MathJax.Node>
          </MathJax.Context>
        </center>,

        <center>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionFive}</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionFive_two}</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionFive_three}</MathJax.Node>
          </MathJax.Context>
        </center>,
      ],
    };

    if (
      math.round(userAnswer, 1) >= solutions.answer[questionNumber - 1] - 0.5 &&
      math.round(userAnswer, 1) <= solutions.answer[questionNumber - 1] + 0.5
    ) {
      //minus one here because index starts at 1 for easier reading
      return (
        <div>
          <p style={{ color: "#0C7130" }}>Correct!</p>
          
          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(questionNumber)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showCollapse(questionNumber)} marginTop="0.7em">
            <br></br>
            {solutions.working[questionNumber - 1]}
          </Collapse>
        </div>
      );
    } else {
      return (
        <div>
          <p style={{ color: "#DD2501" }}>Wrong, please try again.</p>
          
          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(questionNumber)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showCollapse(questionNumber)} >
            <br></br>
            {solutions.working[questionNumber - 1]}
          </Collapse>
        </div>
      );
    }
  }

  //for MathJax in questions
  const densityUnits = `{kgm^{-3}~~}`;
  const speedUnits = `{ms^{-1}~~}`;

  return (
    <section style={display}>
      <div className="secondaryHeaderContainer">
        <div className="secondaryHeader">Quiz</div>
        <p className="textAreaFloating">
          Answer the following questions based on this image.
        </p>
        <img
          className="manometer"
          src={require("../../assets/manometer.jpg")}
          alt="A manometer with a reading of 85mm"
        />
      </div>

      <ol className="quizContainer">
        <li className="quizQuestion">
          
          <form onSubmit={submitHandlerOne}>
            <label for="manometer">What is the reading of the manometer? (Scale in mm) </label><br></br>
            <input
              name="answer"
              type="number"
              step="0.0001"
              onChange={changeHandlerOne}
              className="quizInputBox"
              id="manometer"
            />
            <MathJax.Context input="tex">
              <MathJax.Node inline>mm~~</MathJax.Node>
            </MathJax.Context>
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />{" "}
            <br></br>
          </form>

          {answerOne ? Answer(1) : null}
        </li>

        <li className="quizQuestion">
          <form onSubmit={submitHandlerTwo}>
            <label for="manometer-height">The manometer is sloped and has a scale factor of 0.1, what is
            the vertical height? (in mm, to 1 d.p.)</label> <br></br>
            <input
              name="answer"
              type="number"
              step="0.0001"
              onChange={changeHandlerTwo}
              className="quizInputBox"
              id="manometer-height"
            />
            <MathJax.Context input="tex">
              <MathJax.Node inline>mm~~</MathJax.Node>
            </MathJax.Context>
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />{" "}
            <br></br>
          </form>
          {answerTwo ? Answer(2) : null}
        </li>

        <li className="quizQuestion">

          <form onSubmit={submitHandlerThree}>
            <label for="manometer-pressure">The manometer contains water (density 1000kg/m3). What is the
            pressure difference it measured? (in Pa, answer to 3 d.p.)</label> <br></br>
            <input
              name="answer"
              type="number"
              step="0.0001"
              onChange={changeHandlerThree}
              className="quizInputBox"
              id="manometer-pressure"
            />
            <MathJax.Context input="tex">
              <MathJax.Node inline>Pa~~</MathJax.Node>
            </MathJax.Context>
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />{" "}
            <br></br>
          </form>
          {answerThree ? Answer(3) : null}
        </li>

        <li className="quizQuestion">

          <form onSubmit={submitHandlerFour}>
            <label for="density">Given a temperature of 21°C and under atmospheric pressure of 101
            kPa, estimate the density of air in the wind tunnel to 3 d.p. (in
            S.I. units).</label> <br></br>
            <input
              name="answer"
              type="number"
              step="0.0001"
              onChange={changeHandlerFour}
              className="quizInputBox"
              id="density"
            />
            <MathJax.Context input="tex">
              <MathJax.Node inline>{densityUnits}</MathJax.Node>
            </MathJax.Context>
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />{" "}
            <br></br>
          </form>
          {answerFour ? Answer(4) : null}
        </li>

        <li className="quizQuestion">

          <form onSubmit={submitHandlerFive}>
            <label for="air-speed">The manometer is reading the pressure difference from a
            pitot-static tube facing into an air flow. How fast is the air
            flowing? (in S.I. units)</label><br></br>
            <input
              name="answer"
              type="number"
              step="0.0001"
              onChange={changeHandlerFive}
              className="quizInputBox"
              id="air-speed"
            />
            <MathJax.Context input="tex">
              <MathJax.Node inline>{speedUnits}</MathJax.Node>
            </MathJax.Context>
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />{" "}
            <br></br>
          </form>
          {answerFive ? Answer(5) : null}
        </li>
      </ol>
    </section>
  );
}

const showSolutionButtonStyle = {
  backgroundColor: "#D4EFFC",
  border: "none",
  borderRadius: "4px",
  color: "#003E74",
  cursor: "pointer",
};

const display = {
  display: "inline-block",
  position: "relative",
  top: "0vh",
  marginTop: "0vh",
};
