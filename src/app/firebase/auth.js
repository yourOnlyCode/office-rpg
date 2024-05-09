import { auth } from "./firebase"

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updatePassword, sendEmailVerification } from "firebase/auth"

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const doSignInWithGithub = async () => {
    return doSignInWithGithub()
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    //set to firestore using:
    //result.user
    return result
}

export const doSignOut = () => {
    return auth.signOut()
}

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email)
}

export const doPasswordChange = () => {
    return updatePassword(auth.currentUser, password)
}

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`
    })
}

