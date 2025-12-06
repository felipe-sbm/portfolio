import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  getAdditionalUserInfo,
} from 'firebase/auth';
import type { Auth, User } from 'firebase/auth';

export interface GitHubAuthPayload {
  user: User;
  githubUsername?: string;
  githubProfileUrl?: string;
}

function getRequiredEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`[FirebaseAuth] Missing required env var: ${name}`);
  }
  return value;
}

const firebaseConfig = {
  apiKey: getRequiredEnv('VITE_FIREBASE_API_KEY'),
  authDomain: getRequiredEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  databaseURL: getRequiredEnv('VITE_FIREBASE_DATABASE_URL'),
  projectId: getRequiredEnv('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getRequiredEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getRequiredEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getRequiredEnv('VITE_FIREBASE_APP_ID'),
  measurementId: getRequiredEnv('VITE_FIREBASE_MEASUREMENT_ID'),
};

let auth: Auth;

export function initializeFirebase() {
  if (!auth) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
  return auth;
}

export function getAuthInstance(): Auth {
  if (!auth) initializeFirebase();
  return auth;
}

export async function signInWithGitHub(): Promise<GitHubAuthPayload> {
  const authInstance = getAuthInstance();
  const provider = new GithubAuthProvider();
  provider.addScope('user:email');
  
  const result = await signInWithPopup(authInstance, provider);
  const info = getAdditionalUserInfo(result);
  const githubUsername = info?.username || undefined;
  const githubProfileUrl = githubUsername ? `https://github.com/${githubUsername}` : undefined;

  console.log('[FirebaseAuth] GitHub login success:', {
    user: result.user,
    githubUsername,
    githubProfileUrl,
  });

  return { user: result.user, githubUsername, githubProfileUrl };
}

export async function signInAnon(): Promise<User> {
  const authInstance = getAuthInstance();
  const result = await signInAnonymously(authInstance);
  console.log('[FirebaseAuth] Anonymous login success:', result.user);
  return result.user;
}

export function getCurrentUser(): User | null {
  const authInstance = getAuthInstance();
  return authInstance.currentUser;
}

export function onAuthChange(callback: (user: User | null) => void) {
  const authInstance = getAuthInstance();
  return onAuthStateChanged(authInstance, callback);
}

export async function getAuthToken(): Promise<string | null> {
  const user = getCurrentUser();
  if (!user) return null;
  return await user.getIdToken();
}
