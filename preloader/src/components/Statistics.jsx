import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Statistics = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div>
          {counterOn && (
            <p>
              <CountUp start={0} end={213} duration={2} delay={0} />
            </p>
          )}
        </div>
        <div>
          {counterOn && (
            <p>
              <CountUp start={0} end={278} duration={2} delay={0} />
            </p>
          )}
        </div>
        <div>
          {counterOn && (
            <p>
              <CountUp start={0} end={345} duration={2} delay={0} />
            </p>
          )}
        </div>
        <div>
          {counterOn && (
            <p>
              <CountUp start={0} end={156} duration={2} delay={0} />
            </p>
          )}
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Statistics;
