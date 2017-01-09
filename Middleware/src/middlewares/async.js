export default function ({ dispatch }) {
    return next => action => {
        //if no payload or not a promise, just skip.
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload
            .then(response => {
                //create a new action with same type
                //except replace the payload
                const newAction = { ...action, payload: response };
                //run the entire action all over again
                dispatch(newAction); 
            });
    };
}