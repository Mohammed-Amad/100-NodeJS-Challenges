const url11 = new URL('https://example.com/api?x=10&y=test');
console.log(url11.searchParams.get('x'));
console.log(url11.searchParams.get('y'));