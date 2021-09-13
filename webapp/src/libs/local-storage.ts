import { ThemePrepared } from "@fluentui/react-northstar";

import { name } from "../../package.json";
import {
  FluentuiNorthstarThemeToString,
  StringToFluentuiNorthstarTheme,
} from "types/fluentui-northstar";

const themeKey = `${name}-theme`;

export function GetLocalStorageTheme() {
  return StringToFluentuiNorthstarTheme(localStorage.getItem(themeKey));
}

export function SetLocalStorageTheme(theme: ThemePrepared) {
  localStorage.setItem(themeKey, FluentuiNorthstarThemeToString(theme));
}
