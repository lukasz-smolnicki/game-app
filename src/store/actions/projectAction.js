export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            colonyName: profile.colonyName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
}