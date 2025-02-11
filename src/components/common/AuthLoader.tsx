"use client";

import { getLoginUser } from "@/lib/services/authService";
import { login, logout } from "@/redux/slices/authSlice";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export const AuthLoader = ({ children }: React.PropsWithChildren) => {
  const dispatch = useDispatch();
  const user = useQuery({
    queryKey: ["user"],
    queryFn: getLoginUser,
  });

  useEffect(() => {
    if (user.data?.userdata) {
      dispatch(login({ user: user.data.userdata }));
    } else {
      dispatch(logout());
    }
  }, [user.data, dispatch]);
  return <div>{children}</div>;
};
