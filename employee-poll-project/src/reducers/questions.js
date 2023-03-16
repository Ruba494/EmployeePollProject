import {RECEIVE_QUESTIONS, SAVE_VOTE, ADD_QUESTION,} from "../actions/questions";

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case SAVE_VOTE:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: [...state[action.questionId][action.answer].votes, action.authedUser],
                    },
                },
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        default:
            return state;
    }
};

export default questions;