/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// var mergeTwoLists = function(list2, list2) {
//   if (!list1) return list2;
//   if (!list2) return list1;
//   if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next);
//     return list2;
//   }
// };

// // Definition for singly-linked list
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0: val);
//   this.next = (next===undefined ? null : next)
// }

// // Helper function to convert array to linked list
// function arrayToLinkedList(arr) {
//   if (arr.length === 0) return null;
//   let head = new ListNode(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     current.next = new ListNode(arr[i]);
//     current = current.next;
//   }
//   return head;
// }

// // Helper function to display linked list as array
// function linkedListToArray(node) {
//   let arr = [];
//   while (node) {
//     arr.push(node.val);
//     node = node.next;
//   }
//   return arr;
// }

// *** *** *** *** *** //

function expect (val) {
  return {
    toBe: function(expectedVal) {
      if (val === expectedVal) {
        return true;
      } else {
        throw new Error('Not Equal');
      }
    },
    notToBe: function(expectedVal) {
      if (val !== expectedVal) {
        return true;
      } else {
        throw new Error('Equal');
      }
    }
  }
}

try {
  expect(5).toBe(5);
  expect(5).notToBe(10);
  expect(5).toBe(10);
  expect(5).notToBe(5);
} catch (e) {
  console.error(e.message);
};

// *** *** *** *** *** //

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  };
  for (let key in charCount) {
    iff (charCount[key] !== 0) return false;
  };
  return true;
};

// *** *** *** *** *** //

// Define a 'ListNode' class to represent nodes in the linked list, where each node has a value ('val') and a reference to the next node ('next')
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// The 'mergeTwoLists' function takes two sorted linked lists, 'list1' and 'list2' as input
function mergeTwoLists (list1, list2) {
  // Create a dummy node to simplify handling the merged list
  const dummy = new ListNode();
  // Create a 'current' variable that keeps track of the current node in the merged list
  let current = dummy;
  while (list1 !== null && list2 !== null) {
    // Compare the values of the first nodes in 'list1' and 'list2'. The smaller value is appended to the merged lists, and the respective list's pointer is moved to the next node
    // repeat this process until the end of either 'list1' or 'list2' is reached
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  // Append the remaining elements from either of the lists (if any)
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }
  // The merged list starts after the dummy node
  return dummy.next;
}

// *** *** *** *** *** //

const mergeTwoListsV2 = function (list1, list2) {
  // handle base cases
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    // If the value in 'list1' is smaller than the value in 'list2' we choose to append the first node of 'list1' to the result. -> This is, because in a sorted list, the smallest value will be the head.
    // We then recursively call 'mergeTwoListsV2' on the remaining elements of 'list1' and the whole 'list2' This ensures that we keep merging the smaller elements from 'list1' and 'list2' in sorted order.
    // The result of the recursive call is assigned to 'list1.next', which effectively updates the next node in 'list1'.
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
// The recursive approach effectively merges the two sorted linked lists by comparing their values and building the merged list in sorted order. It continues until one of the lists becomes empty, at which point the other list is appended to the merged list as is.
