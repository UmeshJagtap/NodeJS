=== docker ===
--docker run -it test_image
--docker exec -it test-image bash
--Dockerfile, .dockerignore
--docker build ( docker build -t test-image . )
--docker port mapping ( docker run -p 8000:7000 myapp )
--docker environment variable ( docker run -e PORT=7000 -p 8000:7000 myapp )
--docker customImage push to docker-hub
$ docker login
$ docker build -t virtualcode27/test-image .
$ docker push virtualcode27/test-image
--docker compose
[] backend
[] frontend !!
[] redis

=== redis ===

=== system-design ===
