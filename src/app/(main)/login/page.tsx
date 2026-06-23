export default function Page() {
	return (
		<div className="mx-auto max-w-md rounded-lg border bg-white p-6">
			<h1 className="mb-6 text-center text-2xl font-bold">로그인</h1>

			<div className="space-y-4">
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

				<button className="w-full rounded bg-blue-600 py-2 text-white">
					로그인
				</button>
			</div>
		</div>
	);
}
