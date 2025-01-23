/**
 * Aquesta funcio suma tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function suma(...valors) {
    let resultat = 0
    for (let i = 0; i < valors.length; i++) {
        resultat += valors[i];
    }
    return resultat;
}


/**
 * Aquesta funcio multiplica tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function multiplica(...valors) {
    let resultat = 1
    for (let i = 0; i < valors.length; i++) {
        resultat *= valors[i];
    }
    return resultat;
}

module.exports.suma = suma;
module.exports.multiplica = multiplica;