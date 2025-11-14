import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonIcon,
  IonLabel,
  IonInput,
  IonInputPasswordToggle,
  IonRouterLink,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logoGoogle, logoFacebook } from 'ionicons/icons';

import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup, signOut } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonIcon,
    IonLabel,
    IonInput,
    IonInputPasswordToggle,
  ],
})
export class LoginPage implements OnInit {
  googleProvider: GoogleAuthProvider;
  facebookProvider: FacebookAuthProvider;

  email: string = '';
  password: string = '';

  constructor(private auth: Auth) {
    addIcons({ logoGoogle, logoFacebook });

    this.googleProvider = new GoogleAuthProvider();
    this.facebookProvider = new FacebookAuthProvider();
  }

  ngOnInit() {}

  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, this.googleProvider);
      console.log('User Info:', result.user);
    } catch (error) {
      console.error('Google Login Error:', error);
    }
  }

  async signInWithFacebook() {
    try {
      const result = await signInWithPopup(this.auth, this.facebookProvider);
      console.log('User Info:', result.user);
    } catch (error) {
      console.error('Facebook Login Error:', error);
    }
  }

  async signInWithEmail() {
    const result = await signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User Info:', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async signOut() {
    try {
      await signOut(this.auth);
      console.log('User signed out successfully.');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }

  isPasswordFocused: boolean = false;

  onPasswordFocus() {
    this.isPasswordFocused = !this.isPasswordFocused;
  }
}
