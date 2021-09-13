import { selector } from "recoil";

import { FluentuiNorthstarThemeState } from "states/fluentui-northstar";
import { FluentuiNorthstarThemeToString } from "types/fluentui-northstar";
import { MapWithFluentuiTeamsTheme } from "types/fluentui-teams";

export const FluentuiTeamsThemeState = selector({
  key: "FluentuiTeamsThemeState",
  get: ({ get }) => {
    const fluentuiNorthstarTheme = get(FluentuiNorthstarThemeState);
    return MapWithFluentuiTeamsTheme(
      FluentuiNorthstarThemeToString(fluentuiNorthstarTheme)
    );
  },
});
