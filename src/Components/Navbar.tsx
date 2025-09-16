import React from 'react'
import { Link } from 'react-router-dom'

type Mode = 'light' | 'dark'

interface NavbarProps {
  title?: string
  mode?: Mode
  toggleMode?: () => void
}

export default function Navbar({ title = 'Textutils', mode = 'light', toggleMode }: NavbarProps) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-check form-switch" style={{ marginRight: '1rem' }}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={mode === 'dark'}
          onChange={toggleMode}
        />
        <label className={`form-check-label ${mode === 'light' ? 'text-dark' : 'text-light'}`} htmlFor="flexSwitchCheckChecked">
          Dark
        </label>
      </div>
    </nav>
  )
}
