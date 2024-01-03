/** Node: node for a singly linked list.
 * We’ve supplied you with a Node class and a constructor for the LinkedList class.
 * Here are descriptions of the methods you should write for instances of LinkedList:
 *
 * push(val)
 *     Appends a new node with value val to the tail. Returns undefined.
 *
 * unshift(val)
 *     Add a new node with value val to the head. Returns undefined.
 *
 * pop()
 *     Remove & return tail value. Throws error if list is empty.
 *
 * shift()
 *     Remove & return head value. Throws error if list is empty.
 *
 * getAt(idx)
 *     Retrieve value at index position idx. Throws error if index is invalid.
 *
 * setAt(idx, val)
 *     Set value of node at index position idx to val. Throws error if index is invalid.
 *
 * insertAt(idx, val)
 *     Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.
 *
 * removeAt(idx)
 *     Remove & return value at position idx. Throws error if index is invalid.
 */
class Node {
	constructor(val) {
		// console.log("CREATING NODE:", val);
		this.val = val;
		this.next = null;
		// this.previous = null;// no this is not a doubly linked list no previous
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		// console.log("Creating Linked List:", vals);
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
		// console.log("Creation end, This: ", this);
	}

	/** push(val): add new value to end of list. */
	// LL = linkedList() // head null tail null lengh 0
	// push(10)
	// LL head 10 tail 10 length 1
	// push(15)
	// LL
	push(val) {
		// console.log("PUSHING:", val);
		let newNode = new Node(val);
		if (this.length == 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		// DEMO CODE --------------- colts way...
		//   let newNode = new Node(val);
		//   if (this.head === null) this.head = newNode;
		//   if (this.tail !== null) this.tail.next = newNode;
		//   this.tail = newNode;
		// DEMO CODE END --------------- colts way...
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		// console.log("UNSHIFTING:", val);
		let newNode = new Node(val);
		if (this.length == 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	/** pop(): return & remove last item. */
	// LL = linkedList([5,10]) // head 5 tail 10 lengh 2
	// pop() // 10     // head 5 tail null length 1 // head node should now not have 10 as its tail
	// we have to update the node that came before the tail aswell
	pop() {
		// console.log("POPPING! --------------------------------");
		let result;

		if (this.length == 0) {
			// console.log("LinkedList is empty");
			return result;
		} else if (this.length == 1) {
			result = this.tail.val;
			this.head = null;
			this.tail = null;
			this.length--;
			return result;
		} else {
			let current = this.head;

			// this loop will getus to the tail of the node linked list
			// while (current !== null) {
			//   console.log(current.val);
			//   current = current.next;
			// }
			// when this while loop ends we will get the value of current set to be the node just before the tail
			while (current.next !== this.tail) {
				// console.log("Current Val:", current.val);
				current = current.next;
			}

			// console.log("Current Node after Loop traversal:", current);

			result = current.next.val;
			current.next = null;
			this.tail = current;
		}
		this.length--;
		// console.log("after nulling:", this);
		// console.log("Returning:", result);
		return result;
	}

	/** shift(): return & remove first item. */

	shift() {
		let result;
		if (this.length == 0) {
			// console.log("LinkedList is empty");
			return result;
		} else if (this.length == 1) {
			result = this.head.val;

			this.head = null;
			this.tail = null;
			this.length--;
			return result;
		} else {
			let oldHead = this.head;
			let newHead = oldHead.next;
			this.head = newHead;
			result = oldHead.val;
		}
		this.length--;
		return result;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		let result;
		if (this.length == 0) {
			console.log("list is empty");
			return result;
		} else if (idx < 0 || idx > this.length) {
			console.log("requested idx is not valid (out of bounds)");
			return result;
		}
		let current = this.head;
		for (let i = 0; i < idx; i++) {
			current = current.next;
		}
		// console.log("RETURNING val at idx:", idx, " -> ", current.val);
		result = current.val;
		return result;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		// traverse to the node at idx
		let current = this.head;
		for (let i = 0; i < idx; i++) {
			current = current.next;
		}
		// set the value
		current.val = val

	}

	/** insertAt(idx, val): add node w/val before idx. */

	// insertAt(idx, val) {}

	/** removeAt(idx): return & remove item at idx, */

	// removeAt(idx) {}

	/** average(): return an average of all values in the list */

	// average() {}

	// DEMO CODE ------------------------------------------------------------
	/** print(): traverses through and logs the entire list */
	print() {
		console.log("Current List:");
		let current = this.head;

		while (current !== null) {
			console.log(current.val);
			current = current.next;
		}
	}

	/** find(val): is val in list? returns boolean */

	find(val) {
		let current = this.head;

		while (current !== null) {
			if (current.val === val) return true;

			current = current.next;
		}

		return false;
	}
	// DEMO CODE END ------------------------------------------------------------ END
}

module.exports = LinkedList;
