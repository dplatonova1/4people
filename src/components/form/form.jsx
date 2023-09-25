import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";
import { Button } from "../button/button";
import { ReactComponent as File } from "../icons/fileicon.svg";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import classNames from "classnames";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({ ...data, type: type });
  const [rangeValue, setRangeValue] = useState(0);
  const [type, setType] = useState("Выберите тип системы");
  const [open, setIsOpen] = useState(false);
  const arrowCN = classNames(open ? "form__arrow--open" : "form__arrow");
  const buttonCN = classNames(
    open
      ? "form__field form__selectbox-button form__selectbox-button--open"
      : "form__field form__selectbox-button"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__selectbox">
        <button
          id="selectbox"
          className={buttonCN}
          onClick={() => setIsOpen(!open)}
          aria-haspopup="true"
          aria-expanded={open ? "true" : "false"}
          aria-label="Open types popup"
        >
          {type}
          <Arrow className={arrowCN} />
        </button>
        {open && (
          <ul
            className="form__selectbox-input"
            role="menu"
            onKeyDown={() => setIsOpen(true)}
          >
            <li
              className="form__selectbox-item"
              role="menuitem"
              tabIndex="0"
              onClick={(e) => {
                setType(e.currentTarget.textContent);
                setIsOpen(false);
              }}
            >
              Sed ut perspiciatis
            </li>
            <li
              className="form__selectbox-item"
              role="menuitem"
              tabIndex="0"
              onClick={(e) => {
                setType(e.currentTarget.textContent);
                setIsOpen(false);
              }}
            >
              Nemo enim ipsam
            </li>
            <li
              className="form__selectbox-item"
              role="menuitem"
              tabIndex="0"
              onClick={(e) => {
                setType(e.currentTarget.textContent);
                setIsOpen(false);
              }}
            >
              Et harum quidem
            </li>
            <li
              className="form__selectbox-item"
              role="menuitem"
              tabIndex="0"
              onClick={(e) => {
                setType(e.currentTarget.textContent);
                setIsOpen(false);
              }}
            >
              Temporibus autem
            </li>
            <li
              className="form__selectbox-item"
              role="menuitem"
              tabIndex="0"
              onClick={(e) => {
                setType(e.currentTarget.textContent);
                setIsOpen(false);
              }}
            >
              Itaque earum rerum
            </li>
          </ul>
        )}
      </div>
      <div className="form__input">
        <input
          name="email"
          type="email"
          placeholder="Ваш Email"
          {...register("email", { required: true })}
          className="form__field"
        />
        {errors.email && (
          <p className="form__error">"Пожалуйста, заполните это поле"</p>
        )}
      </div>
      <div className="form__input">
        <input
          name="name"
          type="text"
          placeholder="Ваше имя"
          {...register("name", { required: true })}
          className="form__field"
        />
        {errors.name && (
          <p className="form__error">"Пожалуйста, заполните это поле"</p>
        )}
      </div>

      <div className="form__range">
        <div className="form__range-wrap">
          <p className="form__text">
            Sed ut perspiciatis, unde omnis iste natus
          </p>
          <label htmlFor="range">{rangeValue}%</label>
        </div>

        <input
          name="range"
          type="range"
          placeholder="Range"
          {...register("range")}
          className="form__range-input"
          defaultValue={0}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />
      </div>

      <label htmlFor="file" className="form__file form__field">
        <input
          name="file"
          type="file"
          id="file"
          className="form__file-input"
          {...register("file", {})}
        />
        <File className="form__image" /> Прикрепить файл
      </label>
      <div className="form__submit">
        <Button isPrimary={true} type="submit" title={"Отправить"} />
      </div>
    </form>
  );
};
