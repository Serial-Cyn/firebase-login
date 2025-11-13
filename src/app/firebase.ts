import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { environment } from "src/environments/environment";

export const app = initializeApp(environment.firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);