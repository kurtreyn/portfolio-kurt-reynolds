import React, { useState } from 'react';
import {
  boraBora,
  hamburg,
  castle,
  stoneBridgePanorama,
  fireworksAsia,
  waterfall,
  london,
  mountains,
  temple,
  rainbow,
  swimmingInOcean,
  mosque,
  trainInScotland,
  beachFootPrints,
  archesNationalPark,
  iceland,
  venice,
  greekMonastery,
  monument,
  operaHouse,
  copenhagen,
  lightHouse,
  acropolis,
  osaka,
  newZealand,
  vacationPrep,
} from './externalImages';
import searchIcon from '../../assets/icons/search.svg';
import closeIcon from '../../assets/icons/close-icon.svg';
import bellIcon from '../../assets/icons/bell.svg';
import curlyLoopIcon from '../../assets/icons/curly-loop.svg';
import bookmarkIcon from '../../assets/icons/bookmark.svg';
import './CSSdemo.css';

export default function CSSdemo({ setDemoActive, logo }) {
  const [showSplashPage, setShowSplashPage] = useState(true);

  const handleShowSplashPage = () => {
    setShowSplashPage(false);
  };

  const handleClose = () => {
    setDemoActive(false);
  };

  const handleFauxFunction = () => {
    alert('Sorry, feature not available demo');
  };

  const CssDemoGallery = () => (
    <div className="css-demo-gallery-container-outer">
      <div className="css-demo-gallery-container-inner">
        <img src={boraBora} alt="bora bora" className="css-gallery-demo-img" />
        <img src={hamburg} alt="hamburg" className="css-gallery-demo-img" />
        <img src={castle} alt="castle" className="css-gallery-demo-img" />
        <img src={waterfall} alt="waterfall" className="css-gallery-demo-img" />
        <img src={london} alt="london" className="css-gallery-demo-img" />
        <img src={mountains} alt="mountains" className="css-gallery-demo-img" />
        <img src={temple} alt="temple" className="css-gallery-demo-img" />
        <img src={rainbow} alt="rainbow" className="css-gallery-demo-img" />
        <img
          src={swimmingInOcean}
          alt="swimming in ocean"
          className="css-gallery-demo-img"
        />
        <img src={mosque} alt="mosque" className="css-gallery-demo-img" />
        <img
          src={trainInScotland}
          alt="train"
          className="css-gallery-demo-img"
        />
        <img
          src={copenhagen}
          alt="copenhagen"
          className="css-gallery-demo-img"
        />
        <img src={monument} alt="monument" className="css-gallery-demo-img" />
        <img
          src={fireworksAsia}
          alt="fireworks"
          className="css-gallery-demo-img"
        />
        <img
          src={archesNationalPark}
          alt="arches national park"
          className="css-gallery-demo-img"
        />
        <img
          src={greekMonastery}
          alt="greek monastery"
          className="css-gallery-demo-img"
        />
        <img src={iceland} alt="iceland" className="css-gallery-demo-img" />
        <img
          src={operaHouse}
          alt="sydney opera house"
          className="css-gallery-demo-img"
        />
        <img
          src={lightHouse}
          alt="light house"
          className="css-gallery-demo-img"
        />
        <img src={osaka} alt="osaka japan" className="css-gallery-demo-img" />
        <img
          src={newZealand}
          alt="new zealand"
          className="css-gallery-demo-img"
        />
        <img
          src={stoneBridgePanorama}
          alt="stone bridge"
          className="css-gallery-demo-img"
        />
      </div>
    </div>
  );

  const CssDemoSplashPage = () => (
    <div className="css-demo-splash-page-container">
      <div className="css-demo-splash-page-inner">
        <h2 className="css-demo-splash-page-header-text">
          CSS Travel Site Demo
        </h2>
        <form className="css-demo-splash-page-form">
          <input
            type="search"
            placeholder="Where do you want to go today?"
            className="css-demo-splash-page-search-input"
          />
          <img
            src={searchIcon}
            alt="search"
            className="css-demo-splash-page-search-icon"
            onClick={handleFauxFunction}
          />
        </form>
        <div className="css-demo-splash-page-footer">
          <span
            className="css-demo-splash-page-text-link"
            onClick={handleShowSplashPage}
          >
            Enter Site
          </span>
        </div>
      </div>
    </div>
  );

  const CssIconBar = () => (
    <div className="css-icon-bar-container">
      <div className="css-icon-wrapper">
        <img
          src={curlyLoopIcon}
          alt=""
          className="css-icon-bar-icon"
          onClick={handleFauxFunction}
        />
        <img
          src={bellIcon}
          alt=""
          className="css-icon-bar-icon"
          onClick={handleFauxFunction}
        />
        <img
          src={bookmarkIcon}
          alt=""
          className="css-icon-bar-icon"
          onClick={handleFauxFunction}
        />
      </div>
    </div>
  );

  const CssDemoHeader = () => {
    return (
      <header className="css-demo-header">
        <h1 className="css-header-text">CSS Demo</h1>
        <img
          src={closeIcon}
          alt="close"
          className="css-demo-icon"
          onClick={handleClose}
        />
      </header>
    );
  };

  const CssDemoBody = () => {
    return (
      <section className="css-demo-body">
        <div className="css-demo-body-row">
          <div className="css-demo-body-column image-col">
            <div className="css-body-image-wrapper">
              <img src={venice} alt="venice" className="css-demo-body-image" />
            </div>
          </div>
          <div className="css-demo-body-column text-col">
            <h2 className="css-demo-body-text-title">
              Top 10 Places to Visit in Venice Italy.
            </h2>
            <span className="css-demo-body-text">
              Looking for a romantic getaway? Or maybe something of an
              adventure? We've got a location just for you.
            </span>
            <div className="css-body-icon-bar-wrapper">
              <CssIconBar />
            </div>
          </div>
        </div>

        <div className="css-demo-body-row">
          <div className="css-demo-body-column text-col">
            <h2 className="css-demo-body-text-title">
              How About a List of the Best Beach Locations?
            </h2>
            <span className="css-demo-body-text">
              Need a place to just sit back and relax? There's a beach with your
              name on it.
            </span>
            <div className="css-body-icon-bar-wrapper">
              <CssIconBar />
            </div>
          </div>
          <div className="css-demo-body-column image-col">
            <div className="css-body-image-wrapper">
              <img
                src={beachFootPrints}
                alt="beach footprints"
                className="css-demo-body-image"
              />
            </div>
          </div>
        </div>

        <div className="css-demo-body-row">
          <div className="css-demo-body-column image-col">
            <div className="css-body-image-wrapper">
              <img
                src={acropolis}
                alt="acropolis"
                className="css-demo-body-image"
              />
            </div>
          </div>
          <div className="css-demo-body-column text-col">
            <h2 className="css-demo-body-text-title">
              Tour the Ancient Marvels of the World
            </h2>
            <span className="css-demo-body-text">
              From the Acropolis in Athens Greece to the Colosseum in Rome
              Italy, the Pyramids in Cairo Egypt, the ruins of Gobekli Tepe and
              more. We're here to get you to your destination.
            </span>
            <div className="css-body-icon-bar-wrapper">
              <CssIconBar />
            </div>
          </div>
        </div>

        <div className="css-demo-body-row">
          <div className="css-demo-body-column text-col">
            <h2 className="css-demo-body-text-title">
              If you have a trip in mind, we've got a destination!
            </h2>
            <img
              src={vacationPrep}
              alt="vacation prep"
              className="css-large-image-body"
            />
          </div>
          <div className="css-demo-body-column image-col">
            <CssDemoGallery />
          </div>
        </div>
      </section>
    );
  };

  const CssDemoFooter = () => {
    return (
      <footer className="css-demo-footer">
        <img src={logo} alt="logo" className="css-demo-footer-img" />
      </footer>
    );
  };

  return (
    <div className="css-demo-container">
      {showSplashPage && <CssDemoSplashPage />}
      {!showSplashPage && (
        <>
          <CssDemoHeader />
          <CssDemoBody />
          <CssDemoFooter />
        </>
      )}
    </div>
  );
}
