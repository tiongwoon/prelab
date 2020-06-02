import React from "react";
import { navigate } from "@reach/router";

export default function ProgressButton(props) {

//Logic for determining the next page when user clicks the progress button
 function goTo() {

    const indices = ["motivation", "theory", "lab", "dragbalance", "safety" ];
    const index = indices.indexOf(props.sectionName);

     if (props.counter <= 3) {
         if (index >= 4) {
             navigate(`/${indices[0]}`)
         } else {
             navigate(`/${indices[index + 1]}`)
         }
     } else {
         navigate('/#tasks')
     }
 }
 

  function clickHandler() {
    props.progress();
    props.toggle();
    goTo();
  }

  return (
    <div style={bottomBar}>
        <button className="completeSectionButton" onClick={clickHandler} type="button">
          Complete and Proceed
        </button>

    </div>
  );
}

const bottomBar = {
  height: "10vh",
  marginTop: "20vh",
  position: "relative",
  zIndex: "999",
};