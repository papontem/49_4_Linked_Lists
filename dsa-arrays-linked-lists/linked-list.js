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
		console.log("UNSHIFTING:", val);
		let newNode = new Node(val);
		// this.head = newNode;
		// newNode.next = oldListHead;
		if (this.length == 0) {
      this.head = newNode;
			this.tail = newNode;
		} else {
      newNode.next = this.head;
      this.head = newNode
		}
		this.length++;
		this.print();
	}

	/** pop(): return & remove last item. */

	// pop() {}

	/** shift(): return & remove first item. */

	// shift() {}

	/** getAt(idx): get val at idx. */

	// getAt(idx) {}

	/** setAt(idx, val): set val at idx to val */

	// setAt(idx, val) {}

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
