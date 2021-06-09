import { THEME, TODOS, TODOSFILTER } from "./customLSKeys";
import {
  checkLSKeyValueExists,
  getLSKeyValue,
  setLSKeyValue,
} from "./localStorageHelper";
import { store } from "../redux/store";
import { selectTheme, setTheme } from "../redux/themeSlice";
import {
  selectTodos,
  setTodos,
  loadTodosFromAPIAsync,
} from "../redux/todosSlice";
import { selectTodosFilter, setTodosFilter } from "../redux/todosFilterSlice";

const { getState, dispatch } = store;

function setVisualTheme(theme) {
  const root = window.document.documentElement;
  theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
}

export function loadAppData() {
  if (checkLSKeyValueExists(THEME)) {
    dispatch(setTheme(getLSKeyValue(THEME)));
  }

  if (checkLSKeyValueExists(TODOS)) {
    dispatch(setTodos({ array: getLSKeyValue(TODOS) }));
  } else {
    dispatch(loadTodosFromAPIAsync());
  }

  if (checkLSKeyValueExists(TODOSFILTER)) {
    dispatch(setTodosFilter(getLSKeyValue(TODOSFILTER)));
  }

  setVisualTheme(selectTheme(getState()));
}

export function saveAppData() {
  const theme = selectTheme(getState());
  const todos = selectTodos(getState());
  const todosFilter = selectTodosFilter(getState());

  setLSKeyValue(THEME, theme);
  setLSKeyValue(TODOS, todos);
  setLSKeyValue(TODOSFILTER, todosFilter);

  setVisualTheme(selectTheme(getState()));
}
