############################################################
# Module  : Image processing scripts
# Author  : Xiao Ling
# Date    : April 17th, 2018
############################################################

from PIL import Image
import PIL.ImageOps    
import numpy as np
from skimage.io import imsave
import cv2


in_path  = 'great.png'
out_path = 'great-1.png'

def invert_color(in_path, out_path):

	image = Image.open(in_path)

	if image.mode == 'RGBA':
	    r,g,b,a = image.split()
	    rgb_image = Image.merge('RGB', (r,g,b))

	    inverted_image = PIL.ImageOps.invert(rgb_image)

	    r2,g2,b2 = inverted_image.split()

	    final_transparent_image = Image.merge('RGBA', (r2,g2,b2,a))

	    final_transparent_image.save(out_path)

	else:
	    inverted_image = PIL.ImageOps.invert(image)
	    inverted_image.save(out_path)


# swap out black with red
her   = np.array(Image.open('her-0.jpg'  ))
img   = np.array(Image.open('graph-t.jpg'))
red   = her[0][0]
white = img[0][0]

(W,H,C) = img.shape

# for w in xrange(W):
# 	for h in xrange(H):
# 		if any(img[w][h] != white):
# 			img[w][h] = red

# final_path = 'graph-red.png'			
# img = Image.fromarray(img, 'RGB')
# img.save(final_path)
# img.show()
















