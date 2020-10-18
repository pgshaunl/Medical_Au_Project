import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { View, StyleSheet, Button, Alert } from "react-native";

/**
 * This provider is created
 * to access user in whole app
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            alert("Sorry, invalid username/password. Please try again.")
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            firebase.auth().currentUser.updateProfile({displayName: email,})
            
          } catch (e) {
            alert("Sorry, invalid username/password. Please try again.")
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
        reset: async (email) => {
          try {
            await auth().sendPasswordResetEmail(email);
            Alert.alert(
              "Message",
              "A password reset link has been sent to your email",
              [
                {
                  text: "OK",
                  onPress: () => console.log("OK")
                },
              ],
            );
        
          } catch (e) {
            alert("Sorry, invalid email. Please try again.")
            console.error(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
