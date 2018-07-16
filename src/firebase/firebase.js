import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };










// // child_removed subscriber
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed subscriber
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added subscriber
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

//use one to pass in the callback for expenses

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()            
//         })
//     })
//     console.log(expenses)
// });

// database.ref('expenses').push({
//     description: 'this is my fourth expense',
//     note: '',
//     amount: 12312,
//     createdAt: 23124556
// });

// database.ref('expenses/-LGqdcIZl6v4zAJ9ZIbq').remove()

// database.ref('notes').push( {
//     title: 'Course Topics',
//     body: 'React Native'
// });

// print Name is a Job Title at Job Location
    //change the data and make sure it reprints

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name` is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref().update({
//     job: {
//         title: 'Web Dev',
//         company: 'Google'
//     }
// })

// database.ref().update({
//     job: {
//         title: 'Server',
//         company: 'Arbys'
//     }
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// }, (error) => {
//     console.log('error fetching ', error)
// })

// setTimeout(() => {
//     database.ref('age').set(31)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(33)
// }, 10500);


// database.ref('age').once('value').then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// }).catch((error) => {
//     console.log(error)
// });

// database.ref().set({
//     name: 'Ed Sztukowski',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'Front End Developer',
//         company: 'Pharmaca'
//     },
//     location: {
//         state: 'Colorado',
//         city: 'Boulder'
//     }
// }).then(() => {
//     console.log('data is saved')   
// }).catch((error) => {
//     console.log('this failed ', error)
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Google',
//     'location/city': 'Denver'
// }).then(() =>{
//     console.log('update success')
// }).catch((error)=> {
//     console.log(error)  
// });

// database.ref('isSingle').set(null)

// database.ref('isSingle').remove().then(() => {
//     console.log('data successfully removed')
// }).catch((error) => {
//     console.log('data not removed', error)
// })