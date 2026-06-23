export default function Loading() {
	return (
		<div className="flex min-h-[300px] items-center justify-center rounded-lg border bg-white">
			<div className="text-center">
				<div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
				<p className="text-[14px] font-medium text-gray-700">로딩중입니다...</p>
			</div>
		</div>
	);
}
