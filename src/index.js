import { Stack } from "./stack";
import Graph from "./graph";

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log("PEEK =>", stack.peek());
// stack.pop();
// console.log("PEEK =>", stack.peek());
// console.log(stack.size());

//            A
//        B      C
//     D    E
//         F

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "A");
graph.addEdge("C", "B");

// graph.traverseDFS("A");
//graph.traverseBFS("A");
graph.topologicalSort();
