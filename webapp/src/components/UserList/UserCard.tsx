import { Children } from "react";
import {
  Flex,
  Card,
  CardBody,
  Label,
  Text,
  Button,
  TrashCanIcon,
  EditIcon,
} from "@fluentui/react-northstar";
import { CommunicationOptions } from "@fluentui/react-teams";

import { PutUser } from "libs/api/user";
import { Communication } from "components/ReactTeams";
import ConfirmDelete from "components/UserList/ConfirmDelete";
import { UserForm } from "components/Form";
import useUserListQuery from "hooks/query/useUserListQuery";

type Props = {
  searchKeyword: string;
};

export default function UserCard({ searchKeyword = "" }: Props) {
  const userLists = useUserListQuery();

  if (userLists === null) {
    return (
      <>
        <Communication
          option={CommunicationOptions.Empty}
          fields={{
            title: `아직 사용자가 없습니다.`,
            desc: `사용자 할당되면 여기에서 찾을 수 있습니다. 그때까지 쉬는 시간을 즐기십시오.`,
          }}
        />
      </>
    );
  }

  const resultItems = userLists.filter(
    (x) => x.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1
  );

  if (resultItems.length === 0) {
    return (
      <>
        <Communication
          option={CommunicationOptions.Empty}
          fields={{
            title: `검색된 사용자가 없습니다.`,
            desc: ``,
          }}
        />
      </>
    );
  }

  return (
    <>
      <Flex column gap="gap.smaller" style={{ overflowY: "scroll" }}>
        {Children.toArray(
          resultItems.map((x) => (
            <Card fluid style={{ padding: "0.5em" }}>
              <CardBody style={{ marginBottom: "0" }}>
                <Flex column gap="gap.small" vAlign="center">
                  <span>
                    <Label color="grey" content={x.id} />
                    &nbsp;&nbsp;
                    <Text content={x.name} weight="bold" />
                  </span>
                  <Flex gap="gap.small" vAlign="center" space="between">
                    <Text content={x.arg} size="small" />
                    <Flex gap="gap.small">
                      <ConfirmDelete
                        id={x.id}
                        trigger={
                          <Button
                            style={{
                              minWidth: "0",
                              padding: "0",
                              width: "2.5rem",
                            }}
                            content={<TrashCanIcon />}
                          />
                        }
                      />
                      <UserForm
                        id={x.id}
                        defaultValue={x}
                        trigger={
                          <Button
                            primary
                            style={{
                              minWidth: "0",
                              padding: "0",
                              width: "2.5rem",
                            }}
                            content={<EditIcon />}
                          />
                        }
                        onSubmit={PutUser}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          ))
        )}
      </Flex>
    </>
  );
}
