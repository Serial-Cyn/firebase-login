import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  provider: GoogleAuthProvider;

  constructor(private auth: Auth) {
    // Auth is provided via provideAuth() in main.ts
    this.provider = new GoogleAuthProvider();
  }

  companyName: string = 'CLAMONTECH';

  async login() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      console.log('User Info:', result.user);
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      console.log('User signed out successfully.');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }
}
