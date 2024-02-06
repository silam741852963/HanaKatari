import { DocumentData, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default async function getUser(uid: string) {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        console.log("Document written with ID: ", docRef.id);
        const user: User = {
            email: (docSnap.data() as DocumentData).email,
            uid: (docSnap.data() as DocumentData).uid,
            username: (docSnap.data() as DocumentData).username,
            profileImage: (docSnap.data() as DocumentData).profileImage,
        }
        return user
    } catch (e) {
        console.error("Error: ", e);
    }
}
