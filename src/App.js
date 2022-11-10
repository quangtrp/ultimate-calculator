import Calculator from "./components/Calculator/Calculator";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "./redux/calculatorSlice";

const cx = classNames.bind(styles);

function App() {
  // Redux States
  const darkTheme = useSelector((state) => state.calculator.darkTheme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    let newTheme = !darkTheme;
    dispatch(switchTheme(newTheme));
  };

  return (
    <div className={cx(darkTheme ? "App-dark" : "App")}>
      {/* Switch Theme */}
      <div className={cx("switch-theme")}>
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          defaultChecked={false}
          onClick={changeTheme}
        />
      </div>

      {/* Adding Calculator Component */}
      <Calculator />
    </div>
  );
}

export default App;
