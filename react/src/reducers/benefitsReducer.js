import {FETCH_BENEFIT_REQUEST} from '../actions/benefitAction';
export function benefitsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_BENEFIT_REQUEST: {
      return action.benefits;
    }
  }
  return state;
}
