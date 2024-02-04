import { Metadata } from "next";
import SignUpMain from "./main";
export const metadata: Metadata = {
  title: "Create new account",
  description: "Hana Katari's page for creating new account",
};

export default function Auth() {
  return (
    <>
      <SignUpMain />
    </>
  );
}
