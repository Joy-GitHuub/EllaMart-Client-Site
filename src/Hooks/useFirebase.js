import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/UserLogin_SignUp/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import axios from 'axios';


initializeFirebase();

const useFirebase = () => {
    // User State...
    const [user, setUser] = useState({});
    // Loading Spnniner
    const [isLoading, setisLoading] = useState(true);
    // User Any Error
    const [error, setError] = useState('');

    // Admin State
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();

    // Google Signin Provider
    const googleProvider = new GoogleAuthProvider();

    // User Register And Create Account
    const registerUser = (email, password, name, history) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // SaveUser To DataBase.....
                saveUser(email, name);

                // UpdateProfile send Name to Firebase
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setisLoading(false))

    };

    // User Sign-in This Web SIte
    const loginUser = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setisLoading(false))
    }

    // SignIn With Google 
    const signInWithGoogle = (location, history) => {
        setisLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');

                saveGoogleUser(user.email, user.displayName);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoading(false));
    }

    // Observe User State
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setisLoading(false);
        });

    }, [auth]);

    // 
    useEffect(() => {
        const url = `https://morning-ravine-60109.herokuapp.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // LogOUt Function
    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        }).finally(() => setisLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post(`https://morning-ravine-60109.herokuapp.com/users`, user)
            .then()
    }
    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName };
        axios.put(`https://morning-ravine-60109.herokuapp.com/users`, user)
            .then()
    }


    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        admin,
        logOut,
        saveUser,
        signInWithGoogle,
        error,
    };

};

export default useFirebase;