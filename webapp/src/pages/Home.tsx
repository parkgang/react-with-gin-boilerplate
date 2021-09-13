import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Flex } from "@fluentui/react-northstar";

import { LoadingCard } from "components/Loading";
import { UserCard, Header } from "components/UserList";
import ErrorFallback from "components/ErrorFallback";
import { handlerOnError } from "libs/error";
import useKeyword from "hooks/useKeyword";

export default function Home() {
  const [name, , onChangeKeyword] = useKeyword("");

  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <ErrorFallback
            title="Home 화면에서 문제가 발생했어요"
            error={error}
          />
        )}
        onError={handlerOnError}
      >
        <Flex
          column
          gap="gap.small"
          style={{ overflowX: "hidden", overflowY: "scroll" }}
        >
          <Header value={name} onChange={onChangeKeyword} />
          <Suspense fallback={<LoadingCard />}>
            <UserCard searchKeyword={name} />
          </Suspense>
        </Flex>
      </ErrorBoundary>
    </>
  );
}
