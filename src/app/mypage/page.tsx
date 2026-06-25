'use client';

import { useEffect, useState } from 'react'; // useState 추가
import { useUserStore } from '../store/UserStore';
import { baseAPi } from '../common/baseApi';

export default function Page() {
	const accessToken = useUserStore((state) => state.accessToken);
	// 💡 데이터를 저장할 상태 추가 (필요시 사용)
	const [employees, setEmployees] = useState([]);

	// 1. 함수 이름 오타 수정 및 async/await 적용
	const getEmployees = async () => {
		try {
			// 주소 오타도 수정 (/employess -> /employees)
			const response = await baseAPi.get('/employees');
			console.log('직원 데이터: ', response.data);
			setEmployees(response.data); // 상태에 저장
		} catch (error) {
			console.error('데이터 로드 실패:', error);
		}
	};

	useEffect(() => {
		console.log('accessToken >>> ', accessToken);
	}, [accessToken]);

	// 2. useEffect 내부에서 올바른 함수 이름 호출
	useEffect(() => {
		getEmployees();
	}, []);

	return (
		<div>
			<div className="rounded-lg border bg-white p-6">
				<h1 className="mb-4 text-2xl font-bold">마이페이지</h1>

				<div className="space-y-2 text-sm">
					<p>이름 : 홍길동</p>
					<p>이메일 : hong@test.com</p>
					<p>권한 : USER</p>
				</div>
			</div>
		</div>
	);
}
