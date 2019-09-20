import axios from 'axios';
import { URL } from './constant';

export default {
  user : {
    login : credentials =>
    axios.post(URL + "/api/auth",{ credentials }).then(res => res.data.user)
  }
};
