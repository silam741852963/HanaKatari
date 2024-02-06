"use client";
import changeUsername from "@/lib/user/changeUsername";
import changeProfileImage from "@/lib/user/changeProfileImage";

export default function UserInfoEditForm() {
  return (
    <>
      <form action={changeUsername}>
        <input type="text" name="username" placeholder="username" />
        <button className="text-white">Change</button>
      </form>
      <form action={changeProfileImage}>
        <input type="text" name="profileImage" placeholder="profileImage" />
        <button>Change</button>
      </form>
    </>
  );
}
