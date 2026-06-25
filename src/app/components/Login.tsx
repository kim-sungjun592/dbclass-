'use client';

import { baseAPi } from '../common/baseApi';
import { useUserStore } from '../store/UserStore';

export default function Login() {
	const setUser = useUserStore((state) => state.setUser);
	const setAccessToken = useUserStore((state) => state.setAccessToken);
	const goLogin = async () => {
		const res = await baseAPi.post('employees/login', {
			email: 'hajin@naver.com',
			password: '1234',
		});

		console.log('res >>> ', res.data.data);
		setAccessToken(res.data.data.accessToken);

		console.log(res.data.data.accessToken);
		// 1. API Post 로그인 호출
		// 	const res = await fetch('http://localhost:33000/api/v1/employees/login', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({
		// 			email: 'hajin@naver.com',
		// 			password: '1234',
		// 		}),
		// 	});

		// 	// 2. 응답값 받아서 zustand에 저장
		// 	const json = await res.json();

		// 	// 💡 [수정 포인트] res.json() 대신 이미 파싱된 json 변수를 출력해야 에러가 안 납니다!
		// 	console.log('json >> ', json);

		// 	// 실제 데이터 구조에 맞게 매핑 (예시로 고정값 유지)
		// 	setUser({
		// 		id: 1,
		// 		name: 'tomhoon',

		// 	});
		// };
	};

	return (
		<div className="mx-auto max-w-md rounded-lg border bg-white p-6">
			<h1 className="mb-6 text-center text-2xl font-bold">로그인</h1>

			<div className="space-y-4">
				{/* 만약 나중에 직접 입력받고 싶다면 여기에 value와 onChange를 연결하면 됩니다! */}
				<input
					type="text"
					placeholder="아이디"
					className="w-full rounded border px-3 py-2"
				/>

				<input
					type="password"
					placeholder="비밀번호"
					className="w-full rounded border px-3 py-2"
				/>

				<button
					className="w-full rounded bg-blue-600 py-2 text-white"
					onClick={goLogin}
				>
					로그인
				</button>
			</div>
		</div>
	);
}
