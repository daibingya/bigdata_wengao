function foo(){
	var a="foo词法作用域";
	console.log(this.b)
	baz();
}

function baz(){
	var a="baz词法作用域"
	sumer()
}

function sumer(){
	var a="sumer词法作用域"
}

var obj={
	a:foo,
	b:6
}
obj.a();