# tiny little docker talk

These are the examples I used in the docker talk. Every example you
can build and run with the following commands in each directory:

To build:

`docker build -t demo .` 


To run:

`docker run -ti -p 3000:3000 demo`

Exposing the port 3000 is only necessary for the nodejs example.
