import firebase from 'firebase/app'
import 'firebase/auth'

var app = firebase.initializeApp({
  apiKey: 'AIzaSyCib9KGQ8qhcx7ErSLi6VNhKUxdui8AIeU',
  authDomain: 'bay-shop.firebaseapp.com',
  projectId: 'bay-shop',
  storageBucket: 'bay-shop.appspot.com',
  messagingSenderId: '389844844820',
  appId: '1:389844844820:web:954a5d462c596b2dfe4201',
})

export const auth = app.auth()
export default app
