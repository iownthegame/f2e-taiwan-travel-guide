import axios from 'axios';
import jsSHA from 'jssha';

export default class Api {
  getScenicSpot(city) {
    return axios.get(
      `${this.url()}/ScenicSpot/:city`.replace(':city', city), {
        params: {
          '$top': 30,
          '$format': 'JSON'
        },
        headers: this.getAuthorizationHeader()
      }
    );
  }

  getRestaurant(city) {
    return axios.get(
      `${this.url()}/Restaurant/:city`.replace(':city', city), {
      params: {
        '$top': 30,
        '$format': 'JSON'
      },
      headers: this.getAuthorizationHeader()
    }
    );
  }

  getHotel(city) {
    return axios.get(
      `${this.url()}/Hotel/:city`.replace(':city', city), {
      params: {
        '$top': 30,
        '$format': 'JSON'
      },
      headers: this.getAuthorizationHeader()
    }
    );
  }

  getActivity(city) {
    return axios.get(
      `${this.url()}/Activity/:city`.replace(':city', city), {
      params: {
        '$top': 30,
        '$format': 'JSON'
      },
      headers: this.getAuthorizationHeader()
    }
    );
  }

  url() {
    return 'https://ptx.transportdata.tw/MOTC/v2/Tourism'
  }

  getAuthorizationHeader() {
    let AppID = '3df46b6355de4253b95fe1bbb28e86c6';
    let AppKey = 'pJnhOqJshLsVmEl7W91p5ZIq9iU';
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
    return { 'Authorization': Authorization, 'X-Date': GMTString };
  }
}
