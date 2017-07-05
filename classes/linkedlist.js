function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this._length = 0;
	this.head = null;
}

LinkedList.prototype.add = function(value) {
	var node = new Node(value), currentNode = this.head;

	if (!currentNode) {
		this.head = node;
		this._length++;

		return node;
	}

	while(currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;

	this._length++;

	return node;
}

LinkedList.prototype.searchAt = function(index) {
	var currentNode = this.head, count = 0;

	if (this._length == 0 || index > this._length || index < 0) {
		return 'Non-node exist at ' + index;
	}

	while(count < index) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
}

LinkedList.prototype.remove = function(index) {
	var currentNode = this.head, count = 1, nodeToDelete = null;

	if (index < 0 || index >= this._length) {
		return 'Non-exist node at ' + index;
	}

	if (index == 1) {
		nodeToDelete = currentNode;
		this.head = currentNode.next;
		this._length--;

		return nodeToDelete;
	}

	while(count < index) {
		beforeNodeToDelete = currentNode;
		currentNode = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = currentNode.next;
	nodeToDelete = currentNode;
	currentNode = null;
	this._length--;

	return nodeToDelete;
}

LinkedList.prototype.getSize = function() {
	return this._length;
}

LinkedList.prototype.printList = function() {
	var currentNode = this.head, count = 0;

	while(count < this._length) {
		var nextNode = currentNode.next;

		console.log('data: ', currentNode.data, ' next: ', (nextNode) ? (nextNode.data) : (nextNode));

		currentNode = currentNode.next;
		count++;
	}
}

var list = new LinkedList();

list.add('Linux');
list.add('Ubuntu');
list.add('Unix');
list.add('Java');
list.add('JavaScript');
list.add('GoLang');
var node = list.searchAt(0);

console.log(list.remove(3));
list.printList();












