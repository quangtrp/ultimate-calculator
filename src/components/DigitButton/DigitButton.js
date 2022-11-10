import React from "react";
import classNames from "classnames/bind";
import styles from "./DigitButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setValues } from "../../redux/calculatorSlice";

const cx = classNames.bind(styles);

const DigitButton = ({ digit }) => {
  const dispatch = useDispatch();
  const currentValues = useSelector((state) => state.calculator.currentValues);

  const chooseDigit = () => {
    let newValues = currentValues;
    newValues = `${digit}`;
    dispatch(setValues(newValues));
  };

  return (
    <div
      className={cx("digit", digit === "0" ? "zero" : "")}
      onClick={chooseDigit}
    >
      {digit}
    </div>
  );
};

export default DigitButton;
