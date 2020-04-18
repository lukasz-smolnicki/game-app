export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //async cal to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'luk',
            authorSecondName: 'smol',
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

    }
}