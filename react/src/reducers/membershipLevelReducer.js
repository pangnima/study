import MembershipLevelType from '../enums/MembershipLevelType';
import { ActionTypes } from '../actions/membershipAction';

const initialState = MembershipLevelType.GUEST;

function membershipLevelReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_MEMBERSHIP: return action.membershipLevel;
    case ActionTypes.UNREGISTER: return MembershipLevelType.GUEST;
  }

  return state;
}
export default membershipLevelReducer;

