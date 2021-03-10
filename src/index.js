module.exports = function reverse (n) {
    let m = '';
    n = '' + n;
    if(n[0] === '-'){
        for (let i=1; i < n.length; i++){
            m += n[i]
        }
        return m.split('').reverse().join('');
    } else return ('' + n).split('').reverse().join('');
}
