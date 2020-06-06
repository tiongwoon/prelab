import React from "react";
import SectionCards from "./elements/SectionCards";
import Header from "./elements/Header";
import Sidebar from "./elements/Sidebar";
import MathJax from "react-mathjax2";

export default function Home(props) {
  const relation = `{D=\\phi(U_{\\infty},L,\\rho,\\mu)}`;
  const Uinfinit = `{U_{\\infty}~}`;
  const L = `{L~}`;
  const rho = `{\\rho~}`;
  const mu = `{\\mu~}`;

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Home" />

        <div style={introContainer}>
          <div className="secondaryHeader">
            ME2 Fluid Mechanics - Drag Lab Preparation
          </div>
          <article className="textAreaFloating">
            <p>
              This website will help you prepare adequately for the Fluid
              Mechanics Drag Lab. You can keep track of your progress with the
              progress bar at the navigation column on the left of the page.
              Make sure to click the 'Complete and Proceed' button at the bottom
              of every page to save your progress and be directed to the next
              section. You can either follow the chronological order from top to
              bottom of the sections in the navigation bar on the left or you
              can direct your own learning and choose which section you want to
              explore.
            </p>
            <br></br>
            <p>
              The lab preparation material is broken down to 5 distinct sections
              as below, with each providing key ideas to familiarise yourself
              with before attending the lab session. Finally, information on
              your tasks in the lab and the next steps after the lab are
              detailed as below.
            </p>
            <br></br>
            <p>
              This preparation should take{" "}
              <strong>around 30 minutes to complete</strong>, but will vary
              depending on how long you take to solve the quiz. As such, don't
              spend too long on getting the answer right, just make sure you
              understand the techniques as they will come in handy for the lab.
            </p>
          </article>
        </div>
        <SectionCards />

        <div style={taskContainer}>
          <div id="tasks" style={taskStyle}>
            <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
              Your Task!
            </span>
            <br></br>
            <p>
              <strong>The objective of the lab is to investigate the effects of plate
              size and shape as well as the air speed on the drag force.</strong>
            </p>
            <br></br>
            <p>
              During the session, <strong>you will be splitted into 2
              sub-groups.</strong>
            </p>
            <br></br>
            <p> <strong>The first sub-group</strong> will:</p>
            <ol>
              <li>
                Measure the drag on a different sizes of discs using the
                balance.
              </li>
              <li>
                Compare your results to the other group who has a different disc
                size.
              </li>
              <li>Measure one wake velocity profile with the pitot tube.</li>
            </ol>
            <br></br>
            <p>
              When comparing drag measurements, consider the drag force and drag
              coefficient. The data set given in both the lab and the drag
              balance questions can be thought of as coming from the same
              experiment. In the theory section, you calculate drag force from a
              wake profile. In the drag balance section, you calculate drag
              force from a drag balance. Same applies to the drag coefficient.
              In principle, they should agree with each other. But as you can
              see in the lab, they differ ever so slightly. What could be the
              source of such discrepancy?
            </p>
            <br></br>
            <p>
              <strong>The second sub-group will choose one </strong>  of the following three
              challenges relating to the flow over circular disc. You will be
              provided with LEGO disc, LEGO bricks, and plasticine.
            </p>
            <ol>
              <li>Minimise the drag in a disc</li>
              <li>
                Maximise the drag on a disc (without increasing its diameter)
              </li>
              <li>
                Minimise the drag on a 'wing mirror' modelled by a disc;
                material can only be added to upstream side
              </li>
            </ol>
            <br></br>
            <p>
              Your sub-group can start building your shape once you enter the
              lab. You can test your shape after your colleagues have completed
              their measurements. <strong>Record your shape with a photo and
              measurements of the drag.</strong> Remember to clean up before you leave.
            </p>
          </div>
          <div style={taskStyle}>
            <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
              After the Lab
            </span>
            <br></br>
            <br></br>
            <p>
              After your drag measurements in this lab session, you are required
              to process the data through the following steps. This section also
              marks the end of this lab preparation website.
            </p>
            <br></br>
            Your resuts of the drag force,{" "}
            <MathJax.Context input="tex">
              <MathJax.Node inline>D</MathJax.Node>
            </MathJax.Context>{" "}
            helped established the following relationship:
            <br></br>
            <MathJax.Context input="tex">
              <MathJax.Node>{relation}</MathJax.Node>
            </MathJax.Context>
            <br></br>
            where <br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{Uinfinit}</MathJax.Node>
            </MathJax.Context>
            is the upstream flow speed,<br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{L}</MathJax.Node>
            </MathJax.Context>
            is the length scale of the disc (its diameter),<br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{rho}</MathJax.Node>
            </MathJax.Context>
            is the fluid density, and<br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{mu}</MathJax.Node>
            </MathJax.Context>
            is the fluid dynamic viscosity.<br></br>
            <br></br>
            <span style={{ fontWeight: "700", fontSize: "1.2em" }}>
              You will need to complete the following tasks before the Boundary
              Layer lab.
            </span>
            <br></br>
            <ol>
              <li>
                Reduce the above equation to a simpler relationship between
                dimensionless groups of the parameters
              </li>
              <br></br>
              <li>
                Collect all the drag measurements on a circular disc from your
                first lab session(you should have at least 4 data points). Plot
                the data on a graph, using the dimensionles parameters you have
                identified. You can either plot by hand in your lab book or use
                a computer and stick your printed graph into your book.{" "}
              </li>
              <br></br>
              <li>
                On the same graph, using a different symbol, plot the drag
                measurement that you made on your customised shape. Further,
                find at least one measurement of another shape of your
                choice-from a source of your choice-and plot it on the graph
                with a third type of symbol.
              </li>
              <br></br>
              <li>
                Plot the velocity profile that you measured in the previous lab
                session, using dimensionles velocity and position where L is a
                length scale of your choice, consistent with the equation above.
              </li>
              <br></br>
              <li>
                Estimate the drag on the circular disc (70 mm diameter, 30 Hz fan
                speed) using only velocity measurement (upstream and in the
                wake). Use a control volume approach like the submarine question
                in the Theory section. Convert your drag estimate into
                dimensionless form and compare it to the average drag
                measurement using the balance. Present your results in a table
                and work out the difference (%) between them.
              </li>
              <br></br>
            </ol>
            <br></br>
          </div>
        </div>
      </main>
      <Sidebar counter={props.counter} name="Home" />
    </>
  );
}

const introContainer = {
  position: "relative",
  top: "0vh",
  paddingLeft: "5vw",
  maxWidth: "100%",
  display: "inline-block",
  marginTop: "5vh",
};

const taskStyle = {
  position: "relative",
  color: "#333",
  backgroundColor: "#fff",
  width: "auto",
  textAlign: "left",
  borderRadius: "4px",
  padding: "2em",
  marginTop: "1.5vh",
  boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.15)",
};

const taskContainer = {
  //   background: "#3A3A3A",
  borderRadius: "4px",
  position: "relative",
  marginTop: "3vh",
  maxWidth: "100%",
  height: "auto",
  marginBottom: "2em",
  padding: "1em 5vw 1em 5vw",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-evenly",
};

//<ProgressBar counter={props.counter} />
