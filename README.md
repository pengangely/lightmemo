# lightmemo

LightMemo - is a set of tools to improve perfomanse of your JavaScript application by memoization.

Memoization - is storing the results of expensive function calls and returning the cached result when the same inputs occur again.

##When to use?

1) Consider situation, when you want to execute expensice part of code. for example you have array of 1.000.000 elements and you want to power it to 2
`
  const mockArr = Array(1000000).fill(0).map((_, i) => i);
  function powArray(arr) {
    return arr.map(e => e**2);
  };
`
And probably you want to know result 10 different places. Then your machine would have to execute this function 10 times. In other case you can't just store result and send it because of difficulty.

to be continued..
