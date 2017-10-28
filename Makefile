.PHONY: docker-run

.RECIPEPREFIX: >

docker-run:
> docker run -d -p 41690:8080 -v /home/stano/projects/myown_node/:/usr/src/app .