type Props = {
	params: Promise<{
		id: string;
	}>;
};

export default async function Page({ params }: Props) {
	const { id } = await params;

	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-4 text-2xl font-bold">게시글 상세</h1>

			<p className="text-lg">게시글 ID : {id}</p>
		</div>
	);
}
