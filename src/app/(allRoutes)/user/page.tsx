import { redirect } from "next/navigation";

export default function MyOrdersPage() {
  return redirect("/user/my-orders");
}
