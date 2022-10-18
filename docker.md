docker build . -t node-web-app
docker run -p 8080:8080 -d node-web-app  