async function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function SlowPostList() {
	await wait(3000);

	const posts = [
		{ id: 1, title: 'Next.js App Router' },
		{ id: 2, title: 'Suspense 이해하기' },
		{ id: 3, title: 'ISR 이해하기' },
	];

	return (
		<div className="space-y-3">
			{posts.map((post) => (
				<div key={post.id} className="rounded border p-4">
					<p className="text-[14px] font-semibold">{post.title}</p>
				</div>
			))}
		</div>
	);
}
