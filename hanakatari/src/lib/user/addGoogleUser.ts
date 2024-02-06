import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { getCookie } from "cookies-next";

export default async function addGoogleUser() {
    const uid: string = getCookie('uid') as string;
    const email: string = getCookie('email') as string;
    const username: string = getCookie('username') as string;
    const profileImage: string = getCookie('profileImage') as string;
    try {
        await setDoc(doc(db, "users", uid), {
            uid: uid,
            email: email,
            username: username,
            profileImage: profileImage
        });
    } catch (e) {
        console.error("Error: ", e);
    }
}
