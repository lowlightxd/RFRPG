"use strict";

function FENgen() {
    let pieces = ["b", "b", "n", "n", "r", "r", "q", "k"];
    let chosenIndices = new Array(8);
    let orientation = new Array(8);
    let i = 0;
    let attempts = 0;

    while (i < 8) {
        if (attempts++ > 1000) return FENgen();
        let random = Math.floor(Math.random() * 8);
        if (chosenIndices.includes(random)) continue;

        let chosenPieces = chosenIndices.map(x => pieces[x]);
        if (pieces[random] === "k" && !chosenPieces.includes("r")) continue;
        if (pieces[random] === "b" && orientation.includes("b")) {
            if ((i - orientation.indexOf("b")) % 2 === 0) continue;
        }
        if (pieces[random] === "r" && chosenPieces.includes("r")) {
            if (!chosenPieces.includes("k")) continue;
        }

        orientation[i++] = pieces[random];
        chosenIndices.push(random);
    }

    let whitePieces = orientation.map(x => x.toUpperCase()).join("");
    let blackPieces = orientation.join("");

    return blackPieces + "/pppppppp/8/8/8/8/PPPPPPPP/" + whitePieces + " w KQkq - 0 1";
}

console.log(FENgen());