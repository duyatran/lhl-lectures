# M09W24 - Advanced Topic - "Fun with Trees"

- "Given a bunch of data, how do we find a particular item?"
  - Not a very well-specified, let's  try to be a bit more specific

- "Given a list of sorted integers, how do we find a particular one?"
  - Binary search
    - [Visualization](https://www.cs.usfca.edu/~galles/visualization/Search.html)
    - [Code](https://leetcode.com/problems/binary-search/description/)

- We often assume that data fits inside main memory (RAM)
  - Lines of code are executed by CPUs. CPUs fetch data they need from disk to memory to CPU cache and work on them.
  - [Memory hierarchy](https://diveintosystems.org/book/C11-MemHierarchy/mem_hierarchy.html)
  - Memory (8-64GB) is fast but small and temporary; disk (250GB-8TB) is large and durable, but slow.
  - How fast/slow? [1000x difference](https://gist.github.com/hellerbarde/2843375)
  - It's better if we keep useful data in memory.

- "Given a large amount of unsorted integers that do not all fit into memory, how do we find a particular one?"
  - What if we can't or don't want to fit all of the array into our memory? (128 KB RAM in 1980s)
  - Assume the extreme case, we have just enough RAM to keep track of a few elements at a time
  - Intuition: just keep track of the "mid" value (in the binary search algorithm, ``nums[mid]` is the deciding factor in all branches)
  - Binary search tree (BST)
    - [Visualization](https://www.cs.usfca.edu/~galles/visualization/BST.html)
    - [Code](https://leetcode.com/problems/search-in-a-binary-search-tree/)


- Let's be more realistic. Typically, one integer is 4 bytes, one disk page (the **minimum** amount of data we can get per request to disks) is typically 4 KB (4000 bytes), so we can basically load a minimum of 1000 integers every load
  - What if one BST node contains many keys? (Side note: how do we organize keys in one node? Sorted for fast binary search inside of a node!)
  - Same thing as [index tabs on dictionaries](
  https://upload.wikimedia.org/wikipedia/commons/2/2a/Index_tab_on_dictionaries.png). Imagine the entire dictionary as a node.
  - For each "tab" in a node, what if we use the same principle in BST:
    - left pointer for smaller values, right pointer for larger values
  - [Visualization](https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html)

- Typical capacities of B+Trees (with typical real-world configuration and assumptions)
  - Height 3: 2,352,637 records
  - Height 4: 312,900,700 records

- Trees are nice and B+Trees are awesome!