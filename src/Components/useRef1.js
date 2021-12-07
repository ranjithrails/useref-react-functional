import React, { useRef } from "react";
import AnotherComponent from "./anotherComponent";
const useRef1 = () => {
  const textInputRef = useRef(null);
  const textFocus = () => {
    console.log("textInputRef",textInputRef);
    console.log("textInputRef.current",textInputRef.current)
    textInputRef.current.focus();
  }
  console.log("outside return");
  return (
    <>
      {console.log("inside return")}
    <AnotherComponent ref={textInputRef} name="ranjith"/>
    <button onClick={textFocus}>Focus on the text</button>
    </>
  )
};

export default useRef1;