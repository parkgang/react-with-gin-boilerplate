import { ReactNode } from "react";
import { Flex } from "@fluentui/react-northstar";

import useDevice from "hooks/useDevice";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  const { isMobile } = useDevice();

  return (
    <>
      <Flex hAlign="center" style={{ height: "100vh", padding: "0.5rem" }}>
        <Flex
          column
          gap="gap.small"
          style={{ width: isMobile ? "100vw" : "50vw" }}
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
}
