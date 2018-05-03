function triangle (n) {
    const result = [1];
    if (n > 0) {
      const arr = triangle(n - 1);
      for(let i = 0; i < n - 1; i++) {
        result.push(arr[i] + arr[i + 1]);
      }
      result.push(1);
    }
    return result
}


function pyramid (n){
    if(n === 0) return {'0': [1]};
    const arr = triangle (n);
    const obj = pyramid(n - 1);
    const result = {};
   
    for(let i = 1; i < n ; i++){
      result [i] = [arr[i]];
      for(let j = 1; j < obj[i].length; j++) {
        result[i].push(obj[i][j-1] + obj[i-1][j] + obj[i][j]); // find right indices
      }
      result[i].push(arr[i]);
    }
    result[0] = arr
    result[n] = [1];
    return result;
  }


module.exports = {triangle, pyramid}