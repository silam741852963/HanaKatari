import Image from "next/image";
import { auth, firestore, storage } from "../lib/firebase";

export default function Home() {
  console.log(auth, firestore, storage);
  return <main></main>;
}
