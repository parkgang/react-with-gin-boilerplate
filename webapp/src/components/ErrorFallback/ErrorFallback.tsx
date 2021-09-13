import axios from "axios";
import { CommunicationOptions } from "@fluentui/react-teams";

import { Communication } from "components/ReactTeams";

type Props = {
  title?: string;
  error: Error;
};

/**
 * Client의 모든 에러를 관장하는 함수이자 컴포넌트 입니다.
 * 각 에러 instance에 맞는 적절한 컴포넌트를 바인딩 해줍니다.
 */
export default function ErrorFallback({
  title = "문제가 발생했어요.",
  error,
}: Props) {
  // handleError(); 등 을 통해 error를 any 타입으로 던지는 경우 Error interface 를 충족하지 못하여 문제가 발생합니다.
  // 모든 에러를 처리하는 Component으로 디자인 되었으므로 방어적으로 처리합니다.
  if (typeof error === "string") {
    // 다른 에러 컴포넌트와 interface를 맞추기 위해 Error 객체로 boxing 합니다.
    error = new Error(error);
  } else if (axios.isAxiosError(error)) {
    // 서버 에러의 http statue에 맞게 핸들링 하도록 합니다.
    // Server Side에서 에러시 항상 message property으로 response 해주기 때문에 해당 내용을 에러화면에 보여주도록 합니다. 만약 없다면 js 기본 메시지 입니다.
    error.message = error.response?.data.message ?? error.message;
  }

  function handleInteraction(target: string) {
    switch (target) {
      case "refresh":
        // window.location.reload(); 으로 새로고침 시도 시 에러가 발생한 url 그래도 새로고침되어 계속 에러가 발생한 queryString으로 돌아오므로 queryString을 제거하여 새로고침 하도록 합니다.
        window.location.href = window.location.href.split("?")[0];
        break;
    }
  }

  return (
    <>
      <Communication
        option={CommunicationOptions.Error}
        fields={{
          title: `앗, 이런! ${title}`,
          desc: error.message,
          actions: {
            primary: {
              label: "새로고침",
              target: "refresh",
            },
          },
        }}
        onInteraction={({ target }) => handleInteraction(target)}
      />
    </>
  );
}
