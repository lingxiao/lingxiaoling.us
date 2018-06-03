function load_js(){
	var head    = document.getElementsByTagName('head')[0];
	var script  = document.createElement('script');
	script.type = 'text/javascript';
	script.src  = '../assets/js/static-context.js';
	head.appendChild(script);

	console.log("force-reload.js ping")
}

load_js();
