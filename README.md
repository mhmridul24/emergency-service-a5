1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById: getting the element by an uniq ID number.
getElementsByClassName: getting the element by the class name, it can get multiple class by same name.
querySelector: it will get the first child element from a section/div/...etc.
querySelectorAll: It will select all child element and i can choose by the class name.

2. How do you create and insert a new element into the DOM?

Answer: first of all create the element,
let newElement = document.createElement ("p")

then add content inside the p
newElement.innerText = "I am PH Student"

then append into the div as last element

document.body.appendChild(newElement)

3. What is Event Bubbling and how does it work?

Answer: Event bubbling means that when I click on an element the event first runs on that element and then it bubbles up to its parent, then to the parent’s parent, and so on until it reaches the <body>. we can stop it by writing a simple code. 

4.What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is a technique in JavaScript where we don’t add event listeners to every child element individually.
Instead, we add a single event listener to the parent, and use event bubbling to detect which child was clicked.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault(): Stops the browser default action. 
stopPropagation(): Stops the event bubbling up to parent elements.