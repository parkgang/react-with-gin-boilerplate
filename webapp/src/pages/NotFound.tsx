import { useHistory, RouteComponentProps } from "react-router";
import { CommunicationOptions } from "@fluentui/react-teams";

import { Communication } from "components/ReactTeams";
import { HomePath } from "App";

export default function NotFound({ location }: RouteComponentProps) {
  const history = useHistory();

  function handleInteraction(target: string) {
    switch (target) {
      case "go-home":
        history.push(HomePath);
        break;
    }
  }

  return (
    <>
      <Communication
        option={CommunicationOptions.Thanks}
        fields={{
          title: `오, 존재하지 않는 페이지를 찾았어요!`,
          desc: `${location.pathname} 경로는 존재하지 않습니다.`,
          actions: {
            primary: {
              label: "홈 화면으로 돌아가기",
              target: "go-home",
            },
          },
        }}
        onInteraction={({ target }) => handleInteraction(target)}
      />
    </>
  );
}
