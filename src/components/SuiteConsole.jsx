import { useEffect, useState } from "react";
import { suiteSteps } from "../data";

export default function SuiteConsole() {
  const [lines, setLines] = useState([]);
  const [status, setStatus] = useState("Queued");
  const [passed, setPassed] = useState(0);

  useEffect(() => {
    let timers = [];

    function play() {
      timers.forEach(clearTimeout);
      timers = [];
      setLines([]);
      setStatus("Running");
      setPassed(0);
      let count = 0;

      suiteSteps.forEach((step, i) => {
        const id = setTimeout(() => {
          setLines((current) => [...current, { ...step, id: `${step.name}-${i}` }]);
          if (step.status === "PASS") {
            count += 1;
            setPassed(count);
          }
          if (i === suiteSteps.length - 1) {
            setStatus("Green · 6/6");
          }
        }, 420 * (i + 1));
        timers.push(id);
      });
    }

    play();
    const loop = setInterval(play, 9000);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  return (
    <aside className="console" aria-label="Sample test run">
      <div className="console__bar">
        <span className="console__dots" aria-hidden="true" />
        <span className="console__title">regression.suite · maven</span>
        <span className="console__env">jenkins / api+ui</span>
      </div>
      <ol className="console__log">
        {lines.map((line) => (
          <li key={line.id}>
            <span className={line.cls}>{line.status}</span>
            <span>{line.name}</span>
            <span>{line.ms}</span>
          </li>
        ))}
      </ol>
      <div className="console__footer">
        <span>{status}</span>
        <span>{passed} passed</span>
      </div>
    </aside>
  );
}
