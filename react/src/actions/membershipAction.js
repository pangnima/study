import MembershipLevelType from '../enums/MembershipLevelType';

export const ActionTypes = {
  CHANGE_MEMBERSHIP: 'CHANGE_MEMBERSHIP',
  UNREGISTER: 'UNREGISTER'
};
export function changeMembershipLevel(membershipLevel) {
  return {
    type: ActionTypes.CHANGE_MEMBERSHIP,
    membershipLevel
  }
}
export function unRegister() {
  return (dispatch, getState) => {
    const {membershipLevel: _membershipLevel} = getState();
    if (_membershipLevel === MembershipLevelType.MEMBER) {
      if(!confirm('정말 해지할래?')) return;
    }

    dispatch({
      type: ActionTypes.UNREGISTER
    });
  }
}

