let produtoA = {
    nome: "camiseta",
    valor: 100.0,
    internacional: true
  };
  let produtoB = { nome: "perfume", valor: 200.0, internacional: true };
  let produtoC = { nome: "sandália", valor: 120.0, internacional: false };
  
  if (produtoA["internacional"] == true) {
    var valorI = produtoA["valor"] * 1.2;
    console.log("O valor do produto : " + produtoA["nome"] + " é " + valorI);
  } else {
    var valorN = produtoA["valor"] * 1.12;
    console.log("O valor do produto : " + produtoA["nome"] + " é " + valorN);
  }
  
  if (produtoB["internacional"] == true) {
    var valorI = produtoB["valor"] * 1.2;
    console.log("O valor do produto : " + produtoB["nome"] + " é " + valorI);
  } else {
    var valorN = produtoB["valor"] * 1.12;
    console.log("O valor do produto : " + produtoB["nome"] + " é " + valorN);
  }
  
  if (produtoC["internacional"] == true) {
    var valorI = produtoC["valor"] * 1.2;
    console.log("O valor do produto : " + produtoC["nome"] + " é " + valorI);
  } else {
    var valorN = produtoC["valor"] * 1.12;
    console.log("O valor do produto : " + produtoC["nome"] + " é " + valorN);
  }
  
