// times function with var
for(var i = 0; i < 5; i++){     // 5
    setTimeout(()=>{            // 5  
        console.log(i);        // 5
    }, 1000)                    // 5    
}                               // 5

// times function with let
for(let i = 0; i < 5; i++){        // 0
    setTimeout(()=>{               // 1
        console.log(i);            // 2
    }, 1000)                       // 3
}                                  // 4