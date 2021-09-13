import {
  Flex,
  Input,
  SearchIcon,
  Button,
  ParticipantAddIcon,
} from "@fluentui/react-northstar";

import { UserForm } from "components/Form";
import { PostUser } from "libs/api/user";

type Props = {
  value: string;
  onChange(e: any): void;
};

export default function Header({ value, onChange }: Props) {
  return (
    <>
      <Flex gap="gap.small" space="between">
        <Input
          icon={<SearchIcon />}
          fluid
          clearable
          placeholder="이름으로 검색..."
          value={value}
          onChange={onChange}
        />
        <UserForm
          trigger={
            <Button
              primary
              style={{
                minWidth: "0",
                padding: "0",
                width: "2.5rem",
              }}
              content={<ParticipantAddIcon />}
            />
          }
          onSubmit={PostUser}
        />
      </Flex>
    </>
  );
}
