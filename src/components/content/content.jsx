import React from "react";
import { Form } from "../form/form";
import "./content.scss";
import { ReactComponent as Percent } from "../icons/1.svg";
import { ReactComponent as Mail } from "../icons/2.svg";
import { ReactComponent as Money } from "../icons/3.svg";
import { ReactComponent as Contract } from "../icons/4.svg";
import { ReactComponent as Lens } from "../icons/5.svg";
import { Parallax } from "react-scroll-parallax";

export const Content = () => {
  return (
    <div className="content">
      <Parallax speed={20} style={{ width: "100%" }}>
        <div className="content__wrapper">
          <h2 className="content__title">
            Оформление{" "}
            <span className="content__title--highlighted">заказа</span>
          </h2>
          <p className="content__subtitle">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>
          <div className="content__steps">
            <div className="content__step">
              <div className="content__image">
                <Lens />
              </div>
              <div className="content__text">Lorem ipsum dolor sit amet</div>
            </div>

            <div className="content__step">
              <div className="content__image">
                <Percent />
              </div>
              <div className="content__text">Сonsecteturadipiscing elit</div>
            </div>
            <div className="content__step">
              <div className="content__image">
                <Contract />
              </div>
              <div className="content__text">Sed do eiusmod tempor</div>
            </div>
            <div className="content__step">
              <div className="content__image">
                <Mail />
              </div>
              <div className="content__text">Esse cillum dolore eu fugiat</div>
            </div>
            <div className="content__step">
              <div className="content__image">
                <Money />
              </div>
              <div className="content__text">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>
            <span className="content__dots" />
          </div>
          <Form />
        </div>
      </Parallax>
    </div>
  );
};
