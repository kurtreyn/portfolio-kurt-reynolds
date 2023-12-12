import React, { useState } from 'react';
import Button from './Button';
import BreakingRecords from './algorithms/breakingrecords/breakingrecords';
import '../styles/algorithmContainerStyle.css';

export default function AlgorithmContainer() {
  return (
    <div className="algorithm-container">
      <BreakingRecords />
    </div>
  );
}
