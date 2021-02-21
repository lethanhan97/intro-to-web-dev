# Recursion

Recursion is when you are defining something in terms of itself. In CS, it is a function that calls itself

Recursive can make the code very simple and readable for some problems. However, it adds another call to the stack.

Always favour readability > performance. If performance is heavily compromised by recursion, change it to iterative instead

Don't be clever unless you have to be

For a recursive method, think about

1. Base case. This is a stop condition for the method. Be aggressive with this
2. Operation. Think about recursive functions as that problem can be solved using the subset of that problem