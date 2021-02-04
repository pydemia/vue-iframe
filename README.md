# vue-iframe

forked from http://github.com/nheidloff/web-apps-kubernetes

Install and init:

```bash
npm install --global vue-cli
npm install --save vue-frame
vue init webpack vue-app
```

Init and build:

```bash

cd vue-app
npm run build
```

Run locally:
```bash
cd vue-app
npm run dev
```

Build a docker container:

```bash
cd vue-app
docker build -t <tag> .
```

Run Docker locally:

```bash
cd vue-app
docker run -d -p 8080:80 vue-app
```

Push the Docker image:

```bash
docker push <tag>
```

Deploy the Docker on k8s:

* Edit image tag first:
```yaml
spec:
  template:
    spec:
      containers:
      - name: vue
        image: <your-image-tag-here>
```

```bash
kubectl apply -f vue-iframe.yaml
```