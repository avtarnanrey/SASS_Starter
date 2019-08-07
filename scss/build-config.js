var sass = require('node-sass');
var path = require('path');
var fs = require('fs');

if (!fs.existsSync('./dist/css')) {
    fs.mkdirSync('./dist/css');
}

sass.render({
    file: './scss/bundle.scss',
    //includePaths: ['./scss/includes'],
    outputStyle: 'compressed',
}, function (error, result) {
    if (error) {
        console.log(error.status);
        console.log(error.column);
        console.log(error.message);
        console.log(error.line);
    } else {
        console.log(result.status);
        fs.writeFileSync(
            './dist/css/bundle.css',
            result.css.toString()
        );
    }
});