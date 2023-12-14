import React, { useState } from 'react';
import CSSdemo from '../components/demos/CSSdemo';
import logo from '../assets/images/logo.png';
import '../styles/demosStyle.css';

export default function Demos() {
  const [demoActive, setDemoActive] = useState(false);
  const [demoMode, setDemoMode] = useState(null);

  const handleChangeDemoMode = (val) => {
    setDemoActive(!demoActive);
    setDemoMode(val);
  };

  //   console.log('demoMode:', demoMode);

  return (
    <>
      {!demoActive && (
        <div className="demos-container">
          <div className="demos-header-section">
            <div className="demos-left-header">
              <div className="demos-logo-wrapper">
                <a href="/">
                  <img src={logo} alt="logo" className="demos-logo" />
                </a>
              </div>
              <span
                className="demos-option"
                onClick={() => handleChangeDemoMode('css-demo')}
              >
                CSS/SCSS Demo
              </span>
            </div>
            <div className="demos-right-header"></div>
          </div>
        </div>
      )}

      {demoActive && demoMode === 'css-demo' && (
        <CSSdemo setDemoActive={setDemoActive} logo={logo} />
      )}
    </>
  );
}
