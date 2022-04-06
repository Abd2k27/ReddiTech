import { code, info } from '../screens/Login';
import axios from 'axios';
import { encode as btoa } from 'base-64';

export const _baseUrl = "https://www.reddit.com/api/v1";
export const _baseOauthUrl = "https://oauth.reddit.com/api/v1";
export let _accessToken = undefined;

let _refreshToken = undefined;

export default class APIProvider {

	static _bearerToken = () => {
		return {
				"Content-Type": "application/json",
				Authorization: "Bearer " + _accessToken
		}
	};

	static _basicAuth = () => {
		return {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
			'Authorization': 'Basic ' + btoa(info.clientId + ':' + info.clientSecret)
		}
	};

	static getToken = () => {
		return axios
    .post(
      `${_baseUrl}/access_token`,
      `grant_type=authorization_code&code=${code}&redirect_uri=${info.redirectUri}`,
      {
				headers: this._basicAuth(),
        params: { scope: info.scope },
      }
    )
    .then((r) => {
			console.log(r.data.access_token);
			return (r.data);
		});
	};

	static getUserInfos = () => {
		return axios.post(`${_baseOauthUrl}/me`, {
			headers: this._bearerToken()
		})
		.then((r) => r)
	};

};