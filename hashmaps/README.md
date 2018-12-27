# Hashtables

## Challenge
Implement a Hashtable with the following capabilities.

* A method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
* A method/function named Find that takes in the key and returns the value from key/value pair.
* A method/function named contains that takes in the key and returns if the key exists in the table already.
* A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

## Approach & Efficiency
The Big 0 in each method is 0(1) UNLESS there are conficts and there are more than 1 linked list per bucket. If that is the case, then the Big 0 is 0(n).

## API

#### hash(key)
<-- key
--> idx (an index number)

#### add(key, value)
<-- key, value
--> hash (the index number)

#### find(key)
<-- key
--> value (the value that corresponds to the key that was passed through the function) OR a message saying that there is no value matching the current given key. 

#### contains(key)
<-- key
--> boolean - true if the key exists in the hashmap OR a false if the key does not exist in the hashmap.

#### getHash(key)
<-- key
--> hash (if it exists) OR a message saying that there is no matching key in the map.
