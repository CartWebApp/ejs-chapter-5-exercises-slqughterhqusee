// Your code here.

function loop(start, until, step, action){
    for(i=start; until; step){
        return i;
    }
    action(i);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1