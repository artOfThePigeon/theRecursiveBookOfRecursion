function a() {
	document.write("a() was called.<br />");
	b();
	document.write("a() is returning.<br />");
}
function b() {
	document.write("b() was called.<br />");
	c();
	document.write("b() is returning.<br />");
}
function c() {
	document.write("c() was called.<br />");
	document.write("c() is returning.<br />");
}
a();

/*
the output shows the start of functions a(), b(), and c(). 
then, when the functions return, the output appears in reverse order.
the call stack remembers the where the execution returns at
the end of a function call.
*/

//-----------------------------------------------------

let cardStack = [];
cardStack.push("5 of diamonds");
document.write(cardStack + "<br />");
cardStack.push(" 3 of clubs");
document.write(cardStack + "<br />");
cardStack.push("ace of hearts");
document.write(cardStack + "<br />");
cardStack.pop();
document.write(cardStack + "<br />");

/*
stacks are a LIFO (last in first out) data structure. The
last value pushed onto the stack is the first value popped
off of it. 
*/

//------------------------------------------------------

function a1() {
	let spam = "Ant";
	document.write("spam is " + spam + "<br />");
	b1();
	document.write("spam is " + spam + "<br />");
}

function b1() {
	let spam = "Bobcat";
	document.write("spam is " + spam + "<br />");
	c1();
	document.write("spam is " + spam + "<br />");
}

function c1() {
	let spam = "Coyote";
	document.write("spam is " + spam + "<br />");
}

a1()
/*
when the program calls funcion a1() a frame object is created
and placed on top of the call stack.this frame stores any
arguments passed to a1() (in this case none) along with local 
variable spam and the place where the execution should go when
the a1() function returns. 

when b1() is called, a new frame object is created and placed on
the call stack with its own local spam variable, then calls c1().

A new frame object for the c1() call is created and placed on the
stack, and it contains c1()'s local spam variable. 

As these functions return, the frame objects pop off the call stack.

The program execution knows where to return to because that return
information is stored within the frame object. 
*/
















