import { notFound } from "next/navigation";
import Link from "next/link";
import getUsers from "@/lib/user/getUsers";
import getUser from "@/lib/user/getUser";
import UserInfoEditForm from "./UserInfoEditForm";

export const revalidate = 86400;

type Props = {
  params: {
    uid: string;
  };
};

export async function generateStaticParams() {
  const users = await getUsers();

  if (!users) return [];

  return users.map((user) => ({
    uid: user.uid,
  }));
}

export async function generateMetadata({ params: { uid } }: Props) {
  const user = await getUser(uid);

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.username,
  };
}

export default async function User({ params: { uid } }: Props) {
  const user = await getUser(uid);

  if (!user) notFound();

  return (
    <>
      <main>
        <h1>{user.username}</h1>
        <h2>{user.uid}</h2>
        <h2>{user.email}</h2>
        {user.profileImage ? (
          <figure>
            <img
              src={user.profileImage}
              alt={user.username ? user.username : "お花人"}
            />
          </figure>
        ) : (
          <></>
        )}
        <UserInfoEditForm />
      </main>
    </>
  );
}
