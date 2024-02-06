import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { getCookie } from "cookies-next";
import { revalidatePath } from "next/cache";

export default async function changeUsername(formData: FormData) {
    const uid: string = getCookie('uid') as string;

    try {
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, { username: formData.get("username") })
        const docSnap = await getDoc(docRef);
        console.log("Document written with ID: ", docRef.id);
        revalidatePath(`/users/${uid}`)
    } catch (e) {
        console.error("Error: ", e);
    }
}
