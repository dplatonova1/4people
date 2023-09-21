import React from "react";
import { Button } from "../button/button";
import "./lead.scss";

export const Lead = () => {
  return (
    <div className="lead">
      <div className="lead__wrapper">
        <h1 className="lead__title">
          <span className="lead__title--highlighted">Lorem ipsum</span> dolor
          sit ametconsectetur{" "}
          <span className="lead__title--highlighted">adipiscing</span>
        </h1>
        <div className="lead__content">
          <p className="lead__description">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </p>
          <ul className="lead__list">
            <li className="lead__item">Totam rem aperiam eaque ipsa</li>
            <li className="lead__item">
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li className="lead__item">
              Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>
        </div>
        <div className="lead__buttons">
          <Button title={"Заказать"} isPrimary={true} />
          <Button title={"Подробнее"} isPrimary={false} />
        </div>
      </div>
    </div>
  );
};
