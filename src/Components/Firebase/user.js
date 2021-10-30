import React, { useEffect } from "react";
import { signInWithGoogle, auth, firestore } from "./firebase";
import "firebase/firestore";

const User = () => {
    
  const authStateChange = React.useCallback(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return;
      // console.log(userAuth);
      // console.log(userAuth.uid);
      // console.log(userAuth.email);
      // console.log(userAuth.displayName);
      const userRef = firestore.doc(`campusUser/${userAuth.uid}`);
      // console.log(userRef);
      const snapShot = await userRef.get();
      // console.log(snapShot.id);
      if (snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log("error creating user", error.message);
        }
      }
    });
  }, []);

  useEffect(() => {
    authStateChange();
    // return () => {
    //     cleanup
    // }
  }, [authStateChange]);

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};
export default User;
