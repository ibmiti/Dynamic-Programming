function addTo80(n){
    console.log('long time');
    return n + 80;
}

addTo80(5);
// doing the above every time without caching could potentially take a long time, next example will be that of caching


function memoizedAddTo80(n){
    let cache = {}; 
    // enclose the logic below to keep the cache out of global sccope while not resetting cache on each function call
    return function(n){
        if (n in cache){
            return cache[n]
        } else {
            console.log('long time');
            cache[n] = 5 + 80;
            return cache[n]
        }
    }    
}

const memoized = memoizedAddTo80();

memoizedAddTo80(5);
memoizedAddTo80(5);

// avoiding the global scope 

let calculation = 0;
function fibonacci(n){
    calculation++;
    if (n < 2){
        return 2;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}