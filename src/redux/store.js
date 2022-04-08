import { createStore } from "redux";
import rootReduccers from "./reducer";


const store = createStore(rootReduccers);

export default store;