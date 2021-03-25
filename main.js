function Enviar(event) {
  
    event.preventDefault();
    var nome = document.getElementById("campo");
    var alt = document.getElementById("imgPokemon").alt;
  

    if (nome.value != alt) {
        alert('tente outra vez...');
    }else{
      alert("Parabéns, jovem! Você manja dos paranauês!")
      trocaPokemon(alt);
    }
}
  
function trocaPokemon(alt){
  
  if (alt == "ivysaur"){
    trocarImagemCharizard()
  }else if (alt == "charizard"){
    trocarImagemBlastoise()
  }else if (alt == "blastoise"){
   trocarImagemPikachu()
  }else{
   alert("Parabéns, você venceu!")
  }
}
   
    


function trocarImagemSquirtle (){
  var imagem = document.getElementById("imgPokemon");
  imagem.src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";
  imagem.alt="squirtle";
  alert("Parabéns, você venceu!")
   
}

function trocarImagemCharizard(){
  var imagem = document.getElementById("imgPokemon");
  imagem.src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png";
  imagem.alt="charizard";
   
}

function trocarImagemBlastoise(){
  var imagem = document.getElementById("imgPokemon");
  imagem.src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png";
  imagem.alt="blastoise";
   
}


function trocarImagemPikachu(){
  var imagem = document.getElementById("imgPokemon");
  imagem.src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png";
  imagem.alt="pikachu";
   
}