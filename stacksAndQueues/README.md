# Stacks and Queues
Implement a Stack and a Queue Data Structure

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node

Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node.
* Define a method called peek that does not take an argument and returns the node located on the top of the stack.

Create a Queue class that has a top property. It creates an empty queue when instantiated.
* This object should be aware of a default empty value assigned to front when the queue is created.
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node.
* Define a method called peek that does not take an argument and returns the node located in the front of the stack.
* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
* Be sure to follow your languages best practices for naming conventions.

## Approach & Efficiency
I used the linked list Class and node Class that I had previously defined in an earlier lab as my storage units. I had to manipulate those Classes slightly to keep track of the tail so I could update the "top" of the stacks (which I equated to the tail of the linked list). The meat of each function is located in the linked list file and I basically just call the appropriate linked list function in the stack/queue file and then set either the top or front, depending.

## API
#### Stacks
Push(): Has an airty of one (the value that you want to push into the function) and will return the entire linked list/stack with that new value added as the new top value. The Big 0 for this function is 0(n). 

Pop(): Does not take in any parameters but will remove the current top of the stack and return the popped value. The Big 0 for this function is 0(n). 

Peek(): Does not take in any parameters but will show you the current top of the stack and return that value. The Big 0 for this function is 0(n).

#### Queues
Enqueue(): Has an airty of one (the value that you want to push into the function) and will return the entire linked list/queue with that new value added to the front. The Big 0 for this function is 0(n). 

Dequeue(): Does not take in any parameters but will remove the current front of the queue and return the dequeued value. The Big 0 for this function is 0(n). 

Peek(): Does not take in any parameters but will show you the current front of the queue and return that value. The Big 0 for this function is 0(n).

## Collaboration
Kevin was a huge help in explaining how to use our linked lists as the storage model. He helped me out with the push and pop functions in the stacks Class. 
