import { useEffect } from "react";
import { atom, useRecoilValue } from "recoil";
import { ThemePrepared } from "@fluentui/react-northstar";

import { GetLocalStorageTheme, SetLocalStorageTheme } from "libs/local-storage";

export const FluentuiNorthstarThemeState = atom<ThemePrepared>({
  key: "FluentuiNorthstarThemeState",
  default: GetLocalStorageTheme(),
});

/**
 * [Atom Effects를 사용하고 싶지만 아직 UNSTABLE 이므로 우회 방법으로 react 생명주기를 사용합니다.](https://stackoverflow.com/questions/69140313/recoil-is-there-a-way-to-do-additional-actions-when-the-atom-state-changes)
 */
export function FluentuiNorthstarThemeEffect() {
  const fluentuiNorthstarThemeState = useRecoilValue(
    FluentuiNorthstarThemeState
  );

  useEffect(() => {
    SetLocalStorageTheme(fluentuiNorthstarThemeState);
  }, [fluentuiNorthstarThemeState]);

  return <></>;
}
