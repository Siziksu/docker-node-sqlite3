serveo:
	ssh -o ServerAliveInterval=60 -tt -R siziksu:80:localhost:8080 serveo.net

up:
	docker-compose up

upd:
	docker-compose up -d

down:
	docker-compose down

container:
	docker exec -ti node /bin/sh

clear-images:
	docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
