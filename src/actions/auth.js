import { firebase, googleAuthProvider } from "../firebase/firebase";

export const googleLogin = (payload) => ({
  type: 'LOGIN',
  payload
});

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const googleLogout = (payload) => ({
  type: 'LOGOUT'
});

export const startGoogleLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};