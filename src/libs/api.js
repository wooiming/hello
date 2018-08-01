import axios from 'axios';

const http = axios.create({
	baseURL: 'https://mirror.carsome.my/',
	headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export default {
	get(endpoint,options){
		return http.get(endpoint,options)
	},

	post(endpoint,options){
		return http.post(endpoint,options)
	}
}