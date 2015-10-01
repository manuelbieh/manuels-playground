var reactTools = require('react-tools');
var glob = require('glob');
var fs = require('fs');
var path = require('path');


glob('./components/*.jsx', function(err, jsxFiles) {
    jsxFiles.forEach(function(file) {
        var basename = path.basename(file, '.jsx');
        fs.writeFileSync('./components/' + basename + '.js', reactTools.transform(fs.readFileSync(file).toString()));
    });
});


