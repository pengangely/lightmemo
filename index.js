// types p, a === arr; be sure that length of arguments is not changing
export const compareRule = (p, c) => p.some((e, i) => Object.is(e, c[i]));

// This func creates own scope
export const memoize = (fn, compRule = compareRule) => {
    // lr - last result, la - last args; f - flag, if executed
    let lr, la = [], f = false;

    return (...v) => f && compRule(la, v) ? lr : (() => {
        f = true;
        lr = fn(...v);
        return lr;
    })();
};

// you may define this func in one place with all declared rules
// and call it any places you want by passing key
// each key will have own scope
export const memoizeByKey = (fn, compRule = compareRule) => {
    let m = new Map();
    return k => m.has(k) ? m.get(k) : (() => {
        m.set(k, memoize(fn, compRule));
        return m.get(k);
    })();
};
