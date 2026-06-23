import Link from 'next/link';

const posts = [
	{ id: 1, title: '타이틀 1' },
	{ id: 2, title: '타이틀 2' },
	{ id: 3, title: '타이틀 3' },
];

export default function Page() {
	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-6 text-2xl font-bold">게시글 목록</h1>

			<div className="space-y-3">
				{posts.map((post) => (
					<Link
						key={post.id}
						href={`/posts/${post.id}`}
						className="block rounded border p-3 hover:bg-gray-50"
					>
						{post.title}
					</Link>
				))}
			</div>
		</div>
	);
}
