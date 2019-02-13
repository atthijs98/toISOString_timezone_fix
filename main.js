toISOLocal(d) {
    const z = (n) => (n < 10 ? '0' : '') + n;
    let off = d.getTimezoneOffset();
    const sign = off < 0 ? '+' : '-';
    off = Math.abs(off);

    return (
        d.getFullYear() +
        '-' +
        z(d.getMonth() + 1) +
        '-' +
        z(d.getDate()) +
        'T' +
        z(d.getHours()) +
        ':' +
        z(d.getMinutes()) +
        ':' +
        z(d.getSeconds()) +
        sign +
        z((off / 60) | 0) +
        z(off % 60)
    );
}
let date = "jan 14 2019"
let new_date = toISOLocal(new Date(date));
console.log(new_date);