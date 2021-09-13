import { useQuery } from "react-query";

import { GetUser } from "libs/api/user";

const createKey = () => ["userList"];

export default function useUserListQuery() {
  const { data } = useQuery(createKey(), GetUser);

  if (data === undefined) {
    throw new Error("userList 값이 존재하지 않습니다.");
  }

  return data;
}
