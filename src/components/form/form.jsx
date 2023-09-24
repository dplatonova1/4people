import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";
import { Button } from "../button/button";
import { ReactComponent as File } from "../icons/fileicon.svg";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <select
        {...register("type", { required: true })}
        className="form__selectbox form__field"
        defaultValue="default"
      >
        <option value="default" disabled>
          Выберите тип системы
        </option>
        <option className="form__selectbox-item" value="Sed ut perspiciatis">
          Sed ut perspiciatis
        </option>
        <option className="form__selectbox-item" value="Nemo enim ipsam">
          Nemo enim ipsam
        </option>
        <option className="form__selectbox-item" value="Et harum quidem">
          Et harum quidem
        </option>
        <option className="form__selectbox-item" value="Temporibus autem">
          Temporibus autem
        </option>
        <option className="form__selectbox-item" value="Itaque earum rerum">
          Itaque earum rerum
        </option>
      </select>
      <input
        name="email"
        type="email"
        placeholder="Ваш Email"
        {...register("email", {})}
        className="form__field"
      />
      <input
        name="name"
        type="text"
        placeholder="Ваше имя"
        {...register("name", {})}
        className="form__field"
      />

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
          {...register("range", {})}
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
