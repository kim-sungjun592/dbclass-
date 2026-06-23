export function getNow() {
	return new Date().toLocaleString('ko-KR', {
		timeZone: 'Asia/Seoul',
	});
}
