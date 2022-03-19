const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("error.png4")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let Nombre = data.name;
            pokeNombre(Nombre);
            console.log(Nombre);

            let type = [data.types[0].type.name];
            pokeTipo(type);
            console.log(type);

            let moves = [data.moves[0].move.name];
            pokeMoves(moves);
            console.log(moves);

            let moves2 = [data.moves[1].move.name];
            pokeMoves2(moves2);
            console.log(moves2);

            let moves3 = [data.moves[5].move.name];
            pokeMoves3(moves3);
            console.log(moves3);

            let moves4 = [data.moves[6].move.name];
            pokeMoves4(moves4);
            console.log(moves4);

            let moves5 = [data.moves[3].move.name];
            pokeMoves5(moves5);
            console.log(moves5);

            let moves6 = [data.moves[4].move.name];
            pokeMoves6(moves6);
            console.log(moves6);

            let moves7 = [data.moves[7].move.name];
            pokeMoves7(moves7);
            console.log(moves7);

            let moves8 = [data.moves[8].move.name];
            pokeMoves8(moves8);
            console.log(moves8);

            let stats1 = [data.stats[0].base_stat];
            pokeHp(stats1);
            console.log(stats1);

            let stats2 = [data.stats[1].base_stat];
            pokeAttack(stats2);
            console.log(stats2);

            let stats3 = [data.stats[2].base_stat];
            pokeDefense(stats3);
            console.log(stats3);

            let stats4 = [data.stats[3].base_stat];
            pokeSpecialAtt(stats4);
            console.log(stats4);

            let stats5 = [data.stats[4].base_stat];
            pokeSpecialDef(stats5);
            console.log(stats5);

            let stats6 = [data.stats[5].base_stat];
            pokeSpeed(stats6);
            console.log(stats6);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeTipo = (url) => {
    const pokeType = document.getElementById("Tipo").innerHTML = url;
}

const pokeNombre = (url) => {
    const nombre = document.getElementById("Nombre").innerHTML = url;

}

const pokeMoves = (url) => {
    const pokeMove = document.getElementById("Mov").innerHTML = url;
} 

const pokeMoves2 = (url) => {
    const pokeMove2 = document.getElementById("Mov2").innerHTML = url;
} 

const pokeMoves3 = (url) => {
    const pokeMove3 = document.getElementById("Mov3").innerHTML = url;
} 

const pokeMoves4 = (url) => {
    const pokeMove4 = document.getElementById("Mov4").innerHTML = url;
} 

const pokeMoves5 = (url) => {
    const pokeMove5 = document.getElementById("Mov5").innerHTML = url;
} 

const pokeMoves6 = (url) => {
    const pokeMove6 = document.getElementById("Mov6").innerHTML = url;
} 

const pokeMoves7 = (url) => {
    const pokeMove7 = document.getElementById("Mov7").innerHTML = url;
} 

const pokeMoves8 = (url) => {
    const pokeMove8 = document.getElementById("Mov8").innerHTML = url;
} 

const pokeHp = (url) => {
    const pokeHealt = document.getElementById("hp1").innerHTML = url;
}

const pokeAttack = (url) => {
    const pokeAtt = document.getElementById("attack1").innerHTML = url;
}

const pokeDefense = (url) => {
    const pokeDef = document.getElementById("defense1").innerHTML = url;
}

const pokeSpecialAtt = (url) => {
    const pokeSpecialAt = document.getElementById("special-a1").innerHTML = url;
}

const pokeSpecialDef = (url) => {
    const pokeSpecialDe = document.getElementById("special-d1").innerHTML = url;
}

const pokeSpeed = (url) => {
    const pokeSpee = document.getElementById("speed").innerHTML = url;
}