# lightmemo

LightMemo - is a set of tools to improve perfomanse of your JavaScript application by memoization.

Memoization - is storing the results of expensive function calls and returning the cached result when the same inputs occur again.

###### **How to use?**

```
  import { memoize } from 'lightmemo';
  
  
  const powFunc = (arr, val) => arr.map(e => e ** val);
  
  const powMemoized = memoize(powFunc);
  
  
  const mockArr = [1, 2, 3];
  
  
  const memoizedArray = powMemoized(mockArr, 2);
  
  
  console.log(memoizedArray); // [1, 4, 9];
```


###### **What it does for you?**

In example above we wrote powFunc, that does some logic, but as you may know, executing Array.prototype.map creates new array. But powMemoized takes that as a argument and stores result of exectuting and return it when powMemoized calls again with no arguments changed. Let see it in example:

```
  import { memoize } from 'lightmemo';
  
  
  const powFunc = (arr) => arr.map(e => e ** 2);
  
  const powMemoized = memoize(powFunc);
  
  
  const mockArr1 = [1, 2, 3];
  
  const mockArr2 = [2, 4, 6];
 
 
  console.log(powFunc(mockArr1) === powFunc(mockArr1)); // false;
  
  console.log(powMemoized(mockArr1) === powMemoized(mockArr1)); // true;
  
  console.log(powMemoized(mockArr1) === powMemoized(mockArr2));  // false
  
  
  console.log(powMemoized(mockArr1)) // [1, 4, 9]
  
  console.log(powMemoized(mockArr2)) // [4, 16, 81]
  
```

As you see, if powMemoized takes agruments that didn't change it returns previous result. **AND WHAT'S MORE IMPORTANT: it doesn't execute powFunc at all**, that means you don't execute expensive code if result will be same.

