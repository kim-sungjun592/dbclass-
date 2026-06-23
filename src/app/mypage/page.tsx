export default function Page() {
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
