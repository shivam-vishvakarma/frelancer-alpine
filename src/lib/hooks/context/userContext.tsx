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
  login: (user: User) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

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

  const login = (
    user = {
      id: "1",
      name: "Shivam Vishwakarma",
      email: "shivamvishva552@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/55942632?v=4",
    }
  ) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
