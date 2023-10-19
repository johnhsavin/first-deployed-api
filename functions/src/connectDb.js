// import db and credentials
import { initializeApp, cert } from "firebase-admin/app";  // must say /app
import { getFirestore } from "firebase-admin/firestore";
import { creds } from "../creds.js";

// connect to project
initializeApp({
    credential: cert(creds),
})
// connect / export to Firestore
const db = getFirestore()

export default db   // can only export on module as a default, others will need curly braces.
