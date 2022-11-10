import React from "react";
import classNames from "classnames/bind";
import styles from "./Calculator.module.scss";
import DisplayScreen from "../DisplayScreen/DisplayScreen";
import Board from "../Board/Board";

const cx = classNames.bind(styles);

const Calculator = () => {
  return (
    <div className={cx("calculator")}>
      <DisplayScreen />
      <Board />
    </div>
  );
};

export default Calculator;
