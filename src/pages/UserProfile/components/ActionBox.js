import React from "react";

export default function ActionBox(props) {
  const { className, src, alt, onClick, text, style } = props;
  return (
    <div style={style} className="actionButton" onClick={onClick}>
      <img className={className} src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
}
