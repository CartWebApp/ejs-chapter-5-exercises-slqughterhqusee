// Your code here.

function loop(start, until, step, action){
    if (until(start) === false){
        return;
    }

    action(start);

    return(loop(step(start), until, step,action));
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1