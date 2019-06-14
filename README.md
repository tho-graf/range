# Range Generator

This library doesn't use an intermediate array and instead returns directly a generator.

```javascript
for (let i of range(0, 10)) {
  console.log(i);
}

[...range(0, 10)].forEach(x => console.log(x));

// up to x
range(0, 3); // 0, 1, 2

// up to x with step
range(0, 5, 2); // 0, 2, 4

// negative up to postive
range(-2, 2); // -2, -1, 0, 1

// down to x
range(3, 0, -1); // 3, 2, 1

// down to x with step
range(5, 0, -2); // 5, 3, 1

// from 0 to x
range(3); // 0, 1, 2
```
