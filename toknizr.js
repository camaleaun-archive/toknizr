var fs = require('fs');

var toknizr = function(text) {
  console.log("iniciado");
var tokens = {
  rule: [
    { regex: /^is/, type: 'teste' },
    { regex: /prog/, type: 'init block program' },
    { regex: /fimprog/, type: 'end block program' }
  ]
};
  console.log(text);
  var str = JSON.stringify(tokens);
  console.log('tokens %s', str);

  var patt = /^is/gmi;//new RegExp((new String(tokens.rule[0].regex)+"gmi").substring(1,6));//new RegExp(/^is/gmi//new String(tokens.rule[0].regex),"gm");
  console.log("RegEx %s", patt);
  //var res = patt.exec(text);

  //console.log("Encontrado %s", res);
};

if (process.argv[2])
  var src = fs.readFileSync(process.argv[2], 'utf-8');
else
  var src = "\nIs th\nis h\nis?";//"prog"

new toknizr(src);
