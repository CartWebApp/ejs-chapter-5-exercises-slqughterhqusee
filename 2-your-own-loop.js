// Your code here.

function loop(start, until, step, action){
    if (until === false){
        return;
    }

    action(start);

    
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1