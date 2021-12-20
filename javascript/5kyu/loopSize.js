// given a graph with a tail and loop, find the loop size
// node.next is a property of the node that gets the next node

function loop_size(node) {
  let nodes = [];
  let currentNode = node;
  let currentIndex = 0;
  while (!nodes.includes(currentNode)) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
    currentIndex++;
  }
  return currentIndex - nodes.indexOf(currentNode);
}
