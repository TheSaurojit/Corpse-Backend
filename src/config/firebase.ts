import admin from "firebase-admin";
import { ENV } from "./env";


admin.initializeApp({
  credential: admin.credential.cert({
    "clientEmail": ENV.FIREBASE_CLIENT_EMAIL,
    "privateKey": ENV.FIREBASE_PRIVATE_KEY,
    "projectId": ENV.FIREBASE_PROJECT_ID,
  }),
});

export const db = admin.firestore();
export const auth = admin.auth();
