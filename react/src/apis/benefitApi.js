import axios from 'axios';

export function fetchBenefitApi() {
  return new Promise((resolve, reject) => {
    axios.get('http://192.168.0.36:1337/benefits')
      .then(result => resolve(result.data))
      .catch(error => reject(error));
  });
}
