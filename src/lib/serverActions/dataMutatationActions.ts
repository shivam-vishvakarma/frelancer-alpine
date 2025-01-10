"use server";

import { redirect } from "next/navigation";

export const createSupportRequest = async (data: FormData) => {
  console.log("Creating support request", data);
  redirect("/support");
};
