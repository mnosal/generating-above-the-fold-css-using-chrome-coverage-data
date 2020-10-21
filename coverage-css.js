//https://www.daviddarke.dev/blog/generating-above-the-fold-css-using-chrome-coverage-data/
// node ./coverage-css.js path/to/coverage/file absolute/link/to/target/stylesheet

// 1. Włączyć Chrome, przejść do karty COVERAGE, odświeżyć, przefiltrować dane i wskacać plik CSS zapisać plik JSON odpalić skrypt dodać plik lokalny JSON oraz link na www do pliku css

// przykład wywołania, wywołanie musi być do pliku na serwerze:
// node ./coverage-css.js Coverage.json https://www.mywebsite.com/style.css



// Check that required variables exist
if( ( process.argv[2] == undefined ) || ( process.argv[3] == undefined ) ){
    console.log('Missing variables')
    console.log('1, local path to coverage file. 2, url to target css file')
    return;
}

(async () => {

    var fs = require("fs");
    // Get content from file
    var contents = fs.readFileSync( process.argv[2] );
    // Define to JSON type
    var jsonContent = JSON.parse(contents);

    const slices = [];

    for (i = 0; i < jsonContent.length; i++) {

        // console.log( jsonContent[i] );
        if( jsonContent[i].url == process.argv[3] ){

            console.log( 'Critical CSS from: ' + process.argv[3] );

            for (j = 0; j < jsonContent[i].ranges.length; j++) {
                slices.push( jsonContent[i].text.slice( jsonContent[i].ranges[j].start, jsonContent[i].ranges[j].end ));
            }
        }

    }

    console.log('------------------------------------------------')
    console.log(process.argv[3])
    console.log(slices.join(''));
    console.log('------------------------------------------------')

// include node fs module
var fs = require('fs');
 
// writeFile function with filename, content and callback function
fs.writeFile('coverage.css', slices.join(''), function (err) {
  if (err) throw err;
  console.log('File "coverage.css" is created successfully.');
}); 


})();