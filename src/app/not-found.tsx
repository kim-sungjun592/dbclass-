import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex min-h-[400px] items-center justify-center rounded-lg border bg-white">
			<div className="text-center">
				<h1 className="mb-3 text-[32px] font-bold">404</h1>

				<p className="mb-6 text-[14px] text-gray-600">
					요청하신 페이지를 찾을 수 없습니다.
				</p>

				<Link
					href="/"
					className="rounded bg-blue-600 px-4 py-2 text-[13px] font-semibold text-white"
				>
					홈으로 이동
				</Link>
			</div>
		</div>
	);
}
