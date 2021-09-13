import { useRecoilValue } from "recoil";
import styled from "styled-components";
import * as reactTeams from "@fluentui/react-teams";

import { FluentuiNorthstarThemeState } from "states/fluentui-northstar";
import { FluentuiTeamsThemeState } from "states/fluentui-teams";

type ResetStyleProps = {
  backgroundColor: string;
};

/**
 * 의외로 많이 발생하는 @fluentui/react-teams 스타일 문제를 해결하기 위한 css-in-js 입니다.
 */
const ResetStyle = styled.div<ResetStyleProps>`
  & > div {
    /* Communication 컴포넌트가 height: "100vh"로 고정되어 있어 불필요한 공간을 차지하는 현상 제거용 */
    height: initial;
    /* 동일한 테마 프레임워크에 불구하고 northstar와 배경색이 애매하게 다릅니다. 룩앤필을 위하여 그냥 northstar의 배경색으로 오버라이트 합니다. */
    background-color: ${(props) => props.backgroundColor};
  }
`;

/**
 * Theme Provider를 App.tsx와 같이 전역으로 Wrapper 하면 style 충돌 문제가 발생하여 테마가 필요한 부분의 컴포넌트에서만 적용해서 사용하도록 합니다.
 */
export default function Communication(props: reactTeams.TCommunicationProps) {
  const fluentuiNorthstarTheme = useRecoilValue(FluentuiNorthstarThemeState);
  const fluentuiReactTeamsTheme = useRecoilValue(FluentuiTeamsThemeState);

  return (
    <reactTeams.Provider themeName={fluentuiReactTeamsTheme} lang="en-US">
      <ResetStyle
        backgroundColor={fluentuiNorthstarTheme.siteVariables.bodyBackground}
      >
        <reactTeams.Communication {...props} />
      </ResetStyle>
    </reactTeams.Provider>
  );
}
