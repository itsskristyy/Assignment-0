function frequencyCounter(word) {
    var frequent = {};
    for (var i=0; i < word.length;i++) {
        var character = word.charAt(i);
        if (frequent[character]) {
           frequent[character]++; //if character is found, its then incremented by 1 
        } else {
           frequent[character] = 1;
        }
    }

    return frequent;

}


// Do not edit this line;
module.exports = frequencyCounter;