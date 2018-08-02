## Start Project Process ##

I. set up the proper node version - curently firebase only works with node 6.11.5: this is optional now, using recent version of node right now

1. install nvm 
2. run `nvm install 6.11.5`
3. run `nvm use 6.11.5`

II. Set up firebase + node.js project

0. set up firebase config following: https://firebase.google.com/docs/database/web/start

1. ```firebase init hosting```

2. ```firebase init functions```

   and select typescript when prompted

3. important: open 2nd terminal and run:

	```tsc --watch --strict```

	so that ```typescript``` is compiled immediately

4. on 1st terminal:

	```firebase serve --only functions,hosting```

5. 	cd into /functions directory and do:

	```npm install express --save
	   npm install typescript --save
	   npm install @types/express --save
	   npm install firebase --save
	   npm install firebase-admin --save
	   npm install mathjs --save
	   npm install path --save
	```

	Note all js packages need to be installed or will not be deploy on remote


6. edit `lib/index.ts` file with:

	```
		import * as functions from 'firebase-functions';
		import * as express   from 'express';
	```
	```
		const app = express();
		app.get('/', (req, res) => {
			res.send("hello world from index.ts");
		})		
		exports.app = functions.https.onRequest(app);
	```

	remove `public/index.html` so the home page is specified route

7. edit `firebase.json` file with:

	```		
		{
		  "hosting": {
		    "public": "public",
		    "ignore": [
		      "firebase.json",
		      "**/.*",
		      "**/node_modules/**"
		    ],
		    "rewrites": [
		      {
		          "source": "/**"
		        , "function": "app"
		      }
		    ]
		  },
		  "functions": {
		    "predeploy": [
		      "npm --prefix \"$RESOURCE_DIR\" run lint",
		      "npm --prefix \"$RESOURCE_DIR\" run build"
		    ]
		  }
		}
	```		


8. run dev server with: ```firebase serve --only functions,hosting```

9. deploy with: 
		
		```firebase deploy --only functions,hosting```

	Note if there's any error, then project will not deploy

