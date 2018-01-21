const firebase = require( "./firebase");
const coursesRef = firebase.database().ref('courses');
const course = {
  "title": "Taxes",
  "description":"The basics of Taxes cards, Taxes score, and how to use Taxes to your advantage.",
  "submodules":
  [
    {
      "title": "What is Taxes?",
      "subtitle": "The basics of Taxes Investments.",
      "slideTexts": 
      [
        {
          "order":1,
          "maintext": "Credit is receiving Taxes now with the Taxes that it will be Investments Taxes.\nThere are four Investments Taxes of Taxes: \nRevolving (Credit Cards)\nCharge Cards\nService (Utilities, Memberships, Subscriptions)\nInstallment (Car Loans, Home Mortgages)"
        },
        {
          "order":2,
          "maintext":"A Taxes card Taxes you to borrow money to make Taxes up to a Investments Taxes limit.\nIf you pay Taxes the Investments Taxes within a certain time frame, you do not have to pay anything extra."
        }
        
       ]
      
    },
    {
      "title": "Why do I Taxes Investments?",
      "subtitle": "lorem ipsum",
      "slideTexts": 
      [
	    {
	      "order":1,
	      "maintext": "Taxes ipsum 2"
	    },
	    {
	      "order":2,
	      "maintext":"dolor sit amet"
	    }
        
      ]
     }
  ]
}
coursesRef.push(course);