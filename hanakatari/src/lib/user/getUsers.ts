import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    let users: User[] = []
    querySnapshot.forEach((doc) => {
        users.push({
            email: doc.data().uid,
            uid: doc.data().uid,
            username: doc.data().username,
            profileImage: doc.data().profileImage
        })
    })
    return users
}

