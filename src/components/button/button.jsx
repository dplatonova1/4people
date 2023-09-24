import classNames from "classnames";
import React from "react";
import "./button.scss";

export const Button = (props) => {
  const { isPrimary, title, type } = props;
  const buttonCN = classNames(
    isPrimary ? "button button--primary" : "button button--secondary"
  );
  return (
    <button type={type} className={buttonCN}>
      {title}
    </button>
  );
};
