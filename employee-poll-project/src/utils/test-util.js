// Helper store for testing.
import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers";
import middelware from "../middelware";

const store = createStore(reducer, middelware);

export default store;
