/**
    @file   : app.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @module : spice application class
    @date   : 5/31/2018
*/

'use strict'; 


import * as express     from 'express'    ;
import * as bodyParser  from "body-parser";
import * as path        from "path"  	  ;


/**
	initalize a new express app and configure middle ware and view engine
*/
export function initApp() :  express.Application {

	const app = express();

	// use json form parser middleware
	app.use(bodyParser.json());

	// use query string parser middlware
	app.use(bodyParser.urlencoded({ extended: true }));


	app.set('views', path.join(__dirname, '../../src/view'))
	app.set('view engine', 'pug');

	// set static file source

	app.use(express.static(path.join(__dirname, "../../../public")));

	return app;

}



