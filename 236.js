function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};

console.log(
  lowestCommonAncestor(new TreeNode(3), new TreeNode(5), new TreeNode(1))
);
