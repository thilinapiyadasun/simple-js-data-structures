import { Stack } from "./stack";

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("PEEK =>", stack.peek());
stack.pop();
console.log("PEEK =>", stack.peek());
console.log(stack.size());
