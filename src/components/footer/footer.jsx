import React from "react";
import "./footer.scss";
import { ReactComponent as Qiwi } from "../icons/qiwi_logo.svg";
import { ReactComponent as Yandex } from "../icons/ya_money_logo.svg";
import { ReactComponent as Webmoney } from "../icons/web_money_logo.svg";
import { ReactComponent as Mail } from "../icons/mail_icon.svg";
import { ReactComponent as VK } from "../icons/vk_logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">
          © 2018 «LoremIpsum.net» Все права защищены.
        </p>
        <span className="footer__divider" />
        <div className="footer__payments">
          <p className="footer__subtitle">Платёжные системы</p>
          <ul className="footer__list">
            <li className="footer__item">
              <Qiwi className="footer__icon" />
              Qiwi wallet
            </li>
            <li className="footer__item">
              <Yandex className="footer__icon" />
              Yandex Money
            </li>
            <li className="footer__item">
              <Webmoney className="footer__icon" />
              Web Money
            </li>
          </ul>
        </div>
        <span className="footer__divider" />
        <div className="footer__contacts">
          <p className="footer__subtitle">Контакты</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="mailto:info@ipsum228.com" className="footer__link">
                <Mail className="footer__icon" />
                <p className="footer__item-text">info@ipsum228.com</p>
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://vk.com/"
                target="_blank"
                className="footer__link"
              >
                <VK className="footer__icon" />
                <p className="footer__item-text">Мы вконтакте</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
