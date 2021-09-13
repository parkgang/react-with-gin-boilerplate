export type User = {
  id: number;
  name: string;
  arg: number;
};

export type UserDTO = Omit<User, "id">;
