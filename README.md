# lingxiaoling.me source code #

The following set of instructions allow you to set a node.js minimal app
with typescript

## Node set up ##

1. set up node: https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30

2. set up typescript : http://brianflove.com/2016/11/08/typescript-2-express-node/
basic types: https://www.typescriptlang.org/docs/handbook/basic-types.html


## Feature requests ##

1. make header non transparent        [DONE]
2. Twitter and Facebook integration   []
3. Native upvote integration          []
4. fail whale page                    []
5. separation of view from filesystem 

## TODOs #

1. center date on blog content    [DONE]
2. ABOUT-ME: make about me page on the home page   [DONE]
3. move image url to native url               [DONE]
3. Migrate project pages over                 [DONE]
4. Outline blog on computer vision
5. implement like and share
6. refactor blog content so that it can be automatically generated.
7. figure out how to insert images into it with caption                [DONE]
8. write python script that take .md file and create blog file


## Bug list ##


0. [FIXED] when navigate back to home page, links do not work unless refresh home page first , but this only happens sometimes

1. [FIXED] Images only load on refresh, [Reason: static-context.js do not reload on navigation]

2. [FIXED] Navigate to home page do not load when clicking from any child pages, prob has something to do w/ the default scroll features

3. [FIXED] home page is wonkey
[FIXED]		1. on browser: the font is off.           
		problem is font is not delivered:

			 * The Typekit service used to deliver this font or fonts for use on websites
			 * is provided by Adobe and is subject to these Terms of Use
			 * http://www.adobe.com/products/eulas/tou_typekit. For font license
			 * information, see the list below.
			 		
	[FIXED]	2. on mobile: the home page nav menu disappears. it's not centered. it disappears because of animation 

	<!-- the plan here is to completly rip out the existing blog template and replace it w/ ben-evans, because we know it looks ok on mobile -->
	[FIXED]	2. blog page completely unreadable on mobile: 
			1. too much space to the left and right: find way to flood the whole page on mobile. the whole thing is fatter 	
				- the problem is that its' very hard to diagnose this
	[FIXED] 2. font is too big. space between fonts is too big: find way to 


4. on safari images fail to rescale on browser resize









