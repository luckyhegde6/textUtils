import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const onChangeHandle = (event) => {
setText(event.target.value);
  }
  const handleUpperCase = () => {
    let upperCaseText =text.toLocaleUpperCase()
    setText(upperCaseText);
    props.showAlert ("success" ,"Converted to UpperCase");
  }
  const handleLowerCase = () => {
    let lowerCaseText =text.toLocaleLowerCase()
    setText(lowerCaseText);
    props.showAlert ("success" ,"Converted to LowerCase");
  }
  const handleClearText = () => {
    setText("");
    props.showAlert ("danger" ,"Cleared the existing text");
  }
  const [text, setText] = useState('Enter Text here..................');
  return (
    <div>
      <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="textForm" className="form-label">{props.textFormLabel}</label>
        <textarea
          className="form-control"
          id="textForm"
          rows="8"
          value = {text}
          onChange={onChangeHandle}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert to UpperCase</button> 
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearText}>Clear</button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words , {text.length} Characters</p>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length * 0.08} Minutes to read</p>
      </div>
      <div className="container my-3">
        <h3>Preview</h3> 
        <p>{text}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
    textFormLabel : PropTypes.string,
    heading : PropTypes.string
  }

  TextForm.defaultProps = {
  
    textFormLabel : "Enter text to analyze",
    heading : "Default heading"
  }
  