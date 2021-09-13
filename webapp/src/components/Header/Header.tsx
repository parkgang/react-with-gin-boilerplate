import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import {
  teamsTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  teamsV2Theme,
  teamsDarkV2Theme,
  Flex,
  Dropdown,
  Menu,
  ThemePrepared,
} from "@fluentui/react-northstar";

import { FluentuiNorthstarThemeState } from "states/fluentui-northstar";
import {
  FluentuiNorthstarThemeList,
  FluentuiNorthstarThemeToString,
} from "types/fluentui-northstar";
import { AboutPath, UsersPath, HomePath } from "App";

export default function Header() {
  const [fluentuiNorthstarTheme, setFluentuiNorthstarTheme] = useRecoilState(
    FluentuiNorthstarThemeState
  );

  const history = useHistory();

  const menuItems = [
    {
      key: HomePath,
      content: "Home",
      onClick() {
        history.push(HomePath);
      },
      styles: {
        padding: "0.6rem",
      },
    },
    {
      key: AboutPath,
      content: "About",
      onClick() {
        history.push(AboutPath);
      },
      styles: {
        padding: "0.6rem",
      },
    },
    {
      key: UsersPath,
      content: "Users",
      onClick() {
        history.push(UsersPath);
      },
      styles: {
        padding: "0.6rem",
      },
    },
  ];
  const menuDefaultIndex = menuItems.findIndex(
    (x) => x.key === history.location.pathname
  );
  const dropdownItems = [
    {
      key: FluentuiNorthstarThemeList.teamsTheme,
      header: "Teams",
      onClick() {
        handleTheme(teamsTheme);
      },
    },
    {
      key: FluentuiNorthstarThemeList.teamsDarkTheme,
      header: "Teams Dark",
      onClick() {
        handleTheme(teamsDarkTheme);
      },
    },
    {
      key: FluentuiNorthstarThemeList.teamsHighContrastTheme,
      header: "Teams High Contrast",
      onClick() {
        handleTheme(teamsHighContrastTheme);
      },
    },
    {
      key: FluentuiNorthstarThemeList.teamsV2Theme,
      header: "Teams V2",
      onClick() {
        handleTheme(teamsV2Theme);
      },
    },
    {
      key: FluentuiNorthstarThemeList.teamsDarkV2Theme,
      header: "Teams Dark V2",
      onClick() {
        handleTheme(teamsDarkV2Theme);
      },
    },
  ];
  const dropdownDefaultValue = dropdownItems.find(
    (x) => x.key === FluentuiNorthstarThemeToString(fluentuiNorthstarTheme)
  );

  function handleTheme(theme: ThemePrepared) {
    setFluentuiNorthstarTheme(theme);
  }

  return (
    <>
      <Flex gap="gap.small" space="between" vAlign="center">
        <Menu
          defaultActiveIndex={menuDefaultIndex}
          items={menuItems}
          style={{
            height: "2.3rem",
          }}
        />
        <Dropdown
          checkable
          fluid
          defaultValue={dropdownDefaultValue}
          items={dropdownItems}
          style={{
            width: "12rem",
          }}
        />
      </Flex>
    </>
  );
}
