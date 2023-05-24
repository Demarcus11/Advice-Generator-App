/* eslint-disable react/prop-types */
export function Advice({ showAdvice, adviceNumber, advice }) {
  return (
    <div className={`content-flow advice ${showAdvice ? "slide-in" : ""}`}>
      <h1 className="title">
        Advice #<span className="number">{adviceNumber}</span>
      </h1>
      <blockquote className="quote">{advice}</blockquote>
    </div>
  );
}
