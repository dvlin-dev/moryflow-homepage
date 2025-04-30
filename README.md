docker build --platform linux/amd64 -t moryflow-homepage -f Dockerfile .

docker tag moryflow-homepage dvlindev/moryflow-homepage
docker push dvlindev/moryflow-homepage