import axios from "axios";

import { User, UserDTO } from "types/user";
import client from "libs/api/client";

export type UserFormApi = typeof PostUser | typeof PutUser;

export async function PostUser(user: UserDTO) {
  await client.post(`/users`, user);
}

export async function GetUser() {
  try {
    const { data } = await client.get<User[]>(`/users`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 404:
          return null;
      }
    }
  }
}

export async function PutUser(user: UserDTO, id: number) {
  await client.put(`/users/${id}`, user);
}

export async function DeleteUser(id: number) {
  await client.delete(`/users/${id}`);
}
