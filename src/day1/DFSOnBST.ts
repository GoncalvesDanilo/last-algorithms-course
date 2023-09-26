function search(curr: BinaryNode<number> | null, value: number): boolean {
  if (!curr) return false;

  if (curr.value === value) return true;

  if (curr.value < value) return search(curr.right, value);

  return search(curr.left, value);
}

export default function dfs(
  head: BinaryNode<number> | null,
  needle: number,
): boolean {
  return search(head, needle);
}
