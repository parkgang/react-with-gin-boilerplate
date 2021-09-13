import {
  teamsTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  teamsV2Theme,
  teamsDarkV2Theme,
  ThemePrepared,
} from "@fluentui/react-northstar";

/**
 * Fluentui Northstar에서 지원하는 테마 목록 입니다. 기본적으로 테마를 변수로 구분하여 불편한 점이 있기 때문에 쉽게 구분하기 위한 문자열 열거형 입니다.
 */
export enum FluentuiNorthstarThemeList {
  teamsTheme = "teamsTheme",
  teamsDarkTheme = "teamsDarkTheme",
  teamsHighContrastTheme = "teamsHighContrastTheme",
  teamsV2Theme = "teamsV2Theme",
  teamsDarkV2Theme = "teamsDarkV2Theme",
}

/**
 * Fluentui Northstar 테마에 맞는 문자열로 변환해줍니다.
 */
export function FluentuiNorthstarThemeToString(theme: ThemePrepared) {
  if (theme === teamsTheme) {
    return FluentuiNorthstarThemeList.teamsTheme;
  } else if (theme === teamsDarkTheme) {
    return FluentuiNorthstarThemeList.teamsDarkTheme;
  } else if (theme === teamsHighContrastTheme) {
    return FluentuiNorthstarThemeList.teamsHighContrastTheme;
  } else if (theme === teamsV2Theme) {
    return FluentuiNorthstarThemeList.teamsV2Theme;
  } else if (theme === teamsDarkV2Theme) {
    return FluentuiNorthstarThemeList.teamsDarkV2Theme;
  } else {
    throw new Error("App에서 지정되지 않은 Theme가 들어왔습니다.");
  }
}

/**
 * Fluentui Northstar 테마 문자열에 맞는 테마변수로 변환해줍니다. 기본 값은 teamsTheme 입니다.
 */
export function StringToFluentuiNorthstarTheme(themeString: string | null) {
  switch (themeString) {
    case FluentuiNorthstarThemeList.teamsTheme:
      return teamsTheme;
    case FluentuiNorthstarThemeList.teamsDarkTheme:
      return teamsDarkTheme;
    case FluentuiNorthstarThemeList.teamsHighContrastTheme:
      return teamsHighContrastTheme;
    case FluentuiNorthstarThemeList.teamsV2Theme:
      return teamsV2Theme;
    case FluentuiNorthstarThemeList.teamsDarkV2Theme:
      return teamsDarkV2Theme;
    default:
      return teamsTheme;
  }
}
