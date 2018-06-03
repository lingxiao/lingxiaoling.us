/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @module : application router
    @date   : 6/3/2018
*/


'use strict'; 

import * as functions from 'firebase-functions';
import * as express   from 'express'           ;
import * as myApp          from './core/myApp'    ;
import * as pdf_controller from './controller/pdf';



const app  : express.Application = myApp.initApp();

/**
	pdf routes
*/

app.get('/curriculum-vitae', (req : express.Request , res : express.Response, next : express.NextFunction ) => 
	pdf_controller.serve_cv(req, res)
);


app.get('/rl_hj_xiao', (req : express.Request , res : express.Response, next : express.NextFunction ) => 
	pdf_controller.serve_hj(req, res)
);


/**
	home page routes
*/
app.get('/'    , (req : express.Request, res :  express.Response) => res.render('index-home', {}));
app.get('/art' , (req : express.Request, res :  express.Response) => res.render('index-art' , {}));
app.get('/blog', (req : express.Request, res :  express.Response) => res.render('index-blog', {}));
app.get('/code', (req : express.Request, res :  express.Response) => res.render('index-code', {}));


/**
	blog
*/
app.get('/on-cv-tech', (req : express.Request, res : express.Response) => { 
	res.render('blog/on-cv-tech.pug', {});
});


app.get('/on-cv-commercial', (req : express.Request, res : express.Response) => { 
	res.render('blog/on-cv-commerical.pug', {});
});

app.get('/on-nlp', (req : express.Request, res : express.Response) => { 
	res.render('blog/on-nlp.pug', {});
});


/**
	code
*/
app.get('/drl-dialogue', (req : express.Request, res : express.Response) => { 
	res.render('code/drl-dialogue.pug', {});
});

app.get('/sent-analysis', (req : express.Request, res : express.Response) => { 
	res.render('code/sent-analysis.pug', {});
});

app.get('/corpus-mt', (req : express.Request, res : express.Response) => { 
	res.render('code/corpus-mt.pug', {});
});

app.get('/multi-mt', (req : express.Request, res : express.Response) => { 
	res.render('code/multi-mt.pug', {});
});


exports.app = functions.https.onRequest(app);

