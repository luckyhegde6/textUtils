import React, { useState, ChangeEvent } from 'react'

interface TextFormProps {
  textFormLabel?: string
  heading?: string
  showAlert?: (type: string, message: string) => void
}

export default function TextForm({ textFormLabel = 'Enter text to analyze', heading = 'Default heading', showAlert }: TextFormProps) {
  const [text, setText] = useState<string>('Enter Text here..................')

  const onChangeHandle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  const handleUpperCase = () => {
    const upperCaseText = text.toLocaleUpperCase()
    setText(upperCaseText)
    showAlert?.('success', 'Converted to UpperCase')
  }
  const handleLowerCase = () => {
    const lowerCaseText = text.toLocaleLowerCase()
    setText(lowerCaseText)
    showAlert?.('success', 'Converted to LowerCase')
  }
  const handleCopyText = async () => {
    await navigator.clipboard.writeText(text)
    showAlert?.('dark', 'Copied the existing text')
  }
  const handleClearText = () => {
    setText('')
    showAlert?.('danger', 'Cleared the existing text')
  }

  return (
    <div>
      <div className="container">
        <h1>{heading}</h1>
        <div className="mb-3">
          <label htmlFor="textForm" className="form-label">{textFormLabel}</label>
          <textarea
            className="form-control"
            id="textForm"
            rows={8}
            value={text}
            onChange={onChangeHandle}
          />
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleCopyText}>Copy</button>
        <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleClearText}>Clear</button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Words , {text.length} Characters</p>
        <p>{(text.split(/\s+/).filter((element) => element.length !== 0).length * 0.08).toFixed(2)} Minutes to read</p>
      </div>
      <div className="container my-3">
        <h3>Preview</h3>
        <p>{text.length === 0 ? 'Nothing to Preview' : text}</p>
      </div>
    </div>
  )
}
