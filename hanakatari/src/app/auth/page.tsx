import { Metadata } from "next";
import AuthMain from "./main";
export const metadata: Metadata = {
  title: "Welcome!",
  description: "Hana Katari's authorization page",
};

export default function Auth() {
  return (
    <>
      <AuthMain />
    </>
  );
}
