import React from "react";
import classNames from "classnames/bind";
import styles from "./Board.module.scss";
import ButtonList from "../ButtonList/ButtonList";

const cx = classNames.bind(styles);

const Board = () => {
  return (
    <div className={cx("board")}>
      <ButtonList />
    </div>
  );
};

export default Board;
