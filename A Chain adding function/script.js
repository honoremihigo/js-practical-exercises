function add(n){
 function inner(b) {
  return add(n + b);
  }
  inner.valueOf = () => n;
 return inner;
}