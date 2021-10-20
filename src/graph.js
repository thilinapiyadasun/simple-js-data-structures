class Node {
  constructor(label) {
    this.label = label;
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
    this.nodeMap = new Map();
  }

  addNode(label) {
    let node = new Node(label);
    if (this.nodeMap.has(label)) {
      console.log("Vertex is already there");
    } else {
      this.adjList.set(node, []);
      this.nodeMap.set(label, node);
    }
    console.log(this.adjList);
    console.log(this.nodeMap);
    console.log(this.nextNodeIndex);
  }

  addEdge(source, destination) {
    if (this.nodeMap.has(source) && this.nodeMap.has(destination)) {
      const sourceNode = this.nodeMap.get(source);
      const destNode = this.nodeMap.get(destination);
      this.adjList.get(sourceNode).push(destNode);
    }
    console.log(this.adjList);
  }

  hasEdge(source, destination) {
    if (this.nodeMap.has(source) && this.nodeMap.has(destination)) {
      const sourceNode = this.nodeMap.get(source);
      const destNode = this.nodeMap.get(destination);
      return this.adjList.get(sourceNode).includes(destNode);
    }
    return false;
  }

  traverseDFS(rootLabel) {
    if (!this.nodeMap.has(rootLabel)) {
      return;
    }
    let visited = new Set();
    this._traverseDFS(this.nodeMap.get(rootLabel), visited);
    console.log("===========================");
    let visited1 = new Set();
    this._traverseDFSItr(this.nodeMap.get(rootLabel), visited1);
  }

  _traverseDFS(root, visited) {
    if (!visited.has(root)) {
      console.log(root.label);
      visited.add(root);
      for (let node of this.adjList.get(root)) {
        if (!visited.has(node)) {
          this._traverseDFS(node, visited);
        }
      }
    }
  }

  _traverseDFSItr(root, visited) {
    let stack = [];
    stack.push(root);

    while (stack.length > 0) {
      let node = stack.pop();
      console.log(node.label);
      visited.add(node);
      for (let data of this.adjList.get(node)) {
        if (!visited.has(data)) {
          stack.push(data);
        }
      }
    }
  }

  traverseBFS(rootLabel) {
    if (!this.nodeMap.has(rootLabel)) {
      return;
    }
    let visited = new Set();
    console.log("==================BFS==============");
    this._traverseBFSItr(this.nodeMap.get(rootLabel), visited);
  }

  _traverseBFSItr(root, visited) {
    let queue = [];
    queue.push(root);
    let front = 0;

    while (queue.length > front) {
      let node = queue[front];
      front++;
      console.log(node.label);
      visited.add(node);
      for (let data of this.adjList.get(node)) {
        if (!visited.has(data)) {
          queue.push(data);
        }
      }
    }
  }

  topologicalSort() {
    let stack = [];
    let visited = new Set();

    for (let [key, node] of this.nodeMap.entries()) {
      this._topologicalSort(node, visited, stack);
    }
    console.log(stack);
  }

  _topologicalSort(node, visited, stack) {
    if (visited.has(node)) {
      return;
    }
    visited.add(node);
    for (let vertex of this.adjList.get(node)) {
      if (!visited.has(vertex)) {
        this._topologicalSort(vertex, visited, stack);
      }
    }
    stack.push(node.label);
  }
}

export default Graph;
