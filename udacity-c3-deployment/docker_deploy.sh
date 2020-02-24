
#!/bin/bash
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
docker push fbasaly/udacity-c3-restapi-user
docker push fbasaly/udacity-c3-restapi-feed
docker push fbasaly/reverseproxy
docker push fbasaly/udacity-c3-frontend:local