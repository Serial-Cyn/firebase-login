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
  constructor() {
    addIcons({ logoGoogle, logoFacebook });
  }

  ngOnInit() {}

  signInWithGoogle() {
    // Implement Google sign-in logic here
  }

  signInWithFacebook() {
    // Implement Facebook sign-in logic here
  }

  signInWithEmail() {
    // Implement email sign-in logic here
  }

  signOut() {
    // Implement sign-out logic here
  }

  isPasswordFocused: boolean = false;

  onPasswordFocus() {
    this.isPasswordFocused = !this.isPasswordFocused;
  }
}
