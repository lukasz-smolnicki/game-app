export const createProject = (project) => {
    return (dispatch, getState) => {
        //async cal to database
        dispatch({ type: 'CREATE_PROJECT', project: project })
    }
}