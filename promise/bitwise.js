var a = [0, 0, 1], b = [1, 0, 0]

for(let i = 0; i < 3; i++) {
	a[i] = a[i] ^ b[i]
}

console.log(a)