import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

import category from "../json/category.json";
import products from "../json/products.json";
import igphotos from "../json/igphotos.json";
import reviews from "../json/reviews.json";
import suggestions from "../json/suggestions.json";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

//Reference collection
const categoryCollection = collection(db, "category");
const productsCollection = collection(db, "products");
const igphotosCollection = collection(db, "igphotos");
const reviewsCollection = collection(db, "reviews");
const suggestionsCollection = collection(db, "suggestions");

export const feedProducts = async () => {
  //Delete all existing docs
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (products) => {
    await deleteDoc(doc(db, "products", products.id));
  });

  const querySnapshot2 = await getDocs(igphotosCollection);
  querySnapshot2.forEach(async (igphotos) => {
    await deleteDoc(doc(db, "igphotos", igphotos.id));
  });

  const querySnapshot3 = await getDocs(reviewsCollection);
  querySnapshot3.forEach(async (reviews) => {
    await deleteDoc(doc(db, "reviews", reviews.id));
  });

  const querySnapshot4 = await getDocs(suggestionsCollection);
  querySnapshot4.forEach(async (suggestions) => {
    await deleteDoc(doc(db, "suggestions", suggestions.id));
  });

  const querySnapshot5 = await getDocs(categoryCollection);
  querySnapshot5.forEach(async (category) => {
    await deleteDoc(doc(db, "category", category.id));
  });

  //Add new docs
  products.forEach(async (products) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...products, id: docRef.id });
  });

  // Add new docs from igphotos.json
  igphotos.forEach(async (igphotos) => {
    const docRef = await doc(igphotosCollection);
    await setDoc(docRef, { ...igphotos, id: docRef.id });
  });

  // Add new docs from reviews.json
  reviews.forEach(async (reviews) => {
    const docRef = await doc(reviewsCollection);
    await setDoc(docRef, { ...reviews, id: docRef.id });
  });

  // Add new docs from suggestions.json
  suggestions.forEach(async (suggestions) => {
    const docRef = await doc(suggestionsCollection);
    await setDoc(docRef, { ...suggestions, id: docRef.id });
  });

  // Add new docs from category.json
  category.forEach(async (category) => {
    const docRef = await doc(categoryCollection);
    await setDoc(docRef, { ...category, id: docRef.id });
  });
};

export const getProducts = async () => {
  const querySnapshot = await getDocs(productsCollection);

  // Convert query to a json array.
  let result = [];
  querySnapshot.forEach(async (products) => {
    await result.push(products.data());
  });

  console.log({ result });
  return result;
};

export const getProductById = async ({ queryKey }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getProductsByCategory = async ({ queryKey }) => {
  const [category] = queryKey;
  const q = await query(
    productsCollection,
    where("category", "==", category.toUpperCase())
  );
  let querySnapshot = await getDocs(q);
  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
    await result.push(product.data());
  });
  return result;
};
