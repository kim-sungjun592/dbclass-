import Link from 'next/link';

const posts = [
	{ id: 1, title: '타이틀 1' },
	{ id: 2, title: '타이틀 2' },
	{ id: 3, title: '타이틀 3' },
];
export default function PostList() {
	return (
		<div>
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
	);
}
