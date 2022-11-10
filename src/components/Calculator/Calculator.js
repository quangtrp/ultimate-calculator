import React from "react";
import classNames from "classnames/bind";
import styles from "./Calculator.module.scss";
import DisplayScreen from "../DisplayScreen/DisplayScreen";
import Board from "../Board/Board";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Calculator = () => {
  // Redux States
  const darkTheme = useSelector((state) => state.calculator.darkTheme);

  return (
    <div className={cx(darkTheme ? "calculator-dark" : "calculator")}>
      <DisplayScreen />
      <Board />
    </div>
  );
};

export default Calculator;
