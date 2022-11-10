import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentValues: "0",
  previousValues: "",
  operation: "",
  override: false,
};

const evaluate = ({ currentValues, previousValues, operation }) => {
  const currentVal = parseFloat(currentValues);
  const previousVal = parseFloat(previousValues);
  let result = "";

  if (isNaN(currentVal) || isNaN(previousVal)) return "";

  switch (operation) {
    case "+":
      result = previousVal + currentVal;
      break;
    case "-":
      result = previousVal - currentVal;
      break;
    case "*":
      result = previousVal * currentVal;
      break;
    case "/":
      result = previousVal / currentVal;
      break;
    default:
      result = "";
      break;
  }

  return result.toString();
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    // Choose Digit Buttons
    setValues: (state, action) => {
      if (state.override) {
        state.currentValues = "";
        state.override = false;
      }

      if (action.payload === "0" && state.currentValues === "0") return;
      if (action.payload === "." && state.currentValues.includes(".")) return;

      if (
        action.payload !== "0" &&
        action.payload !== "." &&
        state.currentValues === "0"
      ) {
        state.currentValues = "";
      }
      state.currentValues = `${state.currentValues}${action.payload}`;
    },

    // Choose Clear Button
    setClear: (state) => {
      state.currentValues = "0";
      state.previousValues = "";
      state.operation = "";
    },

    // Choose Operator Buttons
    chooseOperation: (state, action) => {
      if (state.currentValues === "" && state.previousValues === "")
        return state;

      if (state.currentValues === "") {
        state.operation = action.payload;
        return;
      }

      if (state.previousValues === "") {
        state.previousValues = state.currentValues;
        state.operation = action.payload;
      } else {
        state.previousValues = evaluate(state);
      }

      if (state.currentValues === "") {
        state.operation = action.payload;
      }

      state.operation = action.payload;
      state.currentValues = "";
    },

    // Choose Equal Button
    chooseEvaluation: (state) => {
      if (
        state.currentValues === "" ||
        state.previousValues === "" ||
        state.operation === ""
      )
        return;

      state.currentValues = evaluate(state);
      state.previousValues = "";
      state.operation = "";
      state.override = true;
    },

    // Choose Back Button
    chooseBack: (state) => {
      if (state.override === true) {
        state.currentValues = "0";
        state.override = false;
        return;
      }

      if (state.currentValues === "") return;

      if (state.currentValues.length === 1) {
        state.currentValues = "0";
        return;
      }

      state.currentValues = state.currentValues.slice(0, -1);
    },
  },
});

export const {
  setValues,
  setClear,
  chooseOperation,
  chooseEvaluation,
  chooseBack,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
