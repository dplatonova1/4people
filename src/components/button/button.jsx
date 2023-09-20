import classNames from "classnames";
import React from "react";

export const Button = (props) => {
  const { isPrimary, title } = props;
  const buttonCN = classNames(isPrimary ? "button button--primary" : "button");
  return <button className={buttonCN}>{title}</button>;
};
