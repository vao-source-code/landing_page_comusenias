import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference, doc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore


  constructor() { }

  saveEmail(email: Email){
    email.id = doc(collection(this.firestore,'id')).id;
    return addDoc(collection(this.firestore,'emailsNoticie'),email);
  }
}

export interface Email{
  id:string;
  email:string | null;
}