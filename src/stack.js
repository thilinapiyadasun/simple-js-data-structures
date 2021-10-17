const _values = new WeakMap();
const _head = new WeakMap();

export class Stack {
  constructor() {
    _values.set(this, []);
    _head.set(this, 0);
  }

  pop() {
    if (!this.isEmpty()) {
      return _values.get(this).pop();
    }
    return new Error("Trying to remove from empty stack");
  }

  push(item) {
    _values.get(this).push(item);
  }

  isEmpty() {
    return _values.get(this)?.length === 0;
  }

  size() {
    return _values.get(this)?.length;
  }

  peek() {
    return _values.get(this)[this.size() - 1];
  }
}
