import { useState, useEffect, useReducer } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const initial = readInitialValue(key, initialValue);
  const [state, setState] = useState(initial);

  useEffect(() => {
    if (state !== initialValue) {
      console.log("updating local storage with", key, state);
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
};

type ReducerFunction<TState, TAction> = (
  state: TState,
  action: TAction
) => TState;

export const useLocalStorageWithReducer = <TState, TAction>(
  key: string,
  initialValue: any,
  reducerFunc: ReducerFunction<TState, TAction>
) => {
  const initial = readInitialValue(key, initialValue);
  const [state, dispatch] = useReducer(reducerFunc, initial);

  useEffect(() => {
    if (state !== initialValue) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, dispatch];
};

const readInitialValue = (key: string, initialValue: any) => {
  const storedValue = localStorage.getItem(key);
  return storedValue === undefined || storedValue === null
    ? initialValue
    : JSON.parse(storedValue);
};
