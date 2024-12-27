"use client";

import { createContext, useContext, useState } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
});

export const useUser = () => useContext(UserContext);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>({
    id: "1",
    name: "Shivam Vishwakarma",
    email: "shivamvishva552@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/55942632?v=4",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
