const countBits = (n) => n.toString(2).split('').filter(b => b === "1").length;
console.log(countBits(1234));