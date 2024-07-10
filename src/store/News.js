import { defineStore } from "pinia";
import { collection, addDoc, getDocs } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIpzTCQicCNkHYVgA6GHyJuGY0xplOR2k",
  authDomain: "training-6b090.firebaseapp.com",
  projectId: "training-6b090",
  storageBucket: "training-6b090.appspot.com",
  messagingSenderId: "241194150617",
  appId: "1:241194150617:web:0a5a3c2e68bc2191f2ecc8",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const useNews = defineStore("News", {
  state: () => ({
    Users: [],
    User: {
      title: "",
      image: null,
      description: "",
    },
  }),
  actions: {
    async uploadImage(file) {
      const storageReference = storageRef(storage, "images/" + file.name);
      const snapshot = await uploadBytes(storageReference, file);
      console.log("Uploaded a blob or file!", snapshot);
      return getDownloadURL(snapshot.ref);
    },
    async Add_Users() {
      try {
        if (this.User.image) {
          const imageUrl = await this.uploadImage(this.User.image);
          // Get current local time
          const currentTime = new Date().toLocaleString();
          const docRef = await addDoc(collection(db, "Users"), {
            title: this.User.title,
            description: this.User.description,
            image: imageUrl,
            time: currentTime,
          });

          console.log("Document written with ID: ", docRef.id);
        } else {
          console.error("No image selected.");
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    async Get_data() {
      try {
        this.Users = [];
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
          this.Users.push(doc.data());
        });
        console.log("this.Users", this.Users);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  },
});
