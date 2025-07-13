function dnaStrand(dna) {

    let dnaCode = ""

    for (let i = 0; i < dna.length; i++) {

        switch (dna[i]) {
            case "A":
                dnaCode += "T";
                break;
            case "T":
                dnaCode += "A";
                break
            case "G":
                dnaCode += "C";
                break;
            case "C":
                dnaCode += "G";
                break


        }
    }
    return dnaCode
}

export default dnaStrand