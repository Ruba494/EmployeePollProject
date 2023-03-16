export const RECEIVE_USERS='RECEIVE_USERS';
export const CREATE_QUESTION = "CREATE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export const receiveUsers =(users)=>{
    return{
        type:RECEIVE_USERS,
        users
    }
}

export const createQuestion = ({ id, author }) => {
    return {
        type: CREATE_QUESTION,
        id,
        author,
    };
};

export const saveAnswer = (userId, questionId, answerId) => {
    return {
        type: SAVE_ANSWER,
        authedUser: userId,
        questionId: questionId,
        answer: answerId,
    };
};