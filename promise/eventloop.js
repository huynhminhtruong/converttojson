$(function(){
	console.log('Loading');

	debugger;

	console.log('Hello');

	setTimeout(() => {
		console.log('Set timeout');
	}, 5000);

	console.log('Hi there');

	function f1() {
		return f2();
		console.log('F1');
	}

	function f2() {
		return f3();
	}

	f2();

	var f3 = function() {
		console.log('F3');
	}

	$('#button').click(() => {
		console.log('button click');
	});
});