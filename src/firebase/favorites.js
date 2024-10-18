import { arrayRemove, arrayUnion, doc, getDoc, updateDoc, setDoc } from "firebase/firestore"
import { db } from "./firebaseConfig"


export const addFavorite = async (userId, favorite) => {
    const userRef = doc(db, "users", userId)
    try {
        await setDoc(userRef, {
            favorites: arrayUnion(favorite)
        }, {merge: true})
        console.log("Favorite added")
    } catch (error) {
        console.log("Error adding favorite:", error)
    }
}

export const removeFavorite = async (userId, favorite) => {
    const userRef = doc(db, "users", userId) 
    try {
        await setDoc(userRef, {
            favorites: arrayRemove(favorite)
        }, {merge: true})
    } catch (error) {
        console.log("Error deleting favorite:", error)
    }
}

export const fetchFavorites = async (userId) => {
    const userRef = doc(db, "users", userId) 
    try {
    const docSnap = await getDoc(userRef)
    if(docSnap.exists()) {
        const favorites = docSnap.data().favorites || []
        return favorites
    } else {
        console.log("Document doesnt exist/ no favorites found")
        return []
    }
    } catch (error) {
        console.log("Error fetching favorites:", error)
    }
}