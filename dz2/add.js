const arr = ['milk', 'beer', 'beer', 'milk', 'milk'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'milk') {
        console.log('good');
    } else if (arr[i] === 'beer') {
        console.log('bad');
    }
}