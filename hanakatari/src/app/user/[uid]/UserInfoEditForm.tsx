"use client";
import changeUsername from "@/lib/user/changeUsername";
import ChangeProfileImage from "@/lib/user/ChangeProfileImage";

export default function UserInfoEditForm() {
  return (
    <>
      <form action={changeUsername}>
        <input type="text" name="username" placeholder="username" />
        <button className="text-white">Change</button>
      </form>
      <ChangeProfileImage />
    </>
  );
}
