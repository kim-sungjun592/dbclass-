export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<div className="mb-6 rounded-lg bg-blue-50 p-4">
				<h2 className="font-bold text-blue-700">(Main) Layout 영역</h2>

				<p className="text-sm text-gray-600">
					posts, 상세페이지, login이 공유하는 레이아웃
				</p>
			</div>

			{children}
		</div>
	);
}
