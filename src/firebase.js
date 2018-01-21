import firebase from 'firebase';

var config = {
	      apiKey: "AIzaSyBb8HatfQlQGT5emCHbyLmGm-Ou3GTb0YQ",
	      authDomain: "swamphacks2018finance.firebaseapp.com",
	      databaseURL: "https://swamphacks2018finance.firebaseio.com",
	      projectId: "swamphacks2018finance",
	      storageBucket: "",
	      messagingSenderId: "14529063738"
		};

firebase.initializeApp(config);
console.log("initialized firebase");

export default firebase;