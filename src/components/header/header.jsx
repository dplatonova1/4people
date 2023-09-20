import React, { useState } from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../icons/logo.svg";
import classNames from "classnames";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const listCN = classNames(open === true ? "nav__list--mobile" : "nav__list");

  const listItemCN = classNames(
    open === true ? "nav__item nav__item--mobile" : "nav__item"
  );

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Logo className="nav__logo" />
        <a
          href="#menu"
          className="nav__hamburger"
          aria-label="Открыть меню"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <ul id="menu" className={listCN}>
          <li className={listItemCN}>
            <a href="/" className="nav__link nav__link--active">
              Бизнес
            </a>
          </li>
          <li className={listItemCN}>
            <a href="/" className="nav__link">
              О нас
            </a>
          </li>
          <li className={listItemCN}>
            <a href="/" className="nav__link">
              Цены
            </a>
          </li>
          <li className={listItemCN}>
            <a href="/" className="nav__link">
              Оформить заказ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
