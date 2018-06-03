# Computer Vision: Part I - technical survey + commerical survey


## Introducing Stephen.


## How is computer vision currently used right now ( arb ordered ) 

narrative:

	1. where it's seen in your daily lives
	2. where it's used

	3. how does it work, what do you use.
		- where it could be used ...
			* challenges, technical and non-technical.

	4. practical considerations
	5. research areas for future use.


two ends of the spectrum from classcial to modern

products:

1. recognition: Google Image search: recently switched to deep learning from bow 
	* semantic segmentation of ground plane, people, side walk. ie self driving cars, Skydio
	* face recognition more robust relative to shift: convolution give you global information
	* older ML work as well, also less complex to use. 
	* 


2. reconstruction: Google maps: standard structure from motion

	* visual SLAM: ArKit and ArCore, on-device SLAM => geared towards AR/VR
	   Tesla: visual SLAM for their self driving cars

3. image transformation: modern stuff is deep learning. ie SnapChat.    

research

1. merging these two to improve performance of either

	1. using 3d reconstruction to disambiguate object. () 
	2. using ML to improve quality of reconstruction.  ()

2. unsupervised methods, for tasks w/ no labeled data => getting them to work.
	* labeling is expensive
	- object grabbing: ie service robots: 3D reconstruction
		* industrial robot: pouring a beaker in lab task, nice to see where you are pouring:
			- wet lab is repetitive and hard to reproduce: bad for people.
		* expensive to label everything. 
	- self driving cars, cannot label all things tha come into view


3. human pose estimation, 

practical considerations, speed considerations, latency of x-ms of sending data to server

1. what is a deep net, what can it do:
	* need a lot of data to generalize well
	* don't generalize well outside of specific types of images: ie trained on faces won't work well when there' background bodies.

2. running resource constrained devices. how to compress networks.
	- binarization/compression.
	- reducing filters on each layer.
	- dense-net.

3. hardware platform dependent. 

4. store parts of the map on the phone.

similarly for image transformation (deep net).

