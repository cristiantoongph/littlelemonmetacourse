import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const COLOR = ["primary", "blue", "red", "green"];

function CallToActionBtn({
  children,
  to,
  buttonStyle,
  buttonSize,
  buttonColor,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <Link
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      to={to}
    >
      {children}
    </Link>
  );
}

export default CallToActionBtn;
