const browserify = require('browserify');
const fs = require('fs');
const sass = require('node-sass');
const postcss = require('postcss');
const watch = require('node-watch');
const node_importer = require('node-sass-import');
const bl = require('bl');
const exec = require('child_process').exec;

let buildConfig = {
	js: [
		{ source: './app/assets/flow/app.js', dest: './public/assets/js/app.js' },
		{ source: './app/assets/flow/head.js', dest: './public/assets/js/head.js' }
	],
	scss: [
		{ source: './app/assets/scss/app.scss', dest: './public/assets/css/app.css' }
	]
};

let waitingJS = false;
let loadingJS = false;
let waitingCSS = false;
let loadingCSS = false;

module.exports = (Mason) => {
	let buildJS = () => {
		if(loadingJS) {
			waitingJS = true;
			return;
		}

		waitingJS = false;
		loadingJS = true;
		console.log('Building Scripts');
		let promises = [];
		buildConfig.js.forEach((entrypoint) => {
			promises.push(new Promise((resolve, reject) => {
				console.log(' : ' + entrypoint.source + ' > ' + entrypoint.dest);
				let bundle = browserify(entrypoint.source)
				.transform('babelify')
				.bundle()
				.on('error', (err) => { console.log(err.message); reject(); })
				.pipe(fs.createWriteStream(entrypoint.dest));

				bundle.on('finish', () => { resolve(); });
			}));
		});

		Promise.all(promises).then(() => {
			console.log('Minifying app.js');
			exec('uglifyjs public/assets/js/app.js -o public/assets/js/app.min.js');
			console.log('Minifying head.js');
			exec('uglifyjs public/assets/js/head.js -o public/assets/js/head.min.js');
			loadingJS = false;
			if(waitingJS) {
				buildJS();
			}
		}).catch((err) => {
			loadingJS = false;
			if(waitingJS) {
				buildJS();
			}
			console.log(err);
		});
	};
	Mason.registerCommand('build-js', buildJS);


	let buildCSS = () => {
		if(loadingCSS) {
			waitingCSS = true;
			return;
		}

		waitingCSS = false;
		loadingCSS = true;
		console.log('Building styles');
		let promises = [];
		buildConfig.scss.forEach((entrypoint) => {
			promises.push(new Promise((resolve, reject) => {
				sass.render({
					file: entrypoint.source,
					sourceType: 'module',
					importer: node_importer
				}, (err, result) => {
					if(err) {
						buildingStyles = false;
						reject();
						console.log(err);
					}
					postcss().process(result.css).then((result) => {
						fs.writeFile(entrypoint.dest, result.css, (err) => {
							if(err) {
								buildingStyles = false;
								return console.log(err);
							}
							console.log(' : ' + entrypoint.source + ' > ' + entrypoint.dest);
							resolve();
						});
					});
				});
			}));
		});

		Promise.all(promises).then(() => {
			console.log('Minifying app.css');
			exec('uglifycss public/assets/css/app.css > public/assets/css/app.min.css');
			loadingCSS = false;
			if(waitingCSS) {
				buildCSS();
			}
		}).catch((err) => {
			console.log(err);
			loadingCSS = false;
			if(waitingCSS) {
				buildCSS();
			}
		});
	};
	Mason.registerCommand('build-css', buildCSS);

	Mason.registerCommand('watch', () => {
		buildJS();
		buildCSS();

		watch('./app/assets/flow/', (filename) => {
			buildJS();
		});

		watch('./app/assets/scss/', (filename) => {
			buildCSS();
		});
	});

	return {
		plugins: ['mason.plugin.scaffold'],
		scaffold: {
			templates: {
				'controller': {source:'./templates/controller.js',destination:'./app/assets/flow/controllers'}
			}
		}
	};
};
