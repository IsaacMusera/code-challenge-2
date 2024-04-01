// printing the numbers between -5 and 3
console.log(numberbetweengenerator(-5, 3)); 
// fuction that returns the number between two numbers
function numberbetweengenerator(start, end) {
    
    let result = [];
    const step = start < end ? 1 : -1;
  
    for (let i = start; i !== end + step; i += step) {
      
      result.push(i);
    }
  
    // Return the output
    return result;
  }
  
  