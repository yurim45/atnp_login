import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Timer = () => {
  const [mm, setMm] = useState(2);
  const [ss, setSs] = useState(59);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(ss) > 0) {
        setSs(parseInt(ss) - 1);
      }
      if (parseInt(ss) === 0) {
        if (parseInt(mm) === 0) {
          clearInterval(countdown);
        } else {
          setMm(parseInt(mm) - 1);
          setSs(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [mm, ss]);

  return (
    <TimerWrap>
      <div className='timer'>{`${mm}:${ss}`}</div>
    </TimerWrap>
  );
};

export default Timer;

const TimerWrap = styled.div`
  .timer {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.red};
    text-align: right;
  }
`;
