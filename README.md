# Nodejs_Project

Node js project
Synchronous ---- Blocking
single-thread for node.

Asynchronous ---- Non-Blocking
So use callback functions to excute features once the data is available(for instance, reading a very large file).
following tasks can be excuted in the same thread and will not be blocked.

so nodejs can handle asynchronous behaviour to implement non-blocking I/O model.
-that is why use so many callback functions in Node.js
-callbacks does not make it automatically asynchoronous.
--** We can use ES6 Promises or ES8 Async/Await to solve callback hells**--

\*Errow function does not get its own dis keyword
