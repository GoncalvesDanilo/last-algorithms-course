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
    if (!this.head) {
      this.head = this.tail = { value: item } as Node<T>;
      return;
    }

    const head = this.head;
    this.head = { value: item, next: head } as Node<T>;
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (!this.head) return;
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      if (i === idx - 1) {
        const next = node.next;
        node.next = { value: item, next } as Node<T>;
      } else {
        if (node.next) node = node.next;
      }
    }
    this.length++;
  }

  append(item: T): void {
    if (!this.tail) {
      this.head = this.tail = { value: item } as Node<T>;
      return;
    }

    const tail = { value: item } as Node<T>;
    this.tail.next = tail;
    this.tail = this.tail.next;
    this.length++;
  }

  remove(item: T): T | undefined {

  }

  get(idx: number): T | undefined {
    if (!this.head) return;
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      if (i === idx - 1) return node.next?.value;
    }
    return undefined;
  }

  removeAt(idx: number): T | undefined {}
}
