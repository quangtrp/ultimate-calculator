import React from "react";
import classNames from "classnames/bind";
import styles from "./DisplayScreen.module.scss";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const DisplayScreen = () => {
  // Redux States
  const currentValues = useSelector((state) => state.calculator.currentValues);
  const previousValues = useSelector(
    (state) => state.calculator.previousValues
  );
  const operation = useSelector((state) => state.calculator.operation);
  const darkTheme = useSelector((state) => state.calculator.darkTheme);

  // Format Values
  const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maxiumFractionDigits: 0,
  });

  const formatValue = (value) => {
    if (value == null) return;
    const [integer, decimal] = value.split(".");
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
  };

  return (
    <div className={cx("display-screen")}>
      <div className={cx("previous-values")}>
        {`${previousValues} ${operation}`}
      </div>
      <div className={cx(darkTheme ? "current-values-dark" : "current-values")}>
        {formatValue(currentValues)}
      </div>
    </div>
  );
};

export default DisplayScreen;
