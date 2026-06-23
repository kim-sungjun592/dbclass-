import { getNow } from '@/app/lib/time';

export const dynamic = 'force-dynamic';

export default function SsrPage() {
	const now = getNow();

	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-4 text-2xl font-bold">SSR 페이지</h1>

			<p className="mb-2 text-[14px] text-gray-600">
				요청할 때마다 새로 만들어지는 페이지입니다.
			</p>

			<div className="rounded bg-gray-100 p-4 text-[14px]">
				생성 시간: {now}
			</div>
		</div>
	);
}
