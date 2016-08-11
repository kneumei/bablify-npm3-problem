var browserify = require('browserify');
    var fs = require('fs');
    
    var appFiles = ['./src/entry.js', './src/dep.js'];
    
    var bundledFile = fs.createWriteStream('app.js');
    
    var js =
    	browserify(
            appFiles,
    		{
    			transform: [['babelify', { presets: ["es2015"] }]]
    		}
        )
    	.bundle();
    js.pipe(bundledFile);