export const initLazyIntersctionObserver = (fn:Function) => {
    const observer = new IntersectionObserver(
        (entrys) =>entrys.forEach(entry => { fn(entry) }),{
        rootMargin: '0px',
        threshold: 0,
    });
    return  observer;
};