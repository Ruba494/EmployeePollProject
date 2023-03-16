export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_VOTE = "SAVE_VOTE";

export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
});

export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question,
});

export const saveVote = (authedUser, questionId, answer) => ({
    type: SAVE_VOTE,
    authedUser,
    questionId,
    answer,
});
