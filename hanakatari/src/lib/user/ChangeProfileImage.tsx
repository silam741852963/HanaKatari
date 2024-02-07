import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import { getCookie } from "cookies-next";
import { revalidatePath } from "next/cache";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export default function ChangeProfileImage() {
  const [progress, setProgress] = useState(0);

  const uploadFunction = (formData: FormData) => {
    const uid: string = getCookie("uid") as string;
    try {
      const storageRef = ref(
        storage,
        `users/${uid}/${(formData.get("profileImage") as File).name}`
      );
      const uploadTask = uploadBytesResumable(
        storageRef,
        formData.get("profileImage") as File
      );
      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        if (progress == 100) {
          const docRef = doc(db, "users", uid);
          getDownloadURL(storageRef).then((result) => {
            updateDoc(docRef, {
              profileImage: result,
            });
          });
          const docSnap = getDoc(docRef);
          console.log("Document written with ID: ", docRef.id);
        }
      });
    } catch (e) {
      console.error("Error: ", e);
    }
  };
  return (
    <>
      <form action={uploadFunction}>
        <input type="file" name="profileImage" accept="image/png, image/jpeg" />
        <button>Change</button>
        <progress value={progress}>{progress.toString()}</progress>
      </form>
    </>
  );
}
