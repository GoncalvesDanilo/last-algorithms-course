type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    this.length++;
    if (!this.head) {
      this.head = this.tail = { value: item } as Node<T>;
      return;
    }

    const head = this.head;
    this.head = { value: item, next: head } as Node<T>;
  }

  insertAt(item: T, idx: number): void {
    if (!this.head) return;

    this.length++;

    let node = this.head;
    for (let i = 0; i < idx; i++) {
      if (i === idx - 1) {
        const next = node.next;
        node.next = { value: item, next } as Node<T>;
      } else {
        if (node.next) node = node.next;
      }
    }
  }

  append(item: T): void {
    this.length++;
    if (!this.tail) {
      this.head = this.tail = { value: item } as Node<T>;
      return;
    }

    const tail = { value: item } as Node<T>;
    this.tail.next = tail;
    this.tail = this.tail.next;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    let prev: Node<T> | undefined = undefined;
    for (let i = 0; curr && this.length; i++) {
      if (curr.value === item) {
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    this.length--;

    if (this.length === 0) {
      const value = this.head?.value;
      this.head = undefined;
      return value;
    }

    if (prev) {
      prev.next = curr.next;
    }

    if (curr === this.head) {
      this.head = curr.next;
    }

    return curr.value;
  }

  get(idx: number): T | undefined {
    if (idx > this.length) {
      return undefined;
    }

    let node = this.head;

    for (let i = 0; node && i <= idx; i++) {
      if (i === idx) {
        return node.value;
      }
      node = node.next;
    }

    return undefined;
  }

  removeAt(idx: number): T | undefined {
    if (idx > this.length) {
      return undefined;
    }

    let curr = this.head;
    let prev: Node<T> | undefined = undefined;
    for (let i = 0; curr && idx; i++) {
      if (i === idx) {
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    this.length--;

    if (this.length === 0) {
      const value = this.head?.value;
      this.head = undefined;
      return value;
    }

    if (prev) {
      prev.next = curr.next;
    }

    if (curr === this.head) {
      this.head = curr.next;
    }

    return curr.value;
  }
}
