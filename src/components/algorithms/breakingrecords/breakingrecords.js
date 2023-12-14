import React, { useState, useEffect } from 'react';
import Button from '../../Button';
import './breakingrecords.css';

export default function BreakingRecords({}) {
  const [disable, setDisable] = useState(false);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [highLowScores, setHighLowScores] = useState([0, 0]);
  const [highScore, setHighScore] = useState(0);
  const [highScoreIndex, setHighScoreIndex] = useState(0);
  const [highScoreCount, setHighScoreCount] = useState(0);
  const [lowScore, setLowScore] = useState(0);
  const [lowScoreIndex, setLowScoreIndex] = useState(0);
  const [lowScoreCount, setLowScoreCount] = useState(0);
  const [scoreH, setScoreH] = useState(0);
  const [scoreL, setScoreL] = useState(0);
  const [step, setStep] = useState(0);

  const startFunction = () => {
    setStarted(true);
    setStep(1);
    setScoreH(10);
    setHighScore(10);
    setLowScore(10);
  };

  const handleNext = () => {
    if (step === 1) {
      setIndex(index + 1);
      setScoreH(5);
      setHighScore(10);
      setStep(2);
    }
    if (step === 2) {
      setIndex(index + 1);
      setScoreH(20);
      setStep(3);
    }
    if (step === 3) {
      setIndex(index + 1);
      setHighScore(20);
      setHighScoreIndex(2);
      setHighScoreCount(1);
      setScoreH(20);
      setStep(4);
    }
    if (step === 4) {
      setIndex(index + 1);
      setScoreH(4);
      setStep(5);
    }
    if (step === 5) {
      setIndex(index + 1);
      setScoreH(5);
      setStep(6);
    }
    if (step === 6) {
      setIndex(index + 1);
      setScoreH(2);
      setStep(7);
    }
    if (step === 7) {
      setIndex(index + 1);
      setScoreH(25);
      setStep(8);
    }
    if (step === 8) {
      setIndex(index + 1);
      setScoreH(1);
      setHighScore(25);
      setHighScoreIndex(7);
      setHighScoreCount(2);
      setStep(9);
    }
    if (step === 9) {
      setIndex(0);
      setScoreL(10);
      setScoreH(0);
      setStep(10);
    }
    if (step === 10) {
      setIndex(index + 1);
      setScoreL(5);
      setStep(11);
    }
    if (step === 11) {
      setIndex(index + 1);
      setScoreL(20);
      setLowScore(5);
      setLowScoreIndex(1);
      setLowScoreCount(1);
      setStep(12);
    }
    if (step === 12) {
      setIndex(index + 1);
      setScoreL(20);
      setLowScore(5);
      setStep(13);
    }
    if (step === 13) {
      setIndex(index + 1);
      setScoreL(4);
      setLowScore(5);
      setStep(14);
    }
    if (step === 14) {
      setIndex(index + 1);
      setScoreL(5);
      setLowScore(4);
      setLowScoreIndex(4);
      setLowScoreCount(2);
      setStep(15);
    }
    if (step === 15) {
      setIndex(index + 1);
      setScoreL(2);
      setStep(16);
    }
    if (step === 16) {
      setIndex(index + 1);
      setScoreL(25);
      setLowScore(2);
      setLowScoreIndex(6);
      setLowScoreCount(3);
      setStep(17);
    }
    if (step === 17) {
      setIndex(index + 1);
      setScoreL(1);
      setStep(18);
    }
    if (step === 18) {
      setIndex(0);
      setScoreL(1);
      setLowScore(1);
      setLowScoreIndex(8);
      setLowScoreCount(4);
      setStep(19);
    }
    if (step === 19) {
      setStep(20);
    }
    if (step === 20) {
      setStep(21);
    }
    if (step === 21) {
      startFunction();
    }
  };

  const handlePrevious = () => {
    if (index === 0) {
      startFunction();
    }
    if (step === 1) {
      setIndex(0);
      setScoreH(5);
      setHighScore(10);
      setStep(0);
    }
    if (step === 2) {
      setIndex(1);
      setScoreH(5);
      setHighScore(10);
      setStep(1);
    }
    if (step === 3) {
      setIndex(2);
      setScoreH(20);
      setStep(2);
    }
    if (step === 4) {
      setIndex(3);
      setHighScore(20);
      setHighScoreIndex(2);
      setHighScoreCount(1);
      setScoreH(20);
      setStep(3);
    }
    if (step === 5) {
      setIndex(4);
      setScoreH(4);
      setStep(4);
    }
    if (step === 6) {
      setIndex(5);
      setScoreH(5);
      setStep(5);
    }
    if (step === 7) {
      setIndex(6);
      setScoreH(2);
      setStep(6);
    }
    if (step === 8) {
      setIndex(7);
      setScoreH(25);
      setStep(7);
    }
    if (step === 9) {
      setIndex(8);
      setScoreH(1);
      setHighScore(25);
      setHighScoreIndex(7);
      setHighScoreCount(2);
      setStep(8);
    }
    if (step === 10) {
      setIndex(0);
      setScoreL(10);
      setScoreH(0);
      setStep(9);
    }
    if (step === 11) {
      setIndex(1);
      setScoreL(5);
      setStep(10);
    }
    if (step === 12) {
      setIndex(2);
      setScoreL(20);
      setLowScore(5);
      setLowScoreIndex(1);
      setLowScoreCount(1);
      setStep(11);
    }
    if (step === 13) {
      setIndex(3);
      setScoreL(20);
      setLowScore(5);
      setStep(12);
    }
    if (step === 14) {
      setIndex(4);
      setScoreL(4);
      setLowScore(5);
      setStep(13);
    }
    if (step === 15) {
      setIndex(5);
      setScoreL(5);
      setLowScore(4);
      setLowScoreIndex(4);
      setLowScoreCount(2);
      setStep(14);
    }
    if (step === 16) {
      setIndex(6);
      setScoreL(2);
      setStep(15);
    }
    if (step === 17) {
      setIndex(7);
      setScoreL(25);
      setLowScore(2);
      setLowScoreIndex(6);
      setLowScoreCount(3);
      setStep(16);
    }
    if (step === 18) {
      setIndex(8);
      setScoreL(1);
      setStep(17);
    }
    if (step === 19) {
      setIndex(0);
      setScoreL(1);
      setLowScore(1);
      setLowScoreIndex(8);
      setLowScoreCount(4);
      setStep(18);
    }
    if (step === 20) {
      setStep(19);
    }
    if (step === 21) {
      setStep(20);
    }
  };

  return (
    <div className="function-container">
      <div className="problem-description">
        <span>
          Maria plays college basketball and wants to go pro. Each season she
          maintains a record of her play. She tabulates the number of times she
          breaks her season record for most points and least points in a game.
          Points scored in the first game establish her record for the season,
          and she begins counting from there.
        </span>
      </div>
      <div className="function-code-and-controls-section">
        <div className="function-left-side">
          <code className="function-name">
            function breakingRecords(scores)&#123;
          </code>
          <code className="function-body">
            <br />
            <span>
              let highLowScores = &#91;
              {step < 20 && (
                <span className="variable-text">{highLowScores}</span>
              )}
              {step === 20 && <span className="variable-text">2,0</span>}
              {step >= 21 && <span className="variable-text">2,4</span>}
              &#93;
            </span>
            <span>
              let highScore = scores&#91;
              <span className="variable-text">{highScoreIndex}</span>
              &#93;
            </span>
            <span>
              let highScoreCount =
              <span className="variable-text">{highScoreCount}</span>
            </span>
            <span>
              let lowScore = scores&#91;
              <span className="variable-text">{lowScoreIndex}</span>
              &#93;
            </span>
            <span>
              let lowScoreCount =
              <span className="variable-text">{lowScoreCount}</span>
            </span>
            <span>let games = scores.length</span>

            <br />
            <span>for (let score of scores)&#123; </span>
            <span>
              if(score:
              <span className="variable-text">{scoreH} </span>
              &#62; highScore:
              <span className="variable-text">{highScore}</span>
              )&#123;
            </span>
            <span>
              highScore = score
              <br />
              highScoreCount++
              <span className="variable-text">{highScoreCount}</span>
            </span>
            <span style={{ marginLeft: '5px' }}> &#125;</span>
            <span> &#125;</span>

            <br />
            <span>for (let score of scores)&#123; </span>
            <span>
              if(score:
              <span className="variable-text">{scoreL} </span>
              &#60; lowScore:
              <span className="variable-text">{lowScore}</span>
              )&#123;
            </span>
            <span>
              lowScore = score
              <br />
              lowScoreCount++
              <span className="variable-text">{lowScoreCount}</span>
            </span>
            <span style={{ marginLeft: '5px' }}> &#125;</span>
            <span> &#125;</span>

            <br />
            <span>
              highLowScores.push(highScoreCount)
              {step === 19 && (
                <span className="variable-text">{highScoreCount}</span>
              )}
            </span>
            <span>
              highLowScores.push(lowScoreCount)
              {step === 20 && (
                <span className="variable-text">{lowScoreCount}</span>
              )}
            </span>
            <span>
              return highLowScores
              {step >= 21 && (
                <span className="variable-text">&#91;2,4&#93;</span>
              )}
            </span>
          </code>
          <code className="function-close">&#125;</code>
          <br />
          <code>let scoresArray = &#91;10, 5, 20, 20, 4, 5, 2, 25, 1&#93;</code>
          <br />
          <code>breakingRecords(scoresArray)</code>
        </div>

        <div className="function-right-side">
          <div className="function-control-buttons">
            {!started && (
              <Button
                label="Start"
                disabled={disable}
                onClick={startFunction}
              />
            )}
            {started && (
              <Button
                label="Previous"
                disabled={disable}
                onClick={handlePrevious}
              />
            )}
            {started && (
              <Button label="Next" disabled={disable} onClick={handleNext} />
            )}
          </div>

          <div className="variable-monitor">
            <span>High Score Loop</span>
            <div className="monitor-text-wrapper">
              <span>
                Index: <span className="variable-text"> {index}</span>
              </span>
            </div>
            <div className="monitor-text-wrapper">
              <span>
                Score: <span className="variable-text"> {scoreH}</span>
              </span>
            </div>
            <div className="monitor-text-wrapper">
              <span>
                High Score: <span className="variable-text"> {highScore}</span>
              </span>
            </div>
            <div className="monitor-text-wrapper">
              <span>
                High Score Count:{' '}
                <span className="variable-text"> {highScoreCount}</span>
              </span>
            </div>
            <br />
            <span>Low Score Loop</span>
            <div className="monitor-text-wrapper">
              <span>
                Index: <span className="variable-text"> {index}</span>
              </span>
            </div>
            <div className="monitor-text-wrapper">
              <span>
                Score: <span className="variable-text"> {scoreL}</span>
              </span>
            </div>
            <div className="monitor-text-wrapper">
              <span>
                Low Score: <span className="variable-text"> {lowScore}</span>
              </span>
            </div>
            <div className="monitor-text-wrapper">
              <span>
                Low Score Count:{' '}
                <span className="variable-text"> {lowScoreCount}</span>
              </span>
            </div>
            <div className="monitor-text-wrapper">
              <span>
                High/Low Scores: &#91;
                {step < 20 && (
                  <span className="variable-text">{highLowScores}</span>
                )}
                {step === 20 && <span className="variable-text">2,0</span>}
                {step >= 21 && <span className="variable-text">2,4</span>}
                &#93;
              </span>
            </div>
            {/* <div className="monitor-text-wrapper">
              <span>
                STEP:
                <span className="variable-text"> {step}</span>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
