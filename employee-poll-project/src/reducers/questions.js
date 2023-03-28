import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  SAVE_ANSWER,
} from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        ...questions,
        [action.q.id]: action.q,
      };
    case SAVE_ANSWER:
      const { authedUser, question_id, answer } = action;
      return {
        ...state,
        [question_id]: {
          ...state[question_id],
          [answer]: {
            ...state[question_id][answer],
            votes: state[question_id][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
