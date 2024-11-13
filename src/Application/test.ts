let array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
let x = array.find(item => item.id === 1);

// Modifying `x`
if(x)
x.name = 'Alex';

// Now `array[0].name` will also be 'Alex' because `x` is a reference.
console.log(array); 
// Output: [ { id: 1, name: 'Alex' }, { id: 2, name: 'Bob' } ]
