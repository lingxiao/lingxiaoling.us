/**
	@Module: toggle scroll
	@Author: Xiao Ling
	@Date  : 4/21/2018

	@TODO:  make this work on the iphone as well, what about androd?
*/
(function(){

	var is_root = location.pathname == "/";

	if (is_root) {

		document.body.style.overflow = 'hidden';
		console.log('disabled toggle root page')

	} else {

		console.log("child pages should scroll")
	}

})()