# 

## 14 Patterns Algorithims
<table>
<th><h3>Uses: Symbol in Pattern</h3></th>
<tr>
<td>
<h4>๐ = 1 Pointers <h4> 
</td>
<td>
<h4>๐ฆ = 1 Heap <h4> 
</td>

<td>
<h4>๐ฅ = 1 Array <h4> 
</td>

<td>
<h4>๐ฝ = 1 Stack</h4>
</td>

<td>
<h4>๐ฆ = 1 Queue</h4>
</td>


<td>
<h4>๐ = 1 Hash </h4>
</td>

<td>
<h4>โ = 1 Counter </h4>
</td>

</tr>
<tr>

<td>
<h4>๐ฑ = 1 Node </h4>
</td>

<td>
<h4>๐ก = 1 Loop </h4>
</td>

<td>
<h4>๐ฑ = 1 Graph</h4>
</td>

<td>
<h4>๐ = 1 Linked List </h4>
</td>
<td>
<h4> ๐ช = 1 Recursion </h4>
</td>

<td>
<h4>๐คนโโ๏ธ = 1 Swap </h4>
</td>
</tr>
</table>

  <details>
    <summary>  <h1>๐ช Sliding Window : ๐๐ฅ๐ก </h1> </summary>
    <br>
  <table>
    <tr>
        <td>
            <h3>โ SUBSTRING OR SUBARRAY FIND LONGEST OR SMALLEST CONTAIN CHARACTER <h3>
            <h3>โฐ: O(n) ๐ช: O(n) </h3>
        </td>
           <td colspan="2">
               ๐ฃ Maximum Sum Subarray of Size K, Longest Substring with K Distinct CharactersString Anagrams, No-repeat Substring, etc.
            </td>
    </tr>
    <tr>
        <td>
<pre class="notranslate">
<code>
function findAvgSubArrays(K, arr) {
  const result = [];
  let windowSum = 0, windowStart = 0;
  for (let winEnd = 0; winEnd < arr.length; winEnd++) {
    windowSum += arr[winEnd];   
    if (winEnd >= K - 1) {
      result.push(windowSum / K);             
      windowSum -= arr[windowStart];
      windowStart += 1;                     
    }
  }
  return result;
}
</code>
</pre>
        </td>
         <td colspan="3">
            <img
                src="https://miro.medium.com/max/372/0*o-PhzdP_jd_5L2iq.jpg"
                alt="Sliding Window Pattern"
            />
        </td>
    </tr>

</table>
<details>
<summary>๐ช Problems </summary>
<br>
## [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) #3 ๐ช 
        โ: Given a string s, find the length of the longest substring without repeating characters.
        ๐ฃ: 1๏ธโฃ Input: s = "abcabcbb" Output: 3 Explain: The answer is "abc", with the length of 3. 2๏ธโฃ Input: s = "bbbbb" Output: 1 Explain: The answer is "b", with the length of 1. 3๏ธโฃ Input: s = "pwwkew" Output: 3 Explain: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence & not a substring. #4 Input: s = "" Output: 0
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(n^3) ๐ช: O(min(m, n))  
        ๐ Solution: ๐ช Sliding Window Pattern โฐ: O(n) ๐ช: O(n)

            var lengthOfLongestSubstring = function (s) {
              let result = 0;
              let left = 0;
              let right = 0;
              let set = new Set();
              while (right < s.length) {
                if (!set.has(s[right])) {
                  set.add(s[right]);
                  right++;
                  result = Math.max(result, set.size);
                } else {
                  set.delete(s[left]);
                  left++;
                }
              }
              return result;
            };
## [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) #424 ๐ช 
        โ: You are given a string s & an integer k. You can choose any character of the string & change it to any other uppercase English character. You can perform this operation at most k times.
        Return the length of the longest substring containing the same letter you can get after performing the above operations.
        ๐ฃ: 1๏ธโฃ Input: s = "ABAB", k = 2 Output: 4 Explain: Replace the two 'A's with two 'B's or vice versa. 2๏ธโฃ Input: s = "AABABBA", k = 1 Output: 4 Explain: Replace the one 'A' in the middle with 'B' & form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(n^2) ๐ช: O(1)
        ๐ Solution: ๐ช Sliding Window Pattern โฐ: O(n) ๐ช: O(n)

            var characterReplacement = function (s, k) {
              let left = 0;
              let right = 0;
              let maxCount = 0;
              let map = new Map();
              while (right < s.length) {
                map.set(s[right], (map.get(s[right]) || 0) + 1);
                maxCount = Math.max(maxCount, map.get(s[right]));
                if (right - left + 1 - maxCount > k) {
                  map.set(s[left], map.get(s[left]) - 1);
                  left++;
                }
                right++;
              }
              return right - left;
            };
## [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) #76 ๐ช 
        โ: Given two strings s & t of lengths m & n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
        The testcases will be generated such that the answer is unique.
        A substring is a contiguous sequence of characters within the string.
        ๐ฃ: 1๏ธโฃ Input: s = "ADOBECODEBANC", t = "ABC" Output: "BANC" Explain: The minimum window substring "BANC" includes 'A', 'B', & 'C' from string t. 2๏ธโฃ Input: s = "a", t = "a" Output: "a" 3๏ธโฃ Input: s = "a", t = "aa" Output: "" Explain: Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string.
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(n^2) ๐ช: O(n)
        ๐ Solution: ๐ช Sliding Window Pattern โฐ: O(n) ๐ช: O(n)

            var minWindow = function (s, t) {
              let left = 0;
              let right = 0;
              let map = new Map();
              let min = Infinity;
              let result = "";
              for (let i = 0; i < t.length; i++) {
                map.set(t[i], (map.get(t[i]) || 0) + 1);
              }
              let count = map.size;
              while (right < s.length) {
                let char = s[right];
                if (map.has(char)) {
                  map.set(char, map.get(char) - 1);
                  if (map.get(char) === 0) {
                    count--;
                  }
                }
                right++;
                while (count === 0) {
                  if (right - left < min) {
                    min = right - left;
                    result = s.substring(left, right);
                  }
                  let char = s[left];
                  if (map.has(char)) {
                    map.set(char, map.get(char) + 1);
                    if (map.get(char) > 0) {
                      count++;
                    }
                  }
                  left++;
                }
              }
              return result;
            };
</details>
</details>
  <details>
    <summary>  <h1>๐ฏ Two Pointers:  ๐๐๐ก</h1> </summary>
    <br>
<table>
    <tr>
        <td>
           <h3> โ FIND A PAIR, TRIPLET or a SUBARRAY <h3>
            <h3>โฐ: O(n) ๐ช: O(n)</h3>
        </td>
            <td colspan="2">
                ๐ฃ Squaring a Sorted Array, Triplets that Sum to Zero, Triplet Sum Close to Target, Triplets with Smaller Sum, Subarrays with Product Less than a Target, Comparing Strings containing Backspaces, etc.
              </td>
    </tr>
    <tr>
        <td>
<pre class="notranslate">
<code>
left = 0;
right = 0;
while (right < s.length()) {
    // add s[right] to window
    right++;
    while (window needs shrink) {
        // remove s[left] from window
        left++;
    }
}
</code>
</pre>
        </td>
         <td colspan="3">
            <img
                src="https://cdn.emre.me/2019-10-21-two-pointers.png"
                alt="Two Pointers"
            />
        </td>
    </tr>
</table>
</details>
 <details>
    <summary>  <h1>๐ฐ๐ข Fast & Slow Pointers: ๐๐ ๐ก</h1> </summary>
    <br>
<table>
    <tr>
        <td>
            <h3> โ FIND CYCLE IN A LINKED LIST OR FIND THE MIDDLE OF A LINKED LIST </h3>
            <h3>โฐ:โฐ: O(n) ๐ช: O(n)</h3>
        </td>
            <td colspan="2">
                ๐ฃ Linked List Cycle, Palindrome LinkedList, Cycle in a Circular Array, etc.
              </td>
    </tr>
        <tr>
    </tr>
    <tr>
        <td>
           <h3>๐ญ PsuendoCode</h3>
<pre class="notranslate">
<code>
slow = 0;
fast = 0;
while (fast < s.length()) {
    if (s[fast] is not a duplicate) {
        // move slow pointer one step
        // add s[fast] to window
        slow++;
    }
    // move fast pointer one step
    fast++;
}
</code>
</pre>
        </td>
         <td colspan="3">
            <img
                src="http://1algo1week.warriorkitty.com/assets/floyds-cycle-finding-algorithm/algorithm.png"
                alt="Fast & Slow Pointers Pattern"
            />
        </td>
    </tr>
</table>
</details>
</details>
 <details>
    <summary>  <h1>๐๐ Merge Intervals : ๐๐๐ฅ  </h1>  </summary>
    <br>
<table>
    <tr>
        <td>
            <h3> โ MERGE INTERVALS OR FIND OVERLAPPING INTERVALS <h3>
           <h3>  โฐ: O(nlogn) ๐ช: O(n) </h3>
        </td>
            <td colspan="2">
                ๐ฃ Insert Interval, Intervals Intersection, Conflicting Appointments, Minimum Meeting Rooms, etc.
              </td>
    </tr>
    <tr>
        <td>
           <h3>๐ญ PsuendoCode</h3>
<pre class="notranslate">
<code>
function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort the intervals on the start time
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];
  let start = intervals[0][0],
    end = intervals[0][1];
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= end) {
      end = Math.max(interval[1], end);
    } else {
      mergedIntervals.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }
  // add the last interval
  mergedIntervals.push([start, end]);               
  return mergedIntervals;
}
</code>
</pre>
        </td>
         <td colspan="3">
            <img
                src="https://cdn.emre.me/2019-10-27-merge-intervals.png"
                alt="Merge Intervals Pattern"
            />
        </td>
    </tr>
</table>
</details>
<details>
<summary> <h1 align="center">
      ๐๐  Mod Binary Search: ๐๐๐๐ก 
    </h1>  </summary>
    <br>
<table>
  <tr>
    <td>
      <h3>โ MINIMUM DIFFERENCE  OR FIND ELEMENT IN INFINITE SORTED ARRAY</h3>
    </td>
    <td>
    <h3>๐ฃ Order-agnostic Binary Search, Ceiling of a Number, Floor of a Number, Next Letter, Number Range, etc.</h3>
    </td>
  </tr>
  <tr>
    <td>
      <h3>๐ญ PsuendoCode ๐๐  Mod Binary Search Pattern ๐๐</h3>
<pre>
<code>
  start = 0, end = arr.length - 1;
  while (start <= end) {
      // calculate the middle of the current range
      mid = start + (end - star
      if (key < arr[mid]) {
          end = mid - 1; // the 'key' can be in the first half
      } else if (key > arr[mid]) {
          start = mid + 1; // the 'key' can be in the second half
      } else { // found the key
          return mid;
      }
  }
  // element is not found
  return -1;
</code>
</pre>
    </td>
    <td colspan="3"> <img src="https://cdn.emre.me/2019-08-08-binary-search.png"> </td>
  </tr>
</table>
</details>
 
<details>
<summary>  <h1><align="center"> ๐ Cyclic Sort :  ๐ก๐คนโโ๏ธ </h1>   </summary>
    <br>
 <table>
    <tr>
        <td>
                   <h3> โ FIND MISSING # OR  SORT #s IN PLACE  </h3>
                              <h3> ๐ฃ Cyclic Sort, Find the Missing Number, Find all Missing Numbers, <br/>
                              Find the Duplicate Number, Find all Duplicate Numbers, Find the Corrupt Pair, etc.
            </h3>
           <h3> โฐ: O(n) ๐ช: O(1) </h3>
         <h3>๐ญ PsuendoCode</h3>
<pre class="notranslate">
<code>

i = 0;
while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] != nums[j])
        swap(nums, i, j); // put the number in its correct place
    else
        i++;
}
</code>
</pre>
        </td>
         <td colspan="3">
            <img
                src="https://cdn.emre.me/2019-10-28-missing-number-example.png"
                alt="Cyclic Sort Pattern"
            />
        </td>
    </tr>
</table>
</details>
<details>
<summary>  <h1>๐๐ Reverse LinkList : ๐ฑ๐คนโโ๏ธ๐ก </h1>   </summary>
    <br>
 <table>
      </tr>
      <tr>
        <td>
          <h3>โ REVERSE A LINKEDLIST</h3>
          <h3>โฐ: O(n) ๐ช: O(1)</h3>
        </td>
        <td>
           <h3>๐ฃ Reverse a LinkedList, Reverse a Sub-list, Reverse every K-element Sub-list (medium), etc.</h3>
        </td>
      </tr>
      <tr>
        <td>
          <h3>๐ญ PsuendoCode</h3>
<pre>
<code>
  function reverse(head) {
    let prev = null;
    while (head !== null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
</code>
</pre>
        </td>
         <td colspan="3"> <img src="https://cdn.emre.me/2019-11-04-in-place-reversal.gif"> </td>
      </tr>
</table>
</details>
<details>
<summary> <h1 align="center">
      ๐ณ BFS : ๐ฆ ๐ช
    </h1>  </summary>
    <br>
<table style="width:100%">
  <tr>
    <td>
      <h3>โ FIND MIN DEPTH, MAX DEPTH, LEVEL AVERAGE OF BINARY TREE</h3>
       <h3>โฐ: O(n) ๐ช: O(n)</h3>
    </td>
    <td>
    <h3>๐ฃ Level Order Traversal, Zigzag Traversal, Level Averages in a Binary Tree, <br/> 
    Minimum Depth of a Binary Tree, Level Order Successor, <br/>
    Connect Level Order Siblings, etc. Tree Breadth First Search?</h3>
    </td>
  </tr>
  <tr>
    <td>
      <h3>๐ญ PsuendoCode ๐ณ</h3>
<pre>
<code>
  const queue = [root];
  while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
  }
</code>
</pre>
    </td>
    <td colspan="3"> <img src="https://www.guru99.com/images/1/020820_0543_BreadthFirs1.png"> </td>
  </tr>
</table>
</details>
<details>
<summary> <h1 align="center">
      ๐ฒ DFS :  ๐ฝ๐ช
    </h1>  </summary>
    <br>
<table style="width:100%">
  <tr>
    <td>
      <h3>โ FIND PATH WITH MAX SUM OR PATH WITH GIVEN SEQUENCE</h3>
       <h3>โฐ: O(n) ๐ช: O(n)</h3>
    </td>
    <td>
    <h3>๐ฃ Reverse Level Order Traversal, Zigzag Traversal, <br/>
    Level Averages in a Binary Tree, Minimum Depth of a Binary Tree, <br/>
    Level Order Successor, Connect Level Order Siblings, etc.</h3>
    </td>
  </tr>
  <tr>
    <td>
      <h3>๐ญ PsuendoCode Tree Depth First Search Pattern ๐ฒ</h3>
<pre>
<code>
  Stack< Tree Node stack = new Stack<>();
  stack.push(root);
  while (!stack.isEmpty()) {
      TreeNode currentNode = stack.pop(); 
      if (currentNode.left != null) stack.push(currentNode.left);
      if (currentNode.right != null) stack.push(currentNode.right);
  }
</code>
</pre>
    </td>
    <td colspan="3"> <img src="https://assets.leetcode.com/users/andvary/image_1556551007.png"> </td>
  </tr>
</table>
</details>
<details>
<summary> <h1 align="center">
     ๐ฆ๐ฆ Two Heaps : ๐ฆ๐ฆ ๐ก
    </h1>  </summary>
    <br>
<table>
  <tr>
    <td>
      <h3>โ MEDIAN OF # STREAM FIND K SMALLEST #</h3>
    </td>
    <td>
    <h3>๐ฃ Sliding Window Median, Find the Median of a Number Stream, etc.</h3>
    </td>
  </tr>
  <tr>
    <td>
      <h3>๐ญ PsuendoCode Two Heaps Pattern ๐ฆ๐ฆ</h3>
<pre>
<code>
  let maxHeap = new MaxHeap();
  let minHeap = new MinHeap();
  for (num of nums) {
      if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
          maxHeap.push(num);
      } else {
          minHeap.push(num);
      }
      if (maxHeap.size() > minHeap.size() + 1) {
          minHeap.push(maxHeap.pop());
      } else if (maxHeap.size() < minHeap.size()) {
          maxHeap.push(minHeap.pop());
      }
  }
</code>
</pre>
    </td>
    <td colspan="3"> <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/MinHeapAndMaxHeap.png"> </td>
  </tr>
</table>
</details>
<details>
<summary> <h1 align="center">
     ๐ Subsets :  ๐ฅ๐ก
    </h1>  </summary>
    <br>
<table> 
  <tr>
    <td>
      <h3>โ FIND ALL SUBSETS OF A SET OR FIND ALL SUBSETS ADD UP TO GIVEN #PERMUTATIONS AND COMBINATIONS OF SUBSETS</h3>
    </td>
    <td>
    <h3>๐ฃ Find all subsets of a set, Find all subsets of a set with duplicates, Find all subsets with a given sum, etc.</h3>
    </td>
  </tr>
  <tr>
    <td>
      <h3>๐ญ PsuendoCode </h3>
<pre>
<code>
  let subsets = [[]];
  for (let i = 0; i < nums.length; i++) {
      let n = subsets.length;
      for (let j = 0; j < n; j++) {
          let set = subsets[j].slice(0);
          set.push(nums[i]);
          subsets.push(set);
      }
  }
</code>
</pre>
    </td>
    <td colspan="3"> <img src="https://hackernoon.com/images/G9YRlqC9joZNTWsi1ul7tRkO6tv1-hemg3w8d.jpg"> </td>
  </tr>
</table>
</details>

<details>
<summary> <h1 align="center">
     #๏ธโฃ ๐  K TOP :  ๐ฆ ๐ก๐ก
    </h1>  </summary>
    <br>
<table>
  <tr>
    <td>
      <h3>โ TOP K #s OR FREQUENCY OF TOP K #s</h3>
    </td>
    <td>
    <h3>๐ฃ Top 'K' Numbers, Kth Largest Number in a Stream, K Closest Points to the Origin, etc.</h3>
    </td>
  </tr>
  <tr>
    <td>
      <h3>๐ญ PsuendoCode K TOP in Javascript:</h3>
<pre>
<code>
  import MinHeap from './DataStructures/Heap/MinHeap.js';

  function findLargestKNum(nums, k) {
      const minHeap = new MinHeap();
      for (i = 0; i < k; i++) {
          minHeap.push(nums[i]);
      }
      for (i = k; i < nums.length; i++) {
          if (nums[i] > minHeap.peek()) {
              minHeap.pop();
              minHeap.push(nums[i]);
          }
      }

      return minHeap.toArray();
  }
</code>
</pre>
    </td>
    <td colspan="3"> <img src="https://i.ytimg.com/vi/Wh3A29psE_Y/maxresdefault.jpg"> </td>
  </tr>
</table>
</details>
<details>
<summary> <h1 align="center">
      #๏ธโฃ๐๐ K MERGE : ๐ฑ๐ฆ๐ก๐ก
    </h1>  </summary>
    <br>
<table>
  <tr>
    <td>
      <h3>โ MERGE K SORTED ARRAYS OR MERGE K SORTED LISTS</h3>
    </td>
    <td>
    <h3>๐ฃ Merge K Sorted Lists, Kth Smallest Number in M Sorted Lists, Kth Smallest Number in a Sorted Matrix, etc.</h3>
    </td>
  </tr>
  <tr>
    <td>
      <h3>๐ญ PsuendoCodeK MERGE Pattern in Javascript:</h3>
<pre>
<code>
  import ListNode from "DataStructures/LinkedList/ListNode.js";
  import MinHeap from "DataStructures/Heaps/MinHeap.js";

  const mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    let dummy = new ListNode();
    let curr = dummy;
    let minHeap = new MinHeap();
    for (let i = 0; i < lists.length; i++) {
      if (lists[i]) minHeap.insert(lists[i]);
    }
    while (minHeap.size() > 0) {
      let node = minHeap.remove();
      curr.next = node;
      curr = curr.next;
      if (node.next) minHeap.insert(node.next);
    }
    return dummy.next;
  };
</code>
</pre>
    </td>
    <td colspan="3"> <img src="https://i.ytimg.com/vi/Xo54nlPHSpg/maxresdefault.jpg"> </td>
  </tr>
</table>
</details>
<details>
<summary> <h1 align="center">
     ๐ Topological Sort : ๐ฆ๐ฑ๐ก
    </h1>  </summary>
    <br>
<table> 
  <tr>
         <td>
      <h3>โ FIND ORDER OF TASKS OR IF GIVEN SEQUENCE IS VALID</h3>
    </td>
      <td>
     <img src="https://slideplayer.com/slide/12886082/78/images/5/Topological+Sort%3A+Definition.jpg" alt="Topological Sort: Definition" width="500" height="500">
    </td>
  </tr>
    <tr>
    <td>
    <h3>๐ฃ Tasks Scheduling, Tasks Scheduling Order, All Tasks Scheduling Orders, etc.</h3>
    </td>
         <td>
      <h3>๐ญ PsuendoCode  ๐  Topological Sort Pattern  ๐  in Javascript:</h3>
<pre>
<code>
const Deque = require('collections/deque'); //http://www.collectionsjs
function print_orders(tasks, prerequisites) {
  sortedOrder = [];
  if (tasks <= 0) {
    return false;

  // a. Initialize the graph
  inDegree = Array(tasks).fill(0); // count of incoming edges
  graph = Array(tasks).fill(0).map(() => Array()); // adjacency list g
  // b. Build the graph
  prerequisites.forEach((prerequisite) => {
    let parent = prerequisite[0],
      child = prerequisite[1];
    graph[parent].push(child); // put the child into it's parent's list
    inDegree[child]++; // increment child's inDegree

  // c. Find all sources i.e., all vertices with 0 in-degrees
  sources = new Deque();
  for (i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }

  print_all_topological_sorts(graph, inDegree, sources, sortedOrder);
  return sortedOrder;

function print_all_topological_sorts(graph, inDegree, sources, sortedOrder) {
  if (sources.length > 0) {
    for (i = 0; i < sources.length; i++) {
      vertex = sources.shift();
      sortedOrder.push(vertex);
      sourcesForNextCall = sources.slice(0); // make a copy of sources
      // only remove the edges, if all of its children are not sources
      graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
        inDegree[child]--; // decrement inDegree of child
        if (inDegree[child] === 0) {
          sourcesForNextCall.push(child); // save the new source for the next call
        }
      });
      // recursive call to print other orderings from the remaining (and new) sources
      print_all_topological_sorts(graph, inDegree, sourcesForNextCall, sortedOrder);
      // backtrack, remove the vertex from the sorted order and put all of its children back to consider
      // the next source instead of the current vertex
      sortedOrder
</code>
</pre>
    </td>
  </tr>
</table>
</details>



      


   






## Other Patterns

## Union Find Algorithm Pattern โพ ->
    โ # OF CONNECTED COMPONENETS IN UNDIRECTED GRAPH, FIND IF 2 NODES CONNECTED
    ๐ฃ Number of Connected Components in an Undirected Graph, Find whether two nodes are connected in an undirected graph, etc.

      ๐ญ PsuendoCode Union Find Algorithm Pattern โพ
          โฐ: O(V * logV) ๐ช: O
                  function find(int[] parent, i) {
                      if (parent[i] == -1) return i;
                      return find(parent, parent[i]);
            
                  function union(int[] parent, x, y) {
                      xset = find(parent, x);
                      yset = find(parent, y);
                      parent[xset] = yset;
                  }
## Greedy Pattern ๐ฐ ->
      โ MINIMUM # OF MEETINGS MAX OF INTERVALS NOT OVERLAPPING
      ๐ฃ Activity Selection Problem, Coin Change, Fractional Knapsack Problem, Job Sequencing Problem, Huffman Coding, Prim's Minimum Spanning Tree, Kruskal's Minimum Spanning Tree, Dijkstra's Shortest Path Algorithm, Bellman-Ford Algorithm, Floyd-Warshall Algorithm, Travelling Salesman Problem

      ๐ญ PsuendoCode Greedy Pattern ๐ฐ
        โฐ: O(nlogn) ๐ช: O(1)
  
              Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
              count = 0, end = Integer.MIN_VALUE;
              for (int[] interval : intervals) {
                  if (interval[0] >= end) {
                      count++;
                      end = interval[1];
                  }
              }
              return count;
![alt text](https://www.quizzcreator.com/img/QUIZ/quiz/60b2236b8c9666.00493324.173.2077.jpg);
## Backtracking Pattern ๐ฒ ->
      โ FIND ALL PERMUTATIONS COMBINATIONS SUBSETS PARTIONING 
      ๐ฃ N-Queens Problem, Sudoku Solver, Rat in a Maze, Knight's Tour Problem, Hamiltonian Cycle, Subset Sum Problem, Permutations, Combination Sum, Palindrome Partitioning, Word Break Problem, etc.

      ๐ญ PsuendoCode Backtracking Pattern ๐ฒ
        โฐ: O(n!) ๐ช: O(n)
  
              function backtrack(n, ArrayList<Integer> nums, List<List<Integer>> output, first) {
                  // if all integers are used up
                  if (first == n)
                      output.add(new ArrayList<Integer>(nums));
                  for (i = first; i < n; i++) {
                      // place i-th integer first 
                      // in the current permutation
                      Collections.swap(nums, first, i);
                      // use next integers to complete the permutations
                      backtrack(n, nums, output, first + 1);
                      // backtrack
                      Collections.swap(nums, first, i);
                  }
![alt text](https://ibpublicimages.s3-us-west-2.amazonaws.com/tutorial/backtracking1.png);
## Dynamic Programming Pattern ๐ ->
      โ FIND OPTIMAL SOLUTION TO COMPLEX PROBLEMS MIN MAX OR COUNT OF GIVEN CONSTRAINTS
      ๐ฃ Fibonacci Numbers, House Thief, Minimum Coin Change, House Painters, Palindromic Subsequence, Longest Common Subsequence, Longest Increasing Subsequence, Longest Common Substring, Edit Distance, 0/1 Knapsack Problem, Subset Sum Problem, Unbounded Knapsack Problem, Rod Cutting, Word Break Problem, etc.

      ๐ญ PsuendoCode Dynamic Programming Pattern ๐
        โฐ: O(n) ๐ช: O(n)
  
              int[] dp = new int[n + 1];
              dp[0] = 1;
              dp[1] = 1;
              for (i = 2; i <= n; i++)
                  dp[i] = dp[i - 1] + dp[i - 2];
              return dp[n];
![alt text](https://imgs.developpaper.com/imgs/51946-20190827144809463-5507841.png);
## ๐งฉ Bit Manipulation Pattern ๐งฉ ->
    1๏ธโฃ Bitwise XOR
      โ FIND IF NUMBER IS POWER OF 2
      ๐ฃ Power of 2, Bitwise AND of Numbers Range, etc.

      ๐ญ PsuendoCode ๐งฉ Bit Manipulation Pattern ๐งฉ
        โฐ: O(1) ๐ช: O(1)
              return (n & (n - 1)) == 0;

      โ FIND UNIQUE NUMBER IN ARRAY OF PAIRS
      ๐ฃ Single Number, Find the Missing Number, Find the Duplicate Number, Find the Corrupt Pair, etc.
    2๏ธโฃ Bitwise AND
      ๐ญ PsuendoCode Bitwise XOR Pattern ๐งฉ
        โฐ: O(n) ๐ช: O(1)
              int n = nums.length;
              for (i = 0; i < n; i++)
                  x1 = x1 ^ nums[i];
              for (i = 1; i <= n + 1; i++)
                  x2 = x2 ^ i;
              return x1 ^ x2;
    3๏ธโฃ Bitwise OR
      โ FIND IF NUMBER IS POWER OF 4
      ๐ฃ Power of 4, etc.
       ๐ญ PsuendoCode Bitwise OR Pattern ๐งฉ
        โฐ: O(1) ๐ช: O(1)
              return (n > 0) && ((n & (n - 1)) == 0) && ((n & 0xAAAAAAAA) == 0);

![alt text](https://miro.medium.com/max/620/1*CxPeaIX4QxILRzucksVCsw.png);

      4๏ธโฃ Bitwise Left Shift
        โ FIND IF NUMBER IS POWER OF 2
        ๐ฃ Power of 2, etc.
          ๐ญ PsuendoCode Bitwise Left Shift Pattern ๐งฉ
            โฐ: O(1) ๐ช: O(1)
                  return (n > 0) && ((n & (n - 1)) == 0);

![alt text](https://cdn.educba.com/academy/wp-content/uploads/2020/05/Left-Shift-Operator-in-C-01.png);
        
    5๏ธโฃ Bitwise Right Shift
      โ FIND IF NUMBER IS POWER OF 2
      ๐ฃ Power of 2, etc.
        ๐ญ PsuendoCode Bitwise Right Shift Pattern ๐งฉ
          โฐ: O(1) ๐ช: O(1)
                return (n > 0) && ((n & (n - 1)) == 0);
![alt text](https://he-s3.s3.amazonaws.com/media/uploads/5f05f51.jpg);
##  ๐ Matrix Pattern ๐ ->
      โ FIND IF MATRIX IS SINGULAR
      ๐ฃ Matrix Chain Multiplication, etc.

      ๐ญ PsuendoCode  ๐ Matrix Pattern ๐
        โฐ: O(n^3) ๐ช: O(n^2)
              int n = matrix.length;
              for (i = 0; i < n; i++) {
                  if (matrix[i][i] == 0) {
                      boolean zeroRow = true;
                      for (j = 0; j < n; j++) {
                          if (matrix[i][j] != 0) {
                              zeroRow = false;
                              break;
                          }
                      }
                      if (zeroRow) return true;
                      boolean zeroColumn = true;
                      for (j = 0; j < n; j++) {
                          if (matrix[j][i] != 0) {
                              zeroColumn = false;
                              break;
                          }
                      }
                      if (zeroColumn) return true;
                  }
              }
              return false;
![alt text](https://www.geeksforgeeks.org/wp-content/uploads/strassen_new.png);
## ๐ Trie Pattern ๐ ->
      โ FIND ALL WORDS WITH GIVEN PREFIX
      ๐ฃ Word Search, Word Break Problem, etc.

      ๐ญ PsuendoCode ๐ Trie Pattern ๐
        โฐ: O(n) ๐ช: O(n)
              TrieNode root = new TrieNode();
              for (String word : words) {
                  TrieNode node = root;
                  for (char letter : word.toCharArray()) {
                      if (node.children[letter - 'a'] == null)
                          node.children[letter - 'a'] = new TrieNode();
                      node = node.children[letter - 'a'];
                  }
                  node.word = word;
              }
              return root;
![alt text](https://miro.medium.com/max/630/1*f89l46VKjKPgnecqOw4V_w.png);


# 75 BLIND CURATED LEETCODE QUESTIONS: 
## Array
## [Two Sum](https://leetcode.com/problems/two-sum/) #1 ๐ฏ 
        โ: Given an array of integers nums & an integer target, return indices of the two numbers such that they add up to target.
        ๐ฃ: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(N^2) ๐ช: O(1)
        ๐ Solution: ๐ฏ Two Pointers  โฐ: O(NlogN) ๐ช: O(1)

        var twoSum = function(nums, target) {
            var twoSum = function(nums, target) {
            let checkSum = new Map();
            for(let i=0; i<nums.length; i++){
            var curr = nums[i];
            let diff = target-nums[i];
            if(checkSum.get(diff)){
                if(checkSum.get(diff)[0] === curr) {
                 return [checkSum.get(diff)[1], i ];
                } 
            } else {
            checkSum.set(nums[i], [diff, i]);
            }
        }
            return checkSum
        };

## [Best Time to Buy & Sell Stock](https://leetcode.com/problems/best-time-to-buy-&-sell-stock/) #121 ๐
        โ: You are given an array prices where prices[i] is the price of a given stock on the ith day.
        You want to maximize your profit by choosing a single day to buy one stock & choosing a different day in the future to sell that stock.
        Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
        ๐ฃ: Input: prices = [7,1,5,3,6,4], Output: 5, Explain: Buy on day 2 (price = 1) & sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.
 
        ๐ข Solution: ๐จ Brute Force โฐ: O(N^2) ๐ช: O(1)
        ๐ Solution:  ๐ Dynamic Programming Pattern Kadane's Algorithm โฐ: O(N) ๐ช: O(1)

        var maxProfit = function(prices) {
            let min = prices[0];
            let max = 0;
            for(let i=1; i<prices.length; i++){
                if(prices[i] < min){
                    min = prices[i];
                } else {
                    max = Math.max(max, prices[i]-min);
                }
            }
            return max;
        };

## [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) ๐ฏ 
        Problem : Given Arr [] of int. Return true if has duplicates  : 
        Parameters: Ex 1: Input: nums = [1,2,3,1] Output: true. Ex 2: Input: nums = [1,2,3,4] Output: false. 
         
        ๐ข Solution: ๐จ Brute Force โฐ: O(N^2) ๐ช: O(1)
        ๐ Solution:  ๐ฏ Two Pointers   โฐ: O(N) ๐ช: O(1)

        var containsDuplicate = function(nums) {
            let checkSum = new Map();
            for(let i=0; i<nums.length; i++){
                if(checkSum.get(nums[i])){
                    return true;
                } else {
                    checkSum.set(nums[i], 1);
                }
            }
            return false;
        };

        var containsDuplicate = function(nums) {
            return [...new Set(nums)].length !== nums.length;
        };  

## [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) #238 ๐ฏ 
        โ: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
        The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
        You must write an algorithm that runs in O(n) time & without using the division operation.
        ๐ฃ: Input: nums = [1,2,3,4], Output: [24,12,8,6]
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(N^2) ๐ช: O(1)
        ๐ Solution:  ๐ฏ Two Pointers  โฐ: O(N) ๐ช: O(1)
        
        var productExceptSelf = function(nums) {
            let result = [];
            let left = 1;
            let right = 1;
            for(let i=0; i<nums.length; i++){
                result[i] = left;
                left *= nums[i];
            }
            for(let i=nums.length-1; i>=0; i--){
                result[i] *= right;
                right *= nums[i];
            }
            return result;
        };

## [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) #53 ๐
        โ: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum & return its sum.
        ๐ฃ: Input: nums = [-2,1,-3,4,-1,2,1,-5,4], Output: 6, Explain: [4,-1,2,1] has the largest sum = 6.
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(N^2) ๐ช: O(1)
        ๐ Solution: ๐ Dynamic Programming Pattern Kadane's Algorithm โฐ: O(N) ๐ช: O(1)

        var maxSubArray = function(nums) {
            let max = nums[0];
            let curr = nums[0];
            for(let i=1; i<nums.length; i++){
                curr = Math.max(nums[i], curr+nums[i]);
                max = Math.max(max, curr);
            }
            return max;
        };

## [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) #152  ๐
        โ: Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, & return the product.
        It is guaranteed that the answer will fit in a 32-bit integer.
        A subarray is a contiguous subsequence of the array.
        ๐ฃ: Input: nums = [2,3,-2,4], Output: 6, Explain: [2,3] has the largest product 6.
       
       ๐ข Solution: ๐จ Brute Force โฐ: O(N^2) ๐ช: O(1)
       ๐ Solution: ๐ Dynamic Programming Pattern Kadane's Algorithm โฐ: O(N) ๐ช: O(1)

        var maxProduct = function(nums) {
            let max = nums[0];
            let min = nums[0];
            let result = nums[0];
            for(let i=1; i<nums.length; i++){
                let temp = max;
                max = Math.max(nums[i], Math.max(max*nums[i], min*nums[i]));
                min = Math.min(nums[i], Math.min(temp*nums[i], min*nums[i]));
                result = Math.max(result, max);
            }
            return result;
        };
## [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) #153  ๐๐
        โ: Suppose an array of length n sorted in ascending order is rotated between 1 & n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
        [4,5,6,7,0,1,2] if it was rotated 4 times.
        [0,1,2,4,5,6,7] if it was rotated 7 times.
        Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
        Given the sorted rotated array nums of unique elements, return the minimum element of this array.
        ๐ฃ: Input: nums = [3,4,5,1,2], Output: 1

        ๐ข Solution: ๐จ Brute Force  โฐ: O(N) ๐ช: O(1)
        ๐ Solution:  ๐๐  Mod Binary Search Pattern โฐ: O(logN) ๐ช: O(1)

        Pattern: ๐๐  Mod Binary Search
        var findMin = function(nums) {
            let left = 0;
            let right = nums.length-1;
            while(left < right){
                let mid = Math.floor((left+right)/2);
                if(nums[mid] > nums[right]){
                    left = mid+1;
                } else {
                    right = mid;
                }
            }
            return nums[left];
        };
## [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) #153 ๐๐ 
        โ: Suppose an array of length n sorted in ascending order is rotated between 1 & n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
        [4,5,6,7,0,1,2] if it was rotated 4 times.
        [0,1,2,4,5,6,7] if it was rotated 7 times.
        Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
        Given the sorted rotated array nums of unique elements, return the minimum element of this array.
        ๐ฃ: Input: nums = [3,4,5,1,2], Output: 1

        ๐ข Solution: ๐จ Brute Force  โฐ: O(N) ๐ช: O(1)
        ๐ Solution:  ๐๐  Mod Binary Search โฐ: O(logN) ๐ช: O(1)

        var findMin = function(nums) {
            let left = 0;
            let right = nums.length-1;
            while(left < right){
                let mid = Math.floor((left+right)/2);
                if(nums[mid] > nums[right]){
                    left = mid+1;
                } else {
                    right = mid;
                }
            }
            return nums[left];
        };
## [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) #33  ๐๐
        โ: You are given an integer array nums sorted in ascending order, & an integer target.
        Suppose that nums is rotated at some pivot unknown to you beforeh& (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
        If target is found in the array return its index, otherwise, return -1.
        ๐ฃ: Input: nums = [4,5,6,7,0,1,2], target = 0, Output: 4

          ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(1)
          ๐ Solution: ๐๐  Mod Binary Search โฐ: O(logn) ๐ช: O(1)   
          
        var search = function(nums, target) {
            let left = 0;
            let right = nums.length-1;
            while(left <= right){
                let mid = Math.floor((left+right)/2);
                if(nums[mid] === target){
                    return mid;
                } else if(nums[mid] >= nums[left]){
                    if(target >= nums[left] && target < nums[mid]){
                        right = mid-1;
                    } else {
                        left = mid+1;
                    }
                } else {
                    if(target > nums[mid] && target <= nums[right]){
                        left = mid+1;
                    } else {
                        right = mid-1;
                    }
                }
            }
            return -1;
        };
## [3Sum](https://leetcode.com/problems/3sum/) #15 ๐ฏ
        โ: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, & j != k, & nums[i] + nums[j] + nums[k] == 0.
        Notice that the solution set must not contain duplicate triplets.
        ๐ฃ: Input: nums = [-1,0,1,2,-1,-4], Output: [[-1,-1,2],[-1,0,1]]

        ๐ข Solution: ๐จ Brute Force โฐ: O(N^3)   ๐ช: O(1)
        ๐ Solution: ๐ฏ Two Pointers  โฐ: O(N^2)   ๐ช: O(N)

        var threeSum = function(nums) {
            let result = [];
            nums.sort((a,b) => a-b);
            for(let i=0; i<nums.length-2; i++){
                if(i > 0 && nums[i] === nums[i-1]) continue;
                let left = i+1;
                let right = nums.length-1;
                while(left < right){
                    let sum = nums[i] + nums[left] + nums[right];
                    if(sum === 0){
                        result.push([nums[i], nums[left], nums[right]]);
                        while(left < right && nums[left] === nums[left+1]) left++;
                        while(left < right && nums[right] === nums[right-1]) right--;
                        left++;
                        right--;
                    } else if(sum < 0){
                        left++;
                    } else {
                        right--;
                    }
                }
            }
            return result;
        };
## [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) #11 ๐ฏ 
        โ: Given n non-negative integers a1, a2, ..., an , where each represents a poat coordinate (i, ai) n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) & (i, 0) Find two lines, which, together with the x-axis forms a container, such that the container contains the most water
        Notice that you may not slant the container.
        ๐ฃ: Input: height = [1,8,6,2,5,4,8,3,7], Output: 49

        ๐ข Solution: ๐จ Brute Force โฐ: O(n^2) ๐ช: O(1)
        ๐ Solution:  ๐ฏ Two Pointers โฐ: O(n) ๐ช: O(1)

        var maxArea = function(height) {
            let left = 0;
            let right = height.length-1;
            let max = 0;
            while(left < right){
                let area = Math.min(height[left], height[right]) * (right-left);
                max = Math.max(max, area);
                if(height[left] < height[right]){
                    left++;
                } else {
                    right--;
                }
            }
            return max;
        };

---

## Binary 

## [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) ๐งฉ 
      โ: Given two integers a & b, return sum of the two integers without using the operators + & -.
      ๐ฃ: 1๏ธโฃ Input: a = 1, b = 2. Output: 3 2๏ธโฃ Input: a = 2, b = 3 Output: 5.
        
          ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(1)
          ๐ Solution: ๐งฉ Bit Manipulation โฐ: O(1)  ๐ช: O(1)

            var getSum = function(a, b) {
                let carry; // store carry 
                while(a!==0){
                    carry = a & b;
                    b = a ^ b;
                    a = carry << 1;
                }
                return b  
            };
## [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) #29 ๐งฉ 
      โ: Given two integers dividend & divisor, divide two integers without using multiplication, division, & mod operator.
      Return the quotient after dividing dividend by divisor.
      The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 & truncate(-2.7335) = -2.
      Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [โ231, 231 โ 1]. For this problem, assume that your function returns 231 โ 1 when the division result overflows.
      ๐ฃ: Input: dividend = 10, divisor = 3, Output: 3

          ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(1)
          ๐ Solution: ๐งฉ Bit Manipulation โฐ: O(logn)   ๐ช: O(logn)

          var divide = function(dividend, divisor) {
              if (dividend === 0 || divisor === 0) return 0
              let isNegative = false;
              let quotient = 0;
              if ((divisor < 0 || dividend < 0) && !(divisor < 0 && dividend < 0)) isNegative = true;
              dividend = Math.abs(dividend)
              divisor = Math.abs(divisor)
              while (dividend >= divisor) {
                  let carry = 1, tempDividend= dividend, tempDivisor = divisor
                  while (tempDivisor <= (tempDividend>> 1)){
                      carry <<= 1
                      tempDividend>>= 1
                      tempDivisor <<= 1
                  }
                  quotient += carry
                  dividend -= tempDivisor
              }
              if (isNegative) return -quotient
              if (quotient >= 2**31) {
                  return 2**31 - 1
              }
              return quotient
          };
## [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) #191 ๐งฉ 
        โ: Write a function that takes an unsigned integer & returns the number of '1' bits it has (aka Hamming weight).
        ๐ฃ: 1๏ธโฃ Input: n = 00000000000000000000000000001011 Output: 3 . N as a total of three '1' bits.2๏ธโฃ Input: n = 00000000000000000000000010000000 Output: 1 3๏ธโฃ Input: n = 11111111111111111111111111111101 Output: 31

            ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(1)
            ๐ Solution: ๐งฉ Bit Manipulation โฐ: O(1) ๐ช: O(1)

            var hammingWeight = function(n) {
                let count = 0;
                while(n!=0){
                    n = n&(n-1); //mask<<1
                    count++;
                }
                return count
            };

## [Counting Bits](https://leetcode.com/problems/counting-bits/) #338 ๐งฉ 
        โ: Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
        ๐ฃ: 1๏ธโฃ Input: n = 2 Output: [0,1,1]  Explain: 0 --> 0 1 --> 1 2 --> 10 2๏ธโฃ Input: n = 5 Output: [0,1,1,2,1,2]

            ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(1)
            ๐ Solution: ๐งฉ Bit Manipulation โฐ: O(N) ๐ช: O(1)

            var countBits = function(n) {
                let result = [0];
                for(let i = 1; i <= n; i++){
                    result.push(result[i>>1] + (i&1));
                }
                return result;
            };
            
            ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(N)
            ๐ Solution: ๐งฉ Bit Manipulation  โฐ: O(n)  ๐ช: O(n)

            const countBits = (n) => {
                const res = new Array(n);
                res[0] = 0;

                for (let i = 1; i <= n; i++) {
                    if (i % 2 === 0) res[i] = res[i / 2];
                    else res[i] = res[i - 1] + 1;
                }

                return res;
            };
## [Missing Number](https://leetcode.com/problems/missing-number/) #268 ๐งฉ
        โ: Given an [] containing n distinct numbers in the range [0, n], return the only num in the range tht missing from the []
        ๐ฃ: 1๏ธโฃ Input: nums = [3,0,1] Output: 2 Explain: n = 3 since there are 3 num, so all n are in range [0,3]. 2 is the missing num in the range it does not appear in nums. 2๏ธโฃ Input: nums = [0,1] Output: 2 3๏ธโฃ Input: nums = [9,6,4,2,3,5,7,0,1] Output: 8

            ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(N)
            ๐ Solution: ๐งฉ Bit Manipulation  โฐ: O(n)  ๐ช: O(n)

            var missingNumber = function (nums) {
              let i = 0;
              let temp = 0;
              while (i < nums.length) {
                if (nums[i] != i && nums.length > nums[i]) {
                  temp = nums[nums[i]];
                  nums[nums[i]] = nums[i];
                  nums[i] = temp;
                } else {
                  i++;
                }
              }

              for (let i = 0; i < nums.length; i++) {
                if (i != nums[i]) return i;
              }

              return nums.length;
            };

## [Reverse Bits](https://leetcode.com/problems/reverse-bits/) #190 ๐งฉ
        โ: Reverse bits of a given 32 bits unsigned integer.
        ๐ฃ: 1๏ธโฃ Input: n = 00000010100101000001111010011100 Output: 964176192 (00111001011110000010100101000000)
        Explain: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000. 2๏ธโฃ Input: n = 11111111111111111111111111111101
        Output:   3221225471 (10111111111111111111111111111111)

            ๐ข Solution: ๐จ Brute Force โฐ: O(N) ๐ช: O(1)
            ๐ Solution: ๐งฉ Bit Manipulation โฐ: O(1)  ๐ช: O(1)

            var reverseBits = function (n) {
              var len = 32;
              var arr = new Array();
              while (len > 0) {
                var t = n & 1;
                n = n >> 1;
                arr.push(t);
                len--;
              }
              var res = arr.join("");
              return parseInt(res, 2);
            };

## ๐ Dynamic Programming

## [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) #70  ๐
        โ: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
        ๐ฃ: 1๏ธโฃ Input: n = 2 Output: 2. Explain: There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps
        2๏ธโฃ Input: n = 3 Output: 3. Explain: There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step

        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n) ๐ช: O(n)

            var climbStairs = function (n) {
              if (n == 1) return 1;
              if (n == 2) return 2;
              let dp = new Array(n + 1); // ways to climb array
              dp[1] = 1;
              dp[2] = 2;
              for (let i = 3; i <= n; i++) { //Either climb 1 stair & then climb the rest i-1 stairs X ways.
                dp[i] = dp[i - 1] + dp[i - 2]; //- Or climb 2 stairs at once & then climb the rest i-2 stairs Y ways.
              }                                  //Total: X + Y ways
              return dp[n]; 
            };
## [Coin Change](https://leetcode.com/problems/coin-change/) #322 ๐
        โ: You are given an integer array coins representing coins of different denominations & an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
        ๐ฃ: 1๏ธโฃ Input: coins = [1,2,5], amount = 11 Output: 3 Explain: 11 = 5 + 5 + 1
        2๏ธโฃ Input: coins = [2], amount = 3 Output: -1
        3๏ธโฃ Input: coins = [1], amount = 0 Output: 0
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(n^amount) ๐ช: O(amount)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n^amount) ๐ช: O(n^amount)   

            var coinChange = function (coins, amount) {
              let dp = new Array(amount + 1).fill(amount + 1);
              dp[0] = 0;
              for (let i = 1; i <= amount; i++) {
                for (let j = 0; j < coins.length; j++) {
                  if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                  }
                }
              }
              return dp[amount] > amount ? -1 : dp[amount];
            };
## [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) #300  ๐
        โ: Given an integer array nums, return the length of the longest strictly increasing subsequence.
        ๐ฃ: 1๏ธโฃ Input: nums = [10,9,2,5,3,7,101,18] Output: 4 Explain: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 2๏ธโฃ Input: nums = [0,1,0,3,2,3] Output: 4 3๏ธโฃ Input: nums = [7,7,7,7,7,7,7] Output: 1

        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n^2) ๐ช: O(n^2)        

            var lengthOfLIS = function (nums) {
              let dp = new Array(nums.length).fill(1);
              let max = 1;
              for (let i = 1; i < nums.length; i++) {
                for (let j = 0; j < i; j++) {
                  if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    max = Math.max(max, dp[i]);
                  }
                }
              }
              return max;
            };

## [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) #1143  ๐
        โ: Given two strings text1 & text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
        ๐ฃ: 1๏ธโฃ Input: text1 = "abcde", text2 = "ace" Output: 3 Explain: The longest common subsequence is "ace" & its length is 3. 2๏ธโฃ Input: text1 = "abc", text2 = "abc" Output: 3 3๏ธโฃ Input: text1 = "abc", text2 = "def" Output: 0

        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(m*n) ๐ช: O(m*n)

            var longestCommonSubsequence = function (text1, text2) {
              let dp = new Array(text1.length + 1)
                .fill(0)
                .map(() => new Array(text2.length + 1).fill(0));
              for (let i = 1; i <= text1.length; i++) {
                for (let j = 1; j <= text2.length; j++) {
                  if (text1[i - 1] == text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                  } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                  }
                }
              }
              return dp[text1.length][text2.length];
            };
## [Word Break Problem](https://leetcode.com/problems/word-break/)๐
        โ: Given a string s & a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.
        ๐ฃ: 1๏ธโฃ Input: s = "leetcode", wordDict = ["leet","code"] Output: true Explain: Return true because "leetcode" can be segmented as "leet code". 2๏ธโฃ Input: s = "applepenapple", wordDict = ["apple","pen"] Output: true Explain: Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word. 3๏ธโฃ Input: s = "cats&og", wordDict = ["cats","dog","s&","&","cat"] Output: false

        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n^2) ๐ช: O(n^2)

            var wordBreak = function (s, wordDict) {
              let dp = new Array(s.length + 1).fill(false);
              dp[0] = true;
              for (let i = 1; i <= s.length; i++) {
                for (let j = 0; j < i; j++) {
                  if (dp[j] && wordDict.includes(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                  }
                }
              }
              return dp[s.length];
            };
## [Combination Sum](https://leetcode.com/problems/combination-sum-iv/) #377 ๐
        โ: Given an integer array with all positive numbers & no duplicates, find the number of possible combinations that add up to a positive integer target. 
        ๐ฃ: Input: nums = [1, 2, 3] target = 4 Output: 7 Explain: The possible combination ways are: (1, 1, 1, 1) (1, 1, 2) (1, 2, 1) (1, 3) (2, 1, 1) (2, 2) (3, 1) Note that different sequences are counted as different combinations. Therefore the output is 7.
      
        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n*target) ๐ช:  O(n*target)

            var combinationSum4 = function (nums, target) {
              let dp = new Array(target + 1).fill(0);
              dp[0] = 1;
              for (let i = 1; i <= target; i++) {
                for (let j = 0; j < nums.length; j++) {
                  if (nums[j] <= i) {
                    dp[i] += dp[i - nums[j]];
                  }
                }
              }
              return dp[target];
            };
## [House Robber](https://leetcode.com/problems/house-robber/) #198
        โ: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constrastopping you from robbing each of them is that adjacent houses have security system connected & it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
        ๐ฃ: 1๏ธโฃ Input: nums = [1,2,3,1] Output: 4 Explain: Rob house 1 (money = 1) & then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4. 2๏ธโฃ Input: nums = [2,7,9,3,1] Output: 12 Explain: Rob house 1 (money = 2), rob house 3 (money = 9) & rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n) ๐ช: O(n)

            var rob = function (nums) {
              let dp = new Array(nums.length + 1).fill(0);
              dp[0] = 0;
              dp[1] = nums[0];
              for (let i = 2; i <= nums.length; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
              }
              return dp[nums.length];
            };
## [House Robber II](https://leetcode.com/problems/house-robber-ii/) #213

        โ: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected & it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
        ๐ฃ: 1๏ธโฃ Input: nums = [2,3,2] Output: 3 Explain: You cannot rob house 1 (money = 2) & then rob house 3 (money = 2), because they are adjacent houses. 2๏ธโฃ Input: nums = [1,2,3,1] Output: 4 Explain: Rob house 1 (money = 1) & then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4. 3๏ธโฃ Input: nums = [0] Output: 0

        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n) ๐ช: O(n)

            var rob = function (nums) {
              if (nums.length == 1) return nums[0];
              return Math.max(
                robRange(nums, 0, nums.length - 2),
                robRange(nums, 1, nums.length - 1)
              );
            };
            var robRange = function (nums, start, end) {
              let dp = new Array(nums.length + 1).fill(0);
              dp[start] = nums[start];
              dp[start + 1] = Math.max(nums[start], nums[start + 1]);
              for (let i = start + 2; i <= end; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
              }
              return dp[end];
            };
## [Decode Ways](https://leetcode.com/problems/decode-ways/) #91 ๐
        โ: A message containing letters from A-Z is being encoded to numbers using the following mapping: 'A' -> 1 'B' -> 2 ... 'Z' -> 26 Given a non-empty string s containing only digits, determine the total number of ways to decode it. The answer is guaranteed to fit in a 32-bit integer.
        ๐ฃ: 1๏ธโฃ Input: s = "12" Output: 2 Explain: It could be decoded as "AB" (1 2) or "L" (12). 2๏ธโฃ Input: s = "226" Output: 3 Explain: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6). 3๏ธโฃ Input: s = "0" Output: 0 Explain: There is no character that is mapped to a number starting with 0. The only valid mappings with 0 are 'J' -> "10" & 'T' -> "20", neither of which start with 0. Hence, there are no valid ways to decode this since all digits need to be mapped. #4 Input: s = "1" Output: 1

        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization  โฐ: O(n) ๐ช: O(n)

            var numDecodings = function (s) {
              if (s[0] == "0") return 0;
              let dp = new Array(s.length + 1).fill(0);
              dp[0] = 1;
              dp[1] = 1;
              for (let i = 2; i <= s.length; i++) {
                let first = parseInt(s.substring(i - 1, i));
                let second = parseInt(s.substring(i - 2, i));
                if (first >= 1 && first <= 9) {
                  dp[i] += dp[i - 1];
                }
                if (second >= 10 && second <= 26) {
                  dp[i] += dp[i - 2];
                }
              }
              return dp[s.length];
            };
## [Unique Paths](https://leetcode.com/problems/unique-paths/) #62 ๐

        โ: A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below). The robot can only move either down or right at any poin time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?
        ๐ฃ: 1๏ธโฃ Input: m = 3, n = 7 Output: 28 2๏ธโฃ Input: m = 3, n = 2 Output: 3 Explain: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down 3๏ธโฃ Input: m = 7, n = 3 Output: 28 #4 Input: m = 3, n = 3 Output: 6

        ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Memoization โฐ: O(n) ๐ช: O(n)

            var uniquePaths = function (m, n) {
              let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
              for (let i = 0; i < m; i++) {
                dp[i][0] = 1;
              }
              for (let j = 0; j < n; j++) {
                dp[0][j] = 1;
              }
              for (let i = 1; i < m; i++) {
                for (let j = 1; j < n; j++) {
                  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
              }
              return dp[m - 1][n - 1];
            };
## [Jump Game](https://leetcode.com/problems/jump-game/) #55 ๐

        โ: Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.
        ๐ฃ: 1๏ธโฃ Input: nums = [2,3,1,1,4] Output: true Explain: Jump 1 step from index 0 to 1, then 3 steps to the last index. 2๏ธโฃ Input: nums = [3,2,1,0,4] Output: false Explain: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
        
         ๐ข Solution: ๐จ Brute Force โฐ: O(2^n) ๐ช: O(n)
        ๐ Solution:  ๐ Dynamic Programming Tabulation โฐ: O(n) ๐ช: O(n)

            var canJump = function (nums) {
              let dp = new Array(nums.length).fill(false);
              dp[0] = true;
              for (let i = 1; i < nums.length; i++) {
                for (let j = 0; j < i; j++) {
                  if (dp[j] && j + nums[j] >= i) {
                    dp[i] = true;
                    break;
                  }
                }
              }
              return dp[nums.length - 1];
            };

---
## Graph

## [Clone Graph](https://leetcode.com/problems/clone-graph/) #133 ๐ณ
       โ: Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each node in the graph contains a val (int) & a list (List[Node]) of its neighbors.
       ๐ฃ: 1๏ธโฃ Input: adjList = [[2,4],[1,3],[2,4],[1,3]] Output: [[2,4],[1,3],[2,4],[1,3]] Explain: There are 4 nodes in the graph. 2๏ธโฃ Input: adjList = [[]] Output: [[]] 3๏ธโฃ Input: adjList = [] Output: [] #4 Input: adjList = [[2],[1]] Output: [[2],[1]]

              ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
              ๐ Solution: ๐ณ BFS โฐ: O(n) ๐ช: O(n)

              var cloneGraph = function (node) {
                 if (!node) return node;
                 let map = new Map();
                 let clone = new Node(node.val, []);
                 map.set(node, clone);
                 let queue = [node];
                 while (queue.length) {
                let n = queue.shift();
                for (let neighbor of n.neighbors) {
                  if (!map.has(neighbor)) {
                     map.set(neighbor, new Node(neighbor.val, []));
                     queue.push(neighbor);
                  }
                  map.get(n).neighbors.push(map.get(neighbor));
                }
                 }
                 return clone;
              };

## [Course Schedule](https://leetcode.com/problems/course-schedule/) #207  ๐
        โ: There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1. Return true if you can finish all courses. Otherwise, return false.
        ๐ฃ: 1๏ธโฃ Input: numCourses = 2, prerequisites = [[1,0]] Output: true Explain: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible. 2๏ธโฃ Input: numCourses = 2, prerequisites = [[1,0],[0,1]] Output: false Explain: There are a total of 2 courses to take. To take course 1 you should have finished course 0, & to take course 0 you should also have finished course 1. So it is impossible.
          
          ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
          ๐ Solution:  ๐  Topological Sort  โฐ: O(V+E)   ๐ช: O(V+E) 

            var canFinish = function (numCourses, prerequisites) {
              let graph = new Map();
              let indegree = new Array(numCourses).fill(0);
              for (let [course, pre] of prerequisites) {
                if (!graph.has(pre)) graph.set(pre, []);
                graph.get(pre).push(course);
                indegree[course]++;
              }
              let queue = [];
              for (let i = 0; i < indegree.length; i++) {
                if (indegree[i] == 0) queue.push(i);
              }
              let count = 0;
              while (queue.length) {
                let course = queue.shift();
                count++;
                if (graph.has(course)) {
                  for (let next of graph.get(course)) {
                    indegree[next]--;
                    if (indegree[next] == 0) queue.push(next);
                  }
                }
              }
              return count == numCourses;
            };

## [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) #417 ๐ณ 
        โ: Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left & top edges of the matrix & the "Atlantic ocean" touches the right & bottom edges. Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower. Find the list of grid coordinates where water can flow to both the Pacific & Atlantic ocean.
        ๐ฃ: 1๏ธโฃ Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]] Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]] Explain: Pacific ~ ~ ~ ~ ~ 1 2 2 3 (5) ~ 3 2 3 (4) (4) ~ 2 4 (5) 3 1 ~ (6) (7) 1 4 5 ~ (5) 1 1 2 4 ~ ~ ~ ~ ~ Atlantic 2๏ธโฃ Input: heights = [[2,1],[1,2]] Output: [[0,0],[0,1],[1,0],[1,1]]

            ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
            ๐ Solution: ๐ณ BFS โฐ: O(n) ๐ช: O(n)

            var pacificAtlantic = function (heights) {
              let m = heights.length;
              let n = heights[0].length;
              let pacific = new Array(m).fill(0).map(() => new Array(n).fill(false));
              let atlantic = new Array(m).fill(0).map(() => new Array(n).fill(false));
              let queue = [];
              for (let i = 0; i < m; i++) {
                queue.push([i, 0]);
                pacific[i][0] = true;
              }
              for (let i = 0; i < n; i++) {
                queue.push([0, i]);
                pacific[0][i] = true;
              }
              ๐ณ BFS(heights, pacific, queue);
              queue = [];
              for (let i = 0; i < m; i++) {
                queue.push([i, n - 1]);
                atlantic[i][n - 1] = true;
              }
              for (let i = 0; i < n; i++) {
                queue.push([m - 1, i]);
                atlantic[m - 1][i] = true;
              }
              ๐ณ BFS(heights, atlantic, queue);
              let res = [];
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);
                }
              }
              return res;
            };

            function ๐ณ BFS(heights, ocean, queue) {
              let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
              while (queue.length) {
                let [i, j] = queue.shift();
                for (let dir of dirs) {
                  let x = i + dir[0];
                  let y = j + dir[1];
                  if (
                    x >= 0 &&
                    x < heights.length &&
                    y >= 0 &&
                    y < heights[0].length &&
                    !ocean[x][y]
                  ) {
                    if (heights[x][y] >= heights[i][j]) {
                      ocean[x][y] = true;
                      queue.push([x, y]);
                    }
                  }
                }
              }
            }


                
## [Number of Islands](https://leetcode.com/problems/number-of-islands/) #200 ๐ณ
        Pattern Used: ๐ณ BFS Pattern ๐ฒ DFS Pattern Union Find Pattern
        โ: Given an m x n 2d grid map of '1's (l&) & '0's (water), return the number of islands. An isl& is surrounded by water & is formed by connecting adjacent l&s horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
        ๐ฃ: 1๏ธโฃ Input: grid = [ ["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"] ] Output: 1 2๏ธโฃ Input: grid = [ ["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"] ] Output: 3
       
        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution:  ๐ณ BFS  โฐ: O(mn) ๐ช: O(mn)

            var numIslands = function (grid) {
              let m = grid.length;
              let n = grid[0].length;
              let count = 0;
              let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (grid[i][j] == "1") {
                    count++;
                    grid[i][j] = "0";
                    let queue = [[i, j]];
                    while (queue.length) {
                      let [x, y] = queue.shift();
                      for (let dir of dirs) {
                        let a = x + dir[0];
                        let b = y + dir[1];
                        if (
                          a >= 0 &&
                          a < m &&
                          b >= 0 &&
                          b < n &&
                          grid[a][b] == "1"
                        ) {
                          grid[a][b] = "0";
                          queue.push([a, b]);
                        }
                      }
                    }
                  }
                }
              }
              return count;
            };
## [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) #128  โพ 
        โ: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
        ๐ฃ: 1๏ธโฃ Input: nums = [100,4,200,1,3,2] Output: 4 Explain: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. 2๏ธโฃ Input: nums = [0,3,7,2,5,8,4,6,0,1] Output: 9

         ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
         ๐ Solution:  โพ  Union Find  โฐ: O(n) ๐ช: O(n)

            var longestConsecutive = function (nums) {
              let set = new Set(nums);
              let max = 0;
              for (let num of set) {
                if (!set.has(num - 1)) {
                  let curr = num;
                  let count = 1;
                  while (set.has(curr + 1)) {
                    curr++;
                    count++;
                  }
                  max = Math.max(max, count);
                }
              }
              return max;
            };

## Interval

## [Insert Interval](https://leetcode.com/problems/insert-interval/) #57 ๐๐ 
        โ: Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary). You may assume that the intervals were initially sorted according to their start times.
        ๐ฃ: 1๏ธโฃ Input: intervals = [[1,3],[6,9]], newInterval = [2,5] Output: [[1,5],[6,9]] 2๏ธโฃ Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8] Output: [[1,2],[3,10],[12,16]] Explain: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
        
          ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
          ๐ Solution: ๐๐  Merge Intervals  โฐ: O(n) ๐ช: O(n)
  
              var insert = function (intervals, newInterval) {
                let res = [];
                let i = 0;
                while (i < intervals.length && intervals[i][1] < newInterval[0]) {
                  res.push(intervals[i]);
                  i++;
                }
                while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
                  newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
                  newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
                  i++;
                }
                res.push(newInterval);
                while (i < intervals.length) {
                  res.push(intervals[i]);
                  i++;
                }
                return res;
              };
## [Merge Intervals](https://leetcode.com/problems/merge-intervals/) #56 ๐๐ ๐ฐ
        โ: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, & return an array of the non-overlapping intervals that cover all the intervals in the input.
        ๐ฃ: 1๏ธโฃ Input: intervals = [[1,3],[2,6],[8,10],[15,18]] Output: [[1,6],[8,10],[15,18]] Explain: Since intervals [1,3] & [2,6] overlaps, merge them into [1,6]. 2๏ธโฃ Input: intervals = [[1,4],[4,5]] Output: [[1,5]] Explain: Intervals [1,4] & [4,5] are considered overlapping.
        
          ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
          ๐ Solution: ๐๐  Merge Intervals  โฐ: O(n) ๐ช: O(n)
  
              var merge = function (intervals) {
                if (intervals.length <= 1) return intervals;
                intervals.sort((a, b) => a[0] - b[0]);
                let res = [intervals[0]];
                for (let i = 1; i < intervals.length; i++) {
                  let curr = intervals[i];
                  let prev = res[res.length - 1];
                  if (curr[0] <= prev[1]) {
                    prev[1] = Math.max(prev[1], curr[1]);
                  } else {
                    res.push(curr);
                  }
                }
                return res;
              };

## [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) #435 ๐๐
       โ: Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
        ๐ฃ: 1๏ธโฃ Input: intervals = [[1,2],[2,3],[3,4],[1,3]] Output: 1 Explain: [1,3] can be removed & the rest of the intervals are non-overlapping. 2๏ธโฃ Input: intervals = [[1,2],[1,2],[1,2]] Output: 2 Explain: You need to remove two [1,2] to make the rest of the intervals non-overlapping. 3๏ธโฃ Input: intervals = [[1,2],[2,3]] Output: 0 Explain: You don't need to remove any of the intervals since they're already non-overlapping.

          ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
          ๐ Solution:  ๐๐  Merge Intervals  โฐ: O(nlogn) ๐ช: O(1)

            var eraseOverlapIntervals = function (intervals) {
              if (intervals.length <= 1) return 0;
              intervals.sort((a, b) => a[1] - b[1]);
              let count = 0;
              let prev = intervals[0];
              for (let i = 1; i < intervals.length; i++) {
                let curr = intervals[i];
                if (curr[0] < prev[1]) {
                  count++;
                } else {
                  prev = curr;
                }
              }
              return count;
            };
---

## Linked List

## [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/) #206  ๐ฐ&๐ข 
        โ: Given the head of a singly linked list, reverse the list, & return the reversed list.
        ๐ฃ: 1๏ธโฃ Input: head = [1,2,3,4,5] Output: [5,4,3,2,1] 2๏ธโฃ Input: head = [1,2] Output: [2,1] 3๏ธโฃ Input: head = [] Output: []
        
        ๐ข Solution: ๐จ Brute Force โฐ: ๐จ Brute Force โฐ:
        ๐ Solution: ๐ฐ&๐ข Fast & Slow Pointers  โฐ: O(n) ๐ช: O(1)

            var reverseList = function (head) {
              let prev = null;
              let curr = head;
              while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
              }
              return prev;
            };
            which algorithm from ./algorithms.md is used in this solution?
           the 
## [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/) #141 ๐ฐ&๐ข 
        โ: Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked list. Otherwise, return false.
        ๐ฃ: 1๏ธโฃ Input: head = [3,2,0,-4], pos = 1 Output: true Explain: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed). 2๏ธโฃ Input: head = [1,2], pos = 0 Output: true Explain: There is a cycle in the linked list, where the tail connects to the 0th node. 3๏ธโฃ Input: head = [1], pos = -1 Output: false Explain: There is no cycle in the linked list.
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution:  ๐ฐ&๐ข Fast & Slow Pointers  โฐ: O(n) ๐ช: O(1)

            var hasCycle = function (head) {
              let slow = head;
              let fast = head;
              while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow === fast) return true;
              }
              return false;
            };
## [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) #21 ๐ฐ&๐ข 
        โ: Merge two sorted linked lists & return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
        ๐ฃ: 1๏ธโฃ Input: l1 = [1,2,4], l2 = [1,3,4] Output: [1,1,2,3,4,4] 2๏ธโฃ Input: l1 = [], l2 = [] Output: [] 3๏ธโฃ Input: l1 = [], l2 = [0] Output: [0]

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution:  ๐ฐ&๐ข  Fast & Slow Pointers  โฐ: O(n) ๐ช: O(1)

            var mergeTwoLists = function (l1, l2) {
              let dummy = new ListNode();
              let curr = dummy;
              while (l1 && l2) {
                if (l1.val < l2.val) {
                  curr.next = l1;
                  l1 = l1.next;
                } else {
                  curr.next = l2;
                  l2 = l2.next;
                }
                curr = curr.next;
              }
              if (l1) curr.next = l1;
              if (l2) curr.next = l2;
              return dummy.next;
            };
  ## [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) #23

        Pattern Used: K MERGE 
        โ: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list & return it.
        ๐ฃ: 1๏ธโฃ Input: lists = [[1,4,5],[1,3,4],[2,6]] Output: [1,1,2,3,4,4,5,6] 2๏ธโฃ Input: lists = [] Output: [] 3๏ธโฃ Input: lists = [[]] Output: []

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: Heap โฐ: O(n) ๐ช: O(n)

        import ListNode from "DataStructures/LinkedList/ListNode.js";
        import MinHeap from "DataStructures/Heaps/MinHeap.js";

            const mergeKLists = function (lists) {
              if (lists.length === 0) return null;
              let dummy = new ListNode();
              let curr = dummy;
              let minHeap = new MinHeap();
              for (let i = 0; i < lists.length; i++) {
                if (lists[i]) minHeap.insert(lists[i]);
              }
              while (minHeap.size() > 0) {
                let node = minHeap.remove();
                curr.next = node;
                curr = curr.next;
                if (node.next) minHeap.insert(node.next);
              }
              return dummy.next;
            };
## [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) #19 ๐ฐ&๐ข
        โ: Given the head of a linked list, remove the nth node from the end of the list & return its head.
        ๐ฃ: 1๏ธโฃ Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5] 2๏ธโฃ Input: head = [1], n = 1 Output: [] 3๏ธโฃ Input: head = [1,2], n = 1 Output: [1]
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฐ&๐ข Fast & Slow Pointers Fast & Slow Pointers  โฐ: O(n) ๐ช: O(1)

            var removeNthFromEnd = function (head, n) {
              let dummy = new ListNode();
              dummy.next = head;
              let slow = dummy;
              let fast = dummy;
              for (let i = 0; i < n; i++) {
                fast = fast.next;
              }
              while (fast.next) {
                slow = slow.next;
                fast = fast.next;
              }
              slow.next = slow.next.next;
              return dummy.next;
            };
## [Reorder List](https://leetcode.com/problems/reorder-list/) #143 ๐ฐ&๐ข
        โ: Given the head of a singly linked list, reorder the list to be: head -> node 2 -> node 3 -> node 4 -> ... -> node n -> null. You may not modify the values in the list's nodes. Only nodes themselves may be changed.
        ๐ฃ: 1๏ธโฃ Input: head = [1,2,3,4] Output: [1,4,2,3] 2๏ธโฃ Input: head = [1,2,3,4,5] Output: [1,5,2,4,3]

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฐ&๐ข Fast & Slow Pointers  โฐ: O(n) ๐ช: O(1)

            var reorderList = function (head) {
              if (!head) return null;
              let slow = head;
              let fast = head;
              while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
              }
              let prev = null;
              let curr = slow;
              while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
              }
              let first = head;
              let second = prev;
              while (second.next) {
                let temp = first.next;
                first.next = second;
                first = temp;
                temp = second.next;
                second.next = first;
                second = temp;
              }
            };
---

## Matrix

## [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) #73  ๐
        โ: Given an m x n matrix. If an element is 0, set its entire row & column to 0. Do it in-place.
        ๐ฃ: 1๏ธโฃ Input: matrix = [[1,1,1],[1,0,1],[1,1,1]] Output: [[1,0,1],[0,0,0],[1,0,1]] 2๏ธโฃ Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

        ๐ข Solution: ๐จ Brute Force โฐ: O(mn) ๐ช: O(m+n)
        ๐ Solution:  ๐ Matrix Pattern  โฐ: O(mn) ๐ช: O(1)

            var setZeroes = function (matrix) {
              let rows = new Set();
              let cols = new Set();
              for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                  if (matrix[i][j] === 0) {
                    rows.add(i);
                    cols.add(j);
                  }
                }
              }
              for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                  if (rows.has(i) || cols.has(j)) {
                    matrix[i][j] = 0;
                  }
                }
              }
            };

## [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) #54  ๐
        Pattern Used:  ๐ Matrix Pattern
        โ: Given an m x n matrix, return all elements of the matrix in spiral order.
        ๐ฃ: 1๏ธโฃ Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [1,2,3,6,9,8,7,4,5] 2๏ธโฃ Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] Output: [1,2,3,4,8,12,11,10,9,5,6,7]

        ๐ข Solution: ๐จ Brute Force โฐ: O(mn) ๐ช: O(mn)
        ๐ Solution:   ๐ Matrix Pattern  โฐ: O(mn) ๐ช: O(mn)

            var spiralOrder = function (matrix) {
              let result = [];
              let top = 0;
              let bottom = matrix.length - 1;
              let left = 0;
              let right = matrix[0].length - 1;
              while (top <= bottom && left <= right) {
                for (let i = left; i <= right; i++) {
                  result.push(matrix[top][i]);
                }
                top++;
                for (let i = top; i <= bottom; i++) {
                  result.push(matrix[i][right]);
                }
                right--;
                if (top <= bottom) {
                  for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                  }
                  bottom--;
                }
                if (left <= right) {
                  for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                  }
                  left++;
                }
              }
              return result;
            };
## [Rotate Image](https://leetcode.com/problems/rotate-image/) #48  ๐
        Pattern Used:  ๐ Matrix Pattern
        โ: You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
        ๐ฃ: 1๏ธโฃ Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [[7,4,1],[8,5,2],[9,6,3]] 2๏ธโฃ Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
        
        ๐ข Solution: ๐จ Brute Force โฐ: ๐จ Brute Force โฐ:
        ๐ Solution:  MatrixPattern โฐ: O(n) ๐ช: O(1)

            var rotate = function (matrix) {
              let n = matrix.length;
              for (let i = 0; i < n / 2; i++) {
                for (let j = i; j < n - i - 1; j++) {
                  let temp = matrix[i][j];
                  matrix[i][j] = matrix[n - j - 1][i];
                  matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
                  matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
                  matrix[j][n - i - 1] = temp;
                }
              }
            };
## [Word Search](https://leetcode.com/problems/word-search/) #79  ๐
        Pattern Used: Backtracking  ๐ Matrix Pattern
        โ: Given an m x n grid of characters board & a string word, return true if word exists in the grid.
        ๐ฃ: 1๏ธโฃ Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" Output: true 2๏ธโฃ Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE" Output: true 3๏ธโฃ Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB" Output: false

        ๐ข Solution: ๐จ Brute Force โฐ O(mn * 4^L) ๐ช: O(mn)
        ๐ Solution:  MatrixPattern โฐ: O(n) ๐ช: O(n)

            var exist = function (board, word) {
              let m = board.length;
              let n = board[0].length;
              let visited = new Array(m);
              for (let i = 0; i < m; i++) {
                visited[i] = new Array(n).fill(false);
              }
              let ๐ฒ DFS = (i, j, k) => {
                if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[k]) {
                  return false;
                }
                if (k === word.length - 1) {
                  return true;
                }
                visited[i][j] = true;
                let result =
                  ๐ฒ DFS(i + 1, j, k + 1) ||
                  ๐ฒ DFS(i - 1, j, k + 1) ||
                  ๐ฒ DFS(i, j + 1, k + 1) ||
                  ๐ฒ DFS(i, j - 1, k + 1);
                visited[i][j] = false;
                return result;
              };
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (๐ฒ DFS(i, j, 0)) {
                    return true;
                  }
                }
              }
              return false;
            };

---

## String


## [Valid Anagram](https://leetcode.com/problems/valid-anagram/) #242  
        โ: Given two strings s & t , write a function to determine if t is an anagram of s.
        ๐ฃ: 1๏ธโฃ Input: s = "anagram", t = "nagaram" Output: true 2๏ธโฃ Input: s = "rat", t = "car" Output: false

        ๐ข Solution: ๐จ Brute Force โฐ: O(nlogn) ๐ช: O(n)
        ๐ Solution:  Hash Table  โฐ: O(n) ๐ช: O(n)
 
            var isAnagram = function (s, t) {
              if (s.length !== t.length) {
                return false;
              }
              let map = new Map();
              for (let i = 0; i < s.length; i++) {
                map.set(s[i], (map.get(s[i]) || 0) + 1);
              }
              for (let i = 0; i < t.length; i++) {
                if (!map.has(t[i])) {
                  return false;
                }
                map.set(t[i], map.get(t[i]) - 1);
                if (map.get(t[i]) < 0) {
                  return false;
                }
              }
              return true;
            };
## [Group Anagrams](https://leetcode.com/problems/group-anagrams/) #49
        โ: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
        An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
        ๐ฃ: 1๏ธโฃ Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]] 2๏ธโฃ Input: strs = [""] Output: [[""]] 3๏ธโฃ Input: strs = ["a"] Output: [["a"]]

        ๐ข Solution: ๐จ Brute Force โฐ: O(n^2)
        ๐ Solution:  Hash Table  โฐ: O(n) ๐ช: O(n)

            var groupAnagrams = function (strs) {
              let map = new Map();
              for (let i = 0; i < strs.length; i++) {
                let sorted = strs[i].split("").sort().join("");
                if (!map.has(sorted)) {
                  map.set(sorted, []);
                }
                map.get(sorted).push(strs[i]);
              }
              return [...map.values()];
            };
## [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) #20
        Pattern Used: Stack
        โ: Given a string s containing just the characters '(', ')', '{', '}', '[' & ']', determine if the input string is valid.
        An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        ๐ฃ: 1๏ธโฃ Input: s = "()" Output: true 2๏ธโฃ Input: s = "()[]{}" Output: true 3๏ธโฃ Input: s = "(]" Output: false #4 Input: s = "([)]" Output: false #5 Input: s = "{[]}" Output: true
        
        ๐ข Solution: ๐จ Brute Force โฐ: O(n^2) ๐ช: O(n)
        ๐ Solution: Stack  โฐ: O(n) ๐ช: O(n)

            var isValid = function (s) {
              let stack = [];
              let map = new Map();
              map.set("(", ")");
              map.set("{", "}");
              map.set("[", "]");
              for (let i = 0; i < s.length; i++) {
                if (map.has(s[i])) {
                  stack.push(s[i]);
                } else {
                  if (map.get(stack.pop()) !== s[i]) {
                    return false;
                  }
                }
              }
              return stack.length === 0;
            };
## [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) #125 ๐ฏ
        โ: Given a string s, determine if it is a palindrome, considering only alphanumeric characters & ignoring cases.
        ๐ฃ: 1๏ธโฃ Input: s = "A man, a plan, a canal: Panama" Output: true Explain: "amanaplanacanalpanama" is a palindrome.
        
        ๐ข Solution: ๐จ Brute Force โฐ: 
        ๐ Solution: ๐ฏ Two Pointers โฐ: 

        var isPalindrome = function(s) {
            let cursor1 = 0;
            let cursor2 = s.length - 1;

            while (cursor1 < cursor2) {
                if (!(/^[a-zA-Z0-9]*$/.test(s[cursor1]))) {
                    cursor1++;
                    continue;
                }
                if (!(/^[a-zA-Z0-9]*$/.test(s[cursor2]))) {
                    cursor2--;
                    continue;
                }
                if (s[cursor1].toLowerCase() === s[cursor2].toLowerCase()) {
                    cursor1++;
                    cursor2--;
                    continue;
                }
                return false;
            }

            return true;
        };
            
        }
## [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) #5 ๐
        โ: Given a string s, return the longest palindromic substring in s.
        ๐ฃ: 1๏ธโฃ Input: s = "babad" Output: "bab" Note: "aba" is also a valid answer. 2๏ธโฃ Input: s = "cbbd" Output: "bb" 3๏ธโฃ Input: s = "a" Output: "a" #4 Input: s = "ac" Output: "a"

        ๐ข Solution: ๐จ Brute Force โฐ: O(n^3) ๐ช: O(1)
        ๐ Solution: ๐ Dynamic Programming โฐ: O(n^2) ๐ช: O(n^2)

            var longestPalindrome = function (s) {
              let result = "";
              for (let i = 0; i < s.length; i++) {
                let odd = exp&(s, i, i);
                let even = exp&(s, i, i + 1);
                let max = odd.length > even.length ? odd : even;
                if (max.length > result.length) {
                  result = max;
                }
              }
              return result;
            };
            function exp&(s, left, right) {
              while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
              }
              return s.substring(left + 1, right);
            }
## [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) #647  ๐ 
        โ: Given a string s, return the number of palindromic substrings in it.
        A string is a palindrome when it reads the same backward as forward.
        A substring is a contiguous sequence of characters within the string.
        ๐ฃ: 1๏ธโฃ Input: s = "abc" Output: 3 Explain: Three palindromic strings: "a", "b", "c". 2๏ธโฃ Input: s = "aaa" Output: 6 Explain: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

        ๐ข Solution: ๐จ Brute Force โฐ: O(n^3) ๐ช: O(1)
        ๐ Solution:  ๐ Dynamic Programming โฐ: O(n^2) ๐ช: O(n^2)

            var countSubstrings = function (s) {
              let count = 0;
              for (let i = 0; i < s.length; i++) {
                count += exp&(s, i, i);
                count += exp&(s, i, i + 1);
              }
              return count;
            };
            function exp&(s, left, right) {
              let count = 0;
              while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
              }
              return count;
            }

---

## Tree
## [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)๐ฒ
        โ: Given the root of a binary tree, return its maximum depth.
        A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
        ๐ฃ: 1๏ธโฃ Input: root = [3,9,20,null,null,15,7] Output: 3 2๏ธโฃ Input: root = [1,null,2] Output: 2 3๏ธโฃ Input: root = [] Output: 0 #4 Input: root = [0] Output: 1

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var maxDepth = function (root) {
              if (!root) return 0;
              return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
            };

## [Same Tree](https://leetcode.com/problems/same-tree/) #100๐ฒ
        โ: Given the roots of two binary trees p & q, write a function to check if they are the same or not.
        Two binary trees are considered the same if they are structurally identical, & the nodes have the same value.
        ๐ฃ: 1๏ธโฃ Input: p = [1,2,3], q = [1,2,3] Output: true 2๏ธโฃ Input: p = [1,2], q = [1,null,2] Output: false 3๏ธโฃ Input: p = [1,2,1], q = [1,1,2] Output: false

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var isSameTree = function (p, q) {
              if (!p && !q) return true;
              if (!p || !q) return false;
              if (p.val !== q.val) return false;
              return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
            };

## [Invert/Flip Binary Tree](https://leetcode.com/problems/invert-binary-tree/) #226๐ฒ
        โ: Invert a binary tree.
        ๐ฃ: 1๏ธโฃ Input: root = [4,2,7,1,3,6,9] Output: [4,7,2,9,6,3,1] 2๏ธโฃ Input: root = [2,1,3] Output: [2,3,1] 3๏ธโฃ Input: root = [] Output: []

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var invertTree = function (root) {
              if (!root) return null;
              let temp = root.left;
              root.left = root.right;
              root.right = temp;
              invertTree(root.left);
              invertTree(root.right);
              return root;
            };

## [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) #124
        Pattern Used: ๐ฒ DFS
        โ: Given the root of a binary tree, return the maximum path sum of any path.
        A path is a collection of nodes that are connected by edges, where no node is connected to more than two other nodes. The path must contain at least one node & does not need to go through the root.
        ๐ฃ: 1๏ธโฃ Input: root = [1,2,3] Output: 6 2๏ธโฃ Input: root = [-10,9,20,null,null,15,7] Output: 42

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var maxPathSum = function (root) {
              let max = -Infinity;
              function ๐ฒ DFS(node) {
                if (!node) return 0;
                let left = Math.max(๐ฒ DFS(node.left), 0);
                let right = Math.max(๐ฒ DFS(node.right), 0);
                max = Math.max(max, left + right + node.val);
                return Math.max(left, right) + node.val;
              }
              ๐ฒ DFS(root);
              return max;
            };
## [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) #102

        Pattern Used: ๐ณ BFS
        โ: Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
        ๐ฃ: 1๏ธโฃ Input: root = [3,9,20,null,null,15,7] Output: [[3],[9,20],[15,7]] 2๏ธโฃ Input: root = [1] Output: [[1]] 3๏ธโฃ Input: root = [] Output: []

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ณ BFS โฐ: O(n) ๐ช: O(n)

            var levelOrder = function (root) {
              let result = [];
              function ๐ฒ DFS(node, level) {
                if (!node) return;
                if (!result[level]) result[level] = [];
                result[level].push(node.val);
                ๐ฒ DFS(node.left, level + 1);
                ๐ฒ DFS(node.right, level + 1);
              }
              ๐ฒ DFS(root, 0);
              return result;
            };
## [Serialize & Deserialize Binary Tree](https://leetcode.com/problems/serialize-&-deserialize-binary-tree/) #297 ๐ณ 
        โ: Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
        Design an algorithm to serialize & deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string & this string can be deserialized to the original tree structure.
        ๐ฃ: 1๏ธโฃ Input: root = [1,2,3,null,null,4,5] Output: [1,2,3,null,null,4,5]

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ณ BFS โฐ: O(n) ๐ช: O(n)

            var serialize = function (root) {
              let result = [];
              function ๐ฒ DFS(node) {
                if (!node) {
                  result.push(null);
                  return;
                }
                result.push(node.val);
                ๐ฒ DFS(node.left);
                ๐ฒ DFS(node.right);
              }
              ๐ฒ DFS(root);
              return result;
            };
            var deserialize = function (data) {
              let index = 0;
              function ๐ฒ DFS() {
                if (index >= data.length || data[index] === null) {
                  index++;
                  return null;
                }
                let node = new TreeNode(data[index]);
                index++;
                node.left = ๐ฒ DFS();
                node.right = ๐ฒ DFS();
                return node;
              }
              return ๐ฒ DFS();
            };
## [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) #572๐ฒ
        โ: Given the roots of two binary trees root & subRoot, return true if there is a subtree of root with the same structure & node values of subRoot & false otherwise.
        A subtree of a binary tree tree is a tree that consists of a node in tree & all of this node's descendants. The tree tree could also be considered as a subtree of itself.
        ๐ฃ: 1๏ธโฃ Input: root = [3,4,5,1,2], subRoot = [4,1,2] Output: true 2๏ธโฃ Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2] Output: false

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var isSubtree = function (root, subRoot) {
              if (!root) return false;
              if (isSameTree(root, subRoot)) return true;
              return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
            };
            var isSameTree = function (p, q) {
              if (!p && !q) return true;
              if (!p || !q) return false;
              if (p.val !== q.val) return false;
              return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
            };
## [Construct Binary Tree from Preorder & Inorder Traversal](https://leetcode.com/problemsconstruct-binary-tree-from-preorder-&-inorder-traversal/) #105
        โ: Given two integer arrays preorder & inorder where preorder is the preorder traversal of a binary tree & inorder is the inorder traversal of the same tree, construct & return the binary tree.
        ๐ฃ: 1๏ธโฃ Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] Output: [3,9,20,null,null,15,7] 2๏ธโฃ Input: preorder = [-1], inorder = [-1] Output: [-1]

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)
            var buildTree = function (preorder, inorder) {
              if (!preorder.length || !inorder.length) return null;
              let root = new TreeNode(preorder[0]);
              let index = inorder.indexOf(preorder[0]);
              root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
              root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
              return root;
            };
## [Validate ๐๐  Mod Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) #98 ๐ฒ
        โ: Given the root of a binary tree, determine if it is a valid ๐๐  Mod Binary Search tree (BST).
        A valid BST is defined as follows:
        The left subtree of a node contains only nodes with keys less than the node's key.
        The right subtree of a node contains only nodes with keys greater than the node's key.
        Both the left & right subtrees must also be ๐๐  Mod Binary Search trees.
        ๐ฃ: 1๏ธโฃ Input: root = [2,1,3] Output: true 2๏ธโฃ Input: root = [5,1,4,null,null,3,6] Output: false

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var isValidBST = function (root) {
              function ๐ฒ DFS(node, min, max) {
                if (!node) return true;
                if (node.val <= min || node.val >= max) return false;
                return ๐ฒ DFS(node.left, min, node.val) && ๐ฒ DFS(node.right, node.val, max);
              }
              return ๐ฒ DFS(root, -Infinity, Infinity);
            };
## [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) #230 ๐ฒ 
        โ: Given the root of a  Binary Search tree, & an integer k, return the kth (1-indexed) smallest element in the tree.
        ๐ฃ: 1๏ธโฃ Input: root = [3,1,4,null,2], k = 1 Output: 1 2๏ธโฃ Input: root = [5,3,6,2,4,null,null,1], k = 3 Output: 3

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var kthSmallest = function (root, k) {
              let result = [];
              function ๐ฒ DFS(node) {
                if (!node) return;
                ๐ฒ DFS(node.left);
                result.push(node.val);
                ๐ฒ DFS(node.right);
              }
              ๐ฒ DFS(root);
              return result[k - 1];
            };
## [Lowest Common Ancestor of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) #235 ๐ฒ
        โ: Given a ๐๐  Mod Binary Search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
        According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p & q in a binary tree T is the lowest node that has both p & q as descendants (where we allow a node to be a descendant of itself)."
        ๐ฃ: 1๏ธโฃ Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8 Output: 6 2๏ธโฃ Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4 Output: 2

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ฒ DFS โฐ: O(n) ๐ช: O(n)

            var lowestCommonAncestor = function (root, p, q) {
              if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
              if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
              return root;
            };
## [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-Trie-prefix-tree/) #208
        โ: Implement a ๐ Trie with insert, search, & startsWith methods. 
        A ๐ Trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store & re๐ Trieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete & spellchecker. 
        Implement the ๐ Trie class: ๐ Trie() Initializes the ๐ Trie object.
        void insert(String word) Inserts the string word into the ๐ Trie.
        boolean search(String word) Returns true if the string word is in the ๐ Trie (i.e., was inserted before), & false otherwise.
        boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, & false otherwise
        ๐ฃ: 1๏ธโฃ Input: ["๐ Trie","insert","search","search","startsWith","insert","search"] Output: [null,null,true,false,true,null,true] Explain: ๐ Trie ๐ Trie = new ๐ Trie(); ๐ Trie.insert("apple"); ๐ Trie.search("apple"); // return True ๐ Trie.search("app"); // return False ๐ Trie.startsWith("app"); // return True ๐ Trie.insert("app"); ๐ Trie.search("app"); // return True

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ Trie โฐ: O(n) ๐ช: O(n)

            var ๐ Trie = function () {
              this.root = {};
            };
            ๐ Trie.prototype.insert = function (word) {
              let node = this.root;
              for (let i = 0; i < word.length; i++) {
                if (!node[word[i]]) node[word[i]] = {};
                node = node[word[i]];
              }
              node.isEnd = true;
            };
            ๐ Trie.prototype.search = function (word) {
              let node = this.root;
              for (let i = 0; i < word.length; i++) {
                if (!node[word[i]]) return false;
                node = node[word[i]];
              }
              return node.isEnd === true;
            };
            ๐ Trie.prototype.startsWith = function (prefix) {
              let node = this.root;
              for (let i = 0; i < prefix.length; i++) {
                if (!node[prefix[i]]) return false;
                node = node[prefix[i]];
              }
              return true;
            };
## [Add & Search Word](https://leetcode.com/problems/add-&-search-word-data-structure-design/) #211 ๐ 
        โ: Design a data structure that supports adding new words & finding if a string matches any previously added string.
        Implement the WordDictionary class:
        WordDictionary() Initializes the object.
        void addWord(word) Adds word to the data structure, it can be matched later.
        bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
        ๐ฃ: 1๏ธโฃ Input: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"] Output: [null,null,null,null,false,true,true,true] Explain: WordDictionary wordDictionary = new WordDictionary(); wordDictionary.addWord("bad"); wordDictionary.addWord("dad"); wordDictionary.addWord("mad"); wordDictionary.search("pad"); // return False wordDictionary.search("bad"); // return True wordDictionary.search(".ad"); // return True wordDictionary.search("b.."); // return True

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ Trie โฐ: O(n) ๐ช: O(n)

            var WordDictionary = function () {
              this.root = {};
            };
            WordDictionary.prototype.addWord = function (word) {
              let node = this.root;
              for (let i = 0; i < word.length; i++) {
                if (!node[word[i]]) node[word[i]] = {};
                node = node[word[i]];
              }
              node.isEnd = true;
            };
            WordDictionary.prototype.search = function (word) {
              let node = this.root;
              function ๐ฒ DFS(node, i) {
                if (i === word.length) return node.isEnd === true;
                if (word[i] === '.') {
                  for (let key in node) {
                    if (๐ฒ DFS(node[key], i + 1)) return true;
                  }
                } else {
                  if (!node[word[i]]) return false;
                  return ๐ฒ DFS(node[word[i]], i + 1);
                }
              }
              return ๐ฒ DFS(node, 0);
            };

## [Word Search II](https://leetcode.com/problems/word-search-ii/) #212 ๐ 
        โ: Given an m x n board of characters & a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
        ๐ฃ: 1๏ธโฃ Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"] Output: ["eat","oath"] 2๏ธโฃ Input: board = [["a","b"],["c","d"]], words = ["abcb"] Output: []

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: ๐ Trie โฐ: O(n) ๐ช: O(n)

            var findWords = function (board, words) {
              let result = [];
              let root = {};
              for (let word of words) {
                let node = root;
                for (let i = 0; i < word.length; i++) {
                  if (!node[word[i]]) node[word[i]] = {};
                  node = node[word[i]];
                }
                node.isEnd = true;
              }
              let m = board.length;
              let n = board[0].length;
              let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
              function ๐ฒ DFS(node, i, j, str) {
                if (node.isEnd) {
                  result.push(str);
                  node.isEnd = false;
                }
                if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return;
                if (!node[board[i][j]]) return;
                visited[i][j] = true;
                ๐ฒ DFS(node[board[i][j]], i + 1, j, str + board[i][j]);
                ๐ฒ DFS(node[board[i][j]], i - 1, j, str + board[i][j]);
                ๐ฒ DFS(node[board[i][j]], i, j + 1, str + board[i][j]);
                ๐ฒ DFS(node[board[i][j]], i, j - 1, str + board[i][j]);
                visited[i][j] = false;
              }
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (root[board[i][j]]) ๐ฒ DFS(root[board[i][j]], i, j, board[i][j]);
                }
                }
                return result;
            };


--- 

## Heap

## [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) #23

        Pattern Used: Heap
        โ: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list & return it.
        ๐ฃ: 1๏ธโฃ Input: lists = [[1,4,5],[1,3,4],[2,6]] Output: [1,1,2,3,4,4,5,6] 2๏ธโฃ Input: lists = [] Output: [] 3๏ธโฃ Input: lists = [[]] Output: []

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: Heap โฐ: O(n) ๐ช: O(n)


            import ListNode from "DataStructures/LinkedList/ListNode.js";
            import MinHeap from "DataStructures/Heaps/MinHeap.js";

            var mergeKLists = function (lists) {
              if (lists.length === 0) return null;
              let dummy = new ListNode();
              let curr = dummy;
              let minHeap = new MinHeap();
              for (let i = 0; i < lists.length; i++) {
                if (lists[i]) minHeap.insert(lists[i]);
              }
              while (minHeap.size() > 0) {
                let node = minHeap.remove();
                curr.next = node;
                curr = curr.next;
                if (node.next) minHeap.insert(node.next);
              }
              return dummy.next;
            };

## [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) #347 ๐

        Pattern Used: K TOP ๐
        โ: Given an integer array nums & an integer k, return the k most frequent elements. You may return the answer in any order.
        ๐ฃ: 1๏ธโฃ Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2] 2๏ธโฃ Input: nums = [1], k = 1 Output: [1]

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: Heap โฐ: O(n) ๐ช: O(n)

            import MinHeap from './DataStructures/Heap/MinHeap.js';

            function findLargestKNum(nums, k) {
                const minHeap = new MinHeap();
                for (i = 0; i < k; i++) {
                    minHeap.push(nums[i]);
                }
                for (i = k; i < nums.length; i++) {
                    if (nums[i] > minHeap.peek()) {
                        minHeap.pop();
                        minHeap.push(nums[i]);
                    }
                }

                return minHeap.toArray();
            }

## [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) #295

        Pattern Used: Heap
        โ: Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value & the median is the mean of the two middle values. For example, for arr = [2,3,4], the median is 3. For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5. Implement the MedianFinder class: MedianFinder() initializes the MedianFinder object. void addNum(num) adds the integer num from the data stream to the data structure. double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
        ๐ฃ: 1๏ธโฃ Input: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"] [[], [1], [2], [], [3], []] Output: [null, null, null, 1.5, null, 2.0] 2๏ธโฃ Input: ["MedianFinder", "addNum", "findMedian", "addNum", "findMedian"] [[], [2], [], [3], []] Output: [null, null, 2.0, null, 2.5

        ๐ข Solution: ๐จ Brute Force โฐ: O(n) ๐ช: O(n)
        ๐ Solution: Heap โฐ: O(n) ๐ช: O(n)

            var MedianFinder = function () {
            this.minHeap = new MinHeap();
            this.maxHeap = new MaxHeap();
            };
            MedianFinder.prototype.addNum = function (num) {
            if (this.minHeap.size() === 0 || num > this.minHeap.peek()) {
                this.minHeap.insert(num);
            } else {
                this.maxHeap.insert(num);
            }
            if (this.minHeap.size() - this.maxHeap.size() > 1) {
                this.maxHeap.insert(this.minHeap.extract());
            } else if (this.maxHeap.size() - this.minHeap.size() > 1) {
                this.minHeap.insert(this.maxHeap.extract());
            }
            };
            MedianFinder.prototype.findMedian = function () {
            if (this.minHeap.size() === this.maxHeap.size()) {
                return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
            } else if (this.minHeap.size() > this.maxHeap.size()) {
                return this.minHeap.peek();
            } else {
                return this.maxHeap.peek();
            }
            };
            class MinHeap {
            constructor() {
                this.heap = [];
            }
            size() {
                return this.heap.length;
            }
            peek() {
                return this.heap[0];
            }
            insert(val) {
                this.heap.push(val);
                this.bubbleUp();
            }
            bubbleUp() {
                let idx = this.heap.length - 1;
                while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[parentIdx] > this.heap[idx]) {
                    [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                    ];
                    idx = parentIdx;
                } else {
                    break;
                }
                }
            }
            extract() {
                let min = this.heap[0];
                let end = this.heap.pop();
                if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown();
                }
                return min;
            }
            sinkDown() {
                let idx = 0;
                let length = this.heap.length;
                let element = this.heap[0];
                while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;
                if (leftChildIdx < length) {
                    leftChild = this.heap[leftChildIdx];
                    if (leftChild < element) {
                    swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.heap[rightChildIdx];
                    if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild) ) {
                    swap = rightChildIdx;
                    }
                }
                if (swap === null) break;
                this.heap[idx] = this.heap[swap];
                this.heap[swap] = element;
                idx = swap;
                }
            }
            }
            class MaxHeap {
            constructor() {
                this.heap = [];
            }
            size() {
                return this.heap.length;
            }
            peek() {
                return this.heap[0];
            }
            insert(val) {
                this.heap.push(val);
                this.bubbleUp();
            }
            bubbleUp() {
                let idx = this.heap.length - 1;
                while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[parentIdx] < this.heap[idx]) {
                    [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                    ];
                    idx = parentIdx;
                } else {
                    break;
                }
                }
            }
            extract() {
                let max = this.heap[0];
                let end = this.heap.pop();
                if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown();
                }
                return max;
            }
            sinkDown() {
                let idx = 0;
                let length = this.heap.length;
                let element = this.heap[0];
                while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;
                if (leftChildIdx < length) {
                    leftChild = this.heap[leftChildIdx];
                    if (leftChild > element) {
                    swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.heap[rightChildIdx];
                    if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild) ) {
                    swap = rightChildIdx;
                    }
                }
                if (swap === null) break;
                this.heap[idx] = this.heap[swap];
                this.heap[swap] = element;
                idx = swap;
                }
            }
            }

## Leetcode Sorting โs:
        912. Sort an Array
        922. Sort Array By Parity II
        973. K Closest Points to Origin
        977. Squares of a Sorted Array
        1470. Shuffle the Array
        1480. Running Sum of 1d Array
        1512. Number of Good Pairs
        1672. Richest Customer Wealth
        1678. Goal Parser Interpretation
        1720. Decode XORed Array
        1721. Swapping Nodes in a Linked List
        1742. Maximum Number of Balls in a Box
        1773. Count Items Matching a Rule
        1812. Determine Color of a Chessboard Square
        1822. Sign of the Product of an Array
        1828. Queries on Number of Points Inside a Circle
        1832. Check if the Sentence Is Pangram
        1846. Maximum Element After Decreasing & Rearranging
        1854. Maximum Population Year
        1869. Longer Contiguous Segments of Ones than Zeros
        1877. Minimize Maximum Pair Sum in Array
        1880. Check if Word Equals Summation of Two Words
        1886. Determine Whether Matrix Can Be Obtained By Rotation
        1893. Check if All the Integers in a Range Are Covered
        1894. Find the Student that Will Replace the Chalk
        1898. Maximum Number of Removable Characters
        1903. Largest Odd Number in String
        1909. Remove One Element to Make the Array Strictly Increasing
        1913. Maximum Product Difference Between Two Pairs
        1917. Maximum Alternating Subsequence Sum
        1920. Build Array from Permutation
        1921. Eliminate Maximum Number of Monsters



## FLOW CHARTโ

    1. What is the input?
    2. What is the output?
    3. What is the constraint?
    4. What is the edge case?
    5. What is the ๐จ Brute Force solution?
    6. What is the optimal solution?
    7. What is the โฐ of the ๐จ Brute Force solution?
    8. What is the โฐ of the optimal solution?
    9. What is the ๐ช of the ๐จ Brute Force solution?
    10. What is the ๐ช of the optimal solution?
    11. What is the data structure to use?
    12. What is the algorithm to use?


## 14 Patterns: 
 ## 1. ๐ช Sliding Window : 
[Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) \
[Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) \
[Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)
[Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) \
[Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) \
[Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) \
[Permutation in String](https://leetcode.com/problems/permutation-in-string/) \
[Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) \
[Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) \
[Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) \
[Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) \
[Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) \
[Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/) \
[Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) \
   
## 2. ๐ฏ Two Pointers : 
[Two Sum](https://leetcode.com/problems/two-sum/) \
[3Sum](https://leetcode.com/problems/3sum/) \
[3Sum Smaller](https://leetcode.com/problems/3sum-smaller/) \
[4Sum](https://leetcode.com/problems/4sum/) \
[4Sum II](https://leetcode.com/problems/4sum-ii/) \
[Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) \
[Two Sum III - Data structure design](https://leetcode.com/problems/two-sum-iii-data-structure-design/) \
[Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) \
[Two Sum Less Than K](https://leetcode.com/problems/two-sum-less-than-k/) \
 [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) \
 [Remove Element](https://leetcode.com/problems/remove-element/) \
 [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) \
 [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) \
 [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) \
 [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) \
 [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) \
 [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) \
 [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) \
 [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) \
 [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) \
 [Partition List](https://leetcode.com/problems/partition-list/) \
 [Sort List](https://leetcode.com/problems/sort-list/) \

## 3. Fast & Slow Pointers Pattern: 
[Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) \
[Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) \
[Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) \
[Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) \
[Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) \
[Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) \
[Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) \
[Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) \
[Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) \
[Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) \
[Sort List](https://leetcode.com/problems/sort-list/) \
[Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) \
[Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) \
[Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) \
[Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) \
[Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) \
[Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) \
[Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) \
[Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) \
[Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) \
[Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) \
[Sort List](https://leetcode.com/problems/sort-list/) \
## 4. Merge Intervals Pattern:
[Merge Intervals](https://leetcode.com/problems/merge-intervals/) \
[Insert Interval](https://leetcode.com/problems/insert-interval/) \
[Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) \
[Meeting Rooms](https://leetcode.com/problems/meeting-rooms/) \
[Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) \
[Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) \
[Range Module](https://leetcode.com/problems/range-module/) \
[Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/) \
[Insert Delete GetR&om O(1)](https://leetcode.com/problems/insert-delete-getr&om-o1/) \
[Insert Delete GetR&om O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getr&om-o1-duplicates-allowed/) \
[Data Stream as DisjoIntervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) \
[Summary Ranges](https://leetcode.com/problems/summary-ranges/) \
[Summary Ranges II](https://leetcode.com/problems/summary-ranges-ii/) \
[Employee Free Time](https://leetcode.com/problems/employee-free-time/) \
[Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) \
[Range Module](https://leetcode.com/problems/range-module/) \
[Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/) \
[Insert Delete GetR&om O(1)](https://leetcode.com/problems/insert-delete-getr&om-o1/) \
[Insert Delete GetR&om O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getr&om-o1-duplicates-allowed/) \
[Data Stream as DisjoIntervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) \
[Summary Ranges](https://leetcode.com/problems/summary-ranges)\
## 5. ๐ Cyclic Sort Pattern:
[Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) \
[Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) \
[Find the Missing Number](https://leetcode.com/problems/find-the-missing-number/) \
[Find the Smallest Missing Positive Number](https://leetcode.com/problems/find-the-smallest-missing-positive-number/) \
[Find the Corrupt Pair](https://leetcode.com/problems/find-the-corrupt-pair/) \
[Find All Missing Numbers](https://leetcode.com/problems/find-all-missing-numbers/) \
[Find the First K Missing Positive Numbers](https://leetcode.com/problems/find-the-first-k-missing-positive-numbers/) \
[Find the First Missing Positive Number](https://leetcode.com/problems/find-the-first-missing-positive-number/) \
[Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) \
 [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) \
 [Find the Missing Number](https://leetcode.com/problems/find-the-missing-number/) \
 [Find the Smallest Missing Positive Number](https://leetcode.com/problems/find-the-smallest-missing-positive-number/) \
 [Find the Corrupt Pair](https://leetcode.com/problems/find-the-corrupt-pair/) \
 [Find All Missing Numbers](https://leetcode.com/problems/find-all-missing-numbers/) \
 [Find the First K Missing Positive Numbers](https://leetcode.com/problems/find-the-first-k-missing-positive-numbers/) \
 [Find the First Missing Positive Number](https://leetcode.com/problems/find-the-first-missing-positive-number/) \
## 6. In-place Reversal of a LinkedList Pattern:
[Reverse a Sub-list](https://leetcode.com/problems/reverse-linked-list-ii/) \
[Reverse every K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/) \
[Reverse Alternating K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/) \
[Reverse a Sub-list](https://leetcode.com/problems/reverse-linked-list-ii/) \
[Reverse every K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/) \
[Reverse Alternating K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/) \
## 7. Tree Breadth First Search Pattern:
[Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) \
[Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) \
[Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/) \
[Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) \
[Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) \
[Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/) \
## 8. Tree Depth First Search Pattern:
[Binary Tree Path Sum](https://leetcode.com/problems/path-sum/) \
[All Paths for a Sum](https://leetcode.com/problems/path-sum-ii/) \
[Sum of Path Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) \
[Path With Given Sequence](https://leetcode.com/problems/path-sum-iii/) \
[Count Paths for a Sum](https://leetcode.com/problems/path-sum-iv/) \
[Binary Tree Path Sum](https://leetcode.com/problems/path-sum/) \
[All Paths for a Sum](https://leetcode.com/problems/path-sum-ii/) \
[Sum of Path Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) \
[Path With Given Sequence](https://leetcode.com/problems/path-sum-iii/) \
[Count Paths for a Sum](https://leetcode.com/problems/path-sum-iv/) \
## 9. Two Heaps Pattern:
[Find the Median of a Number Stream](https://leetcode.com/problems/find-median-from-data-stream/) \
[Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) \
[Find the Median of a Number Stream](https://leetcode.com/problems/find-median-from-data-stream/) \
[Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) \
## 10. Subsets Pattern:
[Subsets](https://leetcode.com/problems/subsets/) \
[Subsets With Duplicates](https://leetcode.com/problems/subsets-ii/) \
[Permutations](https://leetcode.com/problems/permutations/) \
[Permutations With Duplicates](https://leetcode.com/problems/permutations-ii/) \
[String Permutations by changing case](https://leetcode.com/problems/letter-case-permutation/) \
[Balanced Parentheses](https://leetcode.com/problems/generate-parentheses/) \
[Unique Generalized Abbreviations](https://leetcode.com/problems/generalized-abbreviation/) \
[Subsets](https://leetcode.com/problems/subsets/) \
[Subsets With Duplicates](https://leetcode.com/problems/subsets-ii/) \
 [Permutations](https://leetcode.com/problems/permutations/) \
 [Permutations With Duplicates](https://leetcode.com/problems/permutations-ii/) \
 [String Permutations by changing case](https://leetcode.com/problems/letter-case-permutation/) \
 [Balanced Parentheses](https://leetcode.com/problems/generate-parentheses/) \
 [Unique Generalized Abbreviations](https://leetcode.com/problems/generalized-abbreviation/) \
## 11. Modified ๐๐  Mod Binary Search Pattern:
[Order-agnostic ๐๐  Mod Binary Search](https://leetcode.com/problems/binary-search/) \
[Ceiling of a Number](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) \
[Next Letter](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) \
[Number Range](https://leetcode.com/problems/find-first-&-last-position-of-element-in-sorted-array/) \
[Search in a Sorted Infinite Array](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/) \
[Minimum Difference Element](https://leetcode.com/problems/find-k-closest-elements/) \
[Bitonic Array Maximum](https://leetcode.com/problems/find-peak-element/) \
[Order-agnostic ๐๐  Mod Binary Search](https://leetcode.com/problems/binary-search/) \
[Ceiling of a Number](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) \
 [Next Letter](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) \
 [Number Range](https://leetcode.com/problems/find-first-&-last-position-of-element-in-sorted-array/) \
 [Search in a Sorted Infinite Array](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/) \
 [Minimum Difference Element](https://leetcode.com/problems/find-k-closest-elements/) \
 [Bitonic Array Maximum](https://leetcode.com/problems/find-peak-element/) \
# 12. K TOP Pattern:
[Kth Smallest Number](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) \
[Kth Largest Number](https://leetcode.com/problems/kth-largest-element-in-an-array/) \
[Connect Ropes](https://leetcode.com/problems/minimum-cost-to-connect-sticks/) \
[Top 'K' Frequent Numbers](https://leetcode.com/problems/top-k-frequent-elements/) \
[K Closest Points to the Origin](https://leetcode.com/problems/k-closest-points-to-origin/) \
[Kth Smallest Number](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) \
[Kth Largest Number](https://leetcode.com/problems/kth-largest-element-in-an-array/) \
[Connect Ropes](https://leetcode.com/problems/minimum-cost-to-connect-sticks/) \
[Top 'K' Frequent Numbers](https://leetcode.com/problems/top-k-frequent-elements/) \
 [K Closest Points to the Origin](https://leetcode.com/problems/k-closest-points-to-origin/) \
## 13.K MERGE Pattern:
[Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) \
[Kth Smallest Number in M Sorted Lists](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) \
[Kth Smallest Number in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) \
[Smallest Number Range](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) \
[Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) \
[Kth Smallest Number in M Sorted Lists](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) \
[Kth Smallest Number in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) \
[Smallest Number Range](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) \
## 14.  ๐  Topological Sort Pattern:
[Tasks Scheduling](https://leetcode.com/problems/course-schedule/) \
[Tasks Scheduling Order](https://leetcode.com/problems/course-schedule-ii/) \
[All Tasks Scheduling Orders](https://leetcode.com/problems/course-schedule-ii/) \
[Tasks Scheduling](https://leetcode.com/problems/course-schedule/) \
[Tasks Scheduling Order](https://leetcode.com/problems/course-schedule-ii/) \
[All Tasks Scheduling Orders](https://leetcode.com/problems/course-schedule-ii/) \
##  15. 0/1 Knapsack Pattern:
[Equal Subset Sum Partition](https://leetcode.com/problems/partition-equal-subset-sum/) \
[Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) \
[Minimum Subset Sum Difference](https://leetcode.com/problems/partition-equal-subset-sum/) \
[Count of Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) \
[Minimum Subset Sum Difference](https://leetcode.com/problems/partition-equal-subset-sum/) \
[Count of Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) \
## 16. ๐งฉ Bit Manipulation Pattern:
[Single Number](https://leetcode.com/problems/single-number/) \
[Find the Corrupt Pair](https://leetcode.com/problems/set-mismatch/) \
[Complement of Base 10 Number](https://leetcode.com/problems/complement-of-base-10-integer/) \
[Bitwise & of Numbers Range](https://leetcode.com/problems/bitwise-&-of-numbers-range/) \
[Single Number](https://leetcode.com/problems/single-number/) \
[Find the Corrupt Pair](https://leetcode.com/problems/set-mismatch/) \
[Complement of Base 10 Number](https://leetcode.com/problems/complement-of-base-10-integer/) \
[Bitwise & of Numbers Range](https://leetcode.com/problems/bitwise-&-of-numbers-range/) \


     
