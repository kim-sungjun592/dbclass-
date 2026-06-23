'use client';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="flex min-h-[400px] items-center justify-center rounded-lg border bg-white">
			<div className="text-center">
				<h1 className="mb-3 text-[24px] font-bold text-red-600">
					오류가 발생했습니다.
				</h1>

				<p className="mb-6 text-[14px] text-gray-600">{error.message}</p>

				<button
					onClick={reset}
					className="rounded bg-gray-900 px-4 py-2 text-[13px] font-semibold text-white"
				>
					다시 시도
				</button>
			</div>
		</div>
	);
}
