import { useRef, useEffect, ReactNode } from "react";
import { Dialog, Flex, Ref } from "@fluentui/react-northstar";

type Props = {
  isOpen: boolean;
  content: ReactNode;
};

export default function ConfirmDialog({ isOpen, content }: Props) {
  const parentDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // northstar Dialog의 content props으로 모든 것을 하기 위해 남은 마진을 모두 제거합니다.
    if (parentDialogRef.current !== null) {
      const dialogBody =
        parentDialogRef.current.childNodes[1].childNodes[0].childNodes[0];
      (dialogBody as HTMLDivElement).style.margin = "0";
    }
  }, [isOpen]);

  return (
    <>
      <Ref innerRef={parentDialogRef}>
        <Dialog
          open={isOpen}
          styles={{ width: "20rem" }}
          content={
            <Flex column gap="gap.small" hAlign="center">
              {content}
            </Flex>
          }
        />
      </Ref>
    </>
  );
}
