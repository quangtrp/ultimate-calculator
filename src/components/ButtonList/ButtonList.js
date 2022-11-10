import React from "react";
import classNames from "classnames/bind";
import styles from "./ButtonList.module.scss";
import DigitButton from "../DigitButton/DigitButton";
import OperatorButton from "../OperatorButton/OperatorButton";
import { useDispatch } from "react-redux";
import {
  setClear,
  chooseEvaluation,
  chooseBack,
} from "../../redux/calculatorSlice";

const cx = classNames.bind(styles);

const ButtonList = () => {
  const dispatch = useDispatch();

  const clearButton = () => {
    dispatch(setClear());
  };

  const equalButton = () => {
    dispatch(chooseEvaluation());
  };

  const backButton = () => {
    dispatch(chooseBack());
  };

  return (
    <div className={cx("buttonList")}>
      <div className={cx("button", "button-clear")} onClick={clearButton}>
        AC
      </div>
      <div className={cx("button")} onClick={backButton}>
        Back
      </div>
      <OperatorButton operator={"/"} />
      <OperatorButton operator={"*"} />
      <DigitButton digit={"7"} />
      <DigitButton digit={"8"} />
      <DigitButton digit={"9"} />
      <OperatorButton operator={"-"} />
      <DigitButton digit={"4"} />
      <DigitButton digit={"5"} />
      <DigitButton digit={"6"} />
      <OperatorButton operator={"+"} />
      <DigitButton digit={"1"} />
      <DigitButton digit={"2"} />
      <DigitButton digit={"3"} />
      <div className={cx("button", "button-equal")} onClick={equalButton}>
        =
      </div>
      <DigitButton digit={"0"} />
      <DigitButton digit={"."} />
    </div>
  );
};

export default ButtonList;
