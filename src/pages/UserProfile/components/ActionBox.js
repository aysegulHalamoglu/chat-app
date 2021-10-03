import React from "react";

export default function ActionBox(props) {
  const { className, src, alt, onClick, text } = props;
  return (
    <div className="actionButton" onClick={onClick}>
      <img className={className} src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
}
