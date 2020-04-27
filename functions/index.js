const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
})

exports.projectCreate = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.colonyName} ${project.authorId}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello lukasz!");
// });

// exports.scheduledFunction = functions.pubsub.schedule('every 5 minutes').onRun((context) => {
//     console.log("Hello schadulet lukasz!");
// });

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('user')
            .doc(user.uid).get()
            .then(doc => {
                const newUser = doc.data();
                const notification = {
                    content: 'Joindet the part',
                    user: `${newUser.colonyName} `,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification)
            })
    })

