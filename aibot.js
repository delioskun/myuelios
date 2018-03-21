exports.message = function ( content,author ){
  console.log([content,author]);
  return "Eu não entendi muito bem o que quis dizer " + author + ". Pode repetir?";
}
