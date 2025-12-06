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

// Firebase config for project felipe-sbm
const firebaseConfig = {
  apiKey: 'AIzaSyDQn_5R0bbVloenZwzznRVV5MqboHq8RkU',
  authDomain: 'felipe-sbm.firebaseapp.com',
  databaseURL: 'https://felipe-sbm-default-rtdb.firebaseio.com',
  projectId: 'felipe-sbm',
  storageBucket: 'felipe-sbm.firebasestorage.app',
  messagingSenderId: '25151491880',
  appId: '1:25151491880:web:18cbf0970a60b1dc95ca1d',
  measurementId: 'G-SETDR9BTHR',
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
