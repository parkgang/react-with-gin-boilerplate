import { useState, cloneElement, SyntheticEvent } from "react";
import { useQueryClient } from "react-query";
import { useErrorHandler } from "react-error-boundary";
import { Button, Form, FormInput, Flex } from "@fluentui/react-northstar";

import { ConfirmDialog } from "components/Dialog";
import { UserFormApi } from "libs/api/user";
import { nestedError } from "libs/error";
import { UserDTO } from "types/user";

type UserFormValue = {
  [K in keyof UserDTO]: { value: string };
};

type Props = {
  id?: number;
  defaultValue?: UserDTO;
  trigger: JSX.Element;
  onSubmit: UserFormApi;
};

export default function UserForm({
  id,
  defaultValue = { name: "", arg: 0 },
  trigger,
  onSubmit,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleError = useErrorHandler();
  const queryClient = useQueryClient();

  function handleTrigger() {
    setIsOpen(true);
  }
  function handleCancel() {
    setIsOpen(false);
  }
  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault();
      const target = e.target as typeof e.target & UserFormValue;
      const name = target.name.value;
      const arg = target.arg.value;
      await onSubmit(
        {
          name: name,
          arg: parseInt(arg),
        },
        id as number
      );
      queryClient.invalidateQueries("userList");
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        nestedError(`handleSubmit 에러`, error);
      }
      handleError(error);
    }
  }

  return (
    <>
      {cloneElement(trigger, {
        onClick: handleTrigger,
      })}
      <ConfirmDialog
        isOpen={isOpen}
        content={
          <>
            <Form onSubmit={handleSubmit}>
              <FormInput
                required
                fluid
                label="이름"
                name="name"
                type="text"
                defaultValue={defaultValue.name}
              />
              <FormInput
                required
                fluid
                label="나이"
                name="arg"
                type="number"
                defaultValue={defaultValue.arg.toString()}
              />
              <Flex gap="gap.small" hAlign="center">
                <Button content={id ? "수정" : "생성"} primary />
                <Button content="취소" onClick={handleCancel} />
              </Flex>
            </Form>
          </>
        }
      />
    </>
  );
}
