import React from "react";
import classNames from "classnames/bind";
import styles from "./OperatorButton.module.scss";
import { useDispatch } from "react-redux";
import { chooseOperation } from "../../redux/calculatorSlice";

const cx = classNames.bind(styles);

const OperatorButton = ({ operator }) => {
  // Redux States
  const dispatch = useDispatch();

  const chooseOperator = () => {
    dispatch(chooseOperation(operator));
  };

  return (
    <div className={cx("operator")} onClick={chooseOperator}>
      {operator}
    </div>
  );
};

export default OperatorButton;
