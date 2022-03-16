docker run -it --rm -u 1000:1000 -p 3001:3001 -v /home/dirk/workspace/p2pu/p2pu-website/p2pu-theme:/opt/app -w /opt/app node:12-buster-slim npm run build
