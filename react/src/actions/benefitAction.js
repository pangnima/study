import { fetchBenefitApi } from '../apis/benefitApi';

export const FETCH_BENEFIT_REQUEST = 'FETCH_BENEFIT_REQUEST';
export function fetchBenefits() {
  return (dispatch, getState) => {
    fetchBenefitApi()
      .then(benefits => {
        dispatch({
          type: FETCH_BENEFIT_REQUEST,
          benefits
        })
      })
      .catch(error => alert(error));
  };
}