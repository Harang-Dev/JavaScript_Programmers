function solution (n, k) {
    const sheepPrice = 12000;
    const drink = 2000;
    return n >= 10 ? (n * sheepPrice) + (k * drink) - (Math.floor(n/10) * drink) : (n * sheepPrice) + (k * drink);
}