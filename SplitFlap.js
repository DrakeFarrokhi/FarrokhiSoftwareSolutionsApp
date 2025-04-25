// SplitFlap.js
import React, { useState, useEffect, useRef } from 'react';

function SplitFlap({message, scrambleSpeed = 20, settleFrames = 4, pauseBetween = 250}) {
  const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '.split('');
  const [display, setDisplay] = useState(message);
  const frameRef = useRef(0); 
  const charIndexRef = useRef(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const target = message;
    const len = target.length;
    frameRef.current = 0;
    charIndexRef.current = 0;
    let currentDisplay = ' '.repeat(len).split('');

    intervalRef.current = setInterval(() => {
    frameRef.current++;

    const idx = charIndexRef.current;
    if (frameRef.current > settleFrames) {
        currentDisplay[idx] = target[idx];
        charIndexRef.current++;
        frameRef.current = 0;
    } else {
        currentDisplay[idx] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }

    setDisplay(currentDisplay.join(''));

    if (charIndexRef.current >= len) {
        clearInterval(intervalRef.current);
    }
    }, scrambleSpeed);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [scrambleSpeed, settleFrames, pauseBetween, message]);

  return (
    <div>{display}</div>
  );
}

export default SplitFlap;