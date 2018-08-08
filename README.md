A static page app using p5.js + skeleton.

File Overview 

1) index.html: the static web page. 
	- loads our css (skeleton)
	- loads our 3rd party js libraries (p5.js, jquery)
	- sources our local script (main.js)
	- sets up our page
2) main.js 
    - main script that runs after the document is ready
    - waits for user input. On submit, redraws using p5

Note: to keep this repo really small, we are sourcing 
all 3rd party libraries from a cdn. The page will not work 
without caching or wifi. 

To run: 
git clone <this repo> 
cd p5js_example
python -m SimpleHTTPServer 

browse to localhost:8000 
(This will cache the 3rd parties so we can use without wifi next time, 
I don't think a local filesystem lookup will do that)
