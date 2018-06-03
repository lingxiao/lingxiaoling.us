/**
    @file   : pdf.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @module : application pdf controller
    @date   : 6/2/2018
*/

'use strict'; 


import * as express   from 'express';
import * as fs        from 'fs'     ;
import * as url       from 'url'    ;


export function serve_cv(req : express.Request , res : express.Response ){
	console.log('directory\n\n\n: ', __dirname)
	serve_pdf( res, '../../public/curriculum-vitae/resume.pdf')
}

export function serve_hj(req : express.Request ,res : express.Response ){
	serve_pdf(res, '../../public/assets/pdf/final_hj_ling.pdf')
}



/**
	@Use: Given  path : <String> to pdf and res : <Response Object>,
	      render pdf 
*/
export function serve_pdf( res : express.Response, file_path : string) {
	
	const pdf_path = url.resolve(__dirname, file_path)

	fs.readFile( pdf_path, (err, data) =>{
		res.contentType('application/pdf');
		res.send(data)
	});

}
