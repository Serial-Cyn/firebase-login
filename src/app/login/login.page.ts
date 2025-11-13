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
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logoGoogle, logoFacebook } from 'ionicons/icons';

import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

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
  provider: GoogleAuthProvider;

  constructor(private auth: Auth) {
    addIcons({ logoGoogle, logoFacebook });

    this.provider = new GoogleAuthProvider();
  }

  ngOnInit() {}

  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      console.log('User Info:', result.user);
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  async signInWithFacebook() {
    try {
    } catch (error) {
      console.error('Facebook Login Error:', error);
    }
  }

  async signInWithEmail() {
    // Implement email sign-in logic here
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
