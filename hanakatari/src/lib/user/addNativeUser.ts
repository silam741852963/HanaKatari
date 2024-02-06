import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { getCookie } from "cookies-next";

export default async function addNativeUser(formData: FormData) {
    const uid: string = getCookie('uid') as string;
    try {
        await setDoc(doc(db, "users", uid), {
            uid: uid,
            email: formData.get("email"),
            username: formData.get("username") ? formData.get("username") : "お花人",
            profileImage: formData.get("profileImage")
        });
    } catch (e) {
        console.error("Error: ", e);
    }
}
