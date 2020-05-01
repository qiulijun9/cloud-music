import {
  combineReducers
} from 'redux';
import {
  recommendReducer
} from '../application/Recommend/store/recommendReducer';
import {
  AReducer
} from '../application/Recommend/store/AReducer';
import {
  BReducer
} from '../application/Recommend/store/BReducer';
const reducer = combineReducers({
  recommend: recommendReducer,
  areducer: AReducer,
  BReducer: BReducer
})
export default reducer;