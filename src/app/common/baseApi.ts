import axios from 'axios';
import { useUserStore } from '../store/UserStore';

export const baseAPi = axios.create({
	baseURL: 'http://localhost:33000/api/v1',
	withCredentials: true,
});

baseAPi.interceptors.request.use((config) => {
	const token = useUserStore.getState().accessToken;

	console.log('요청 토큰:', token);

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});
