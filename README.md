# simple-webpack-starter
## A simple starter kit for webpack with live reloading

### install the dependencies
```sh
npm install
```

### running in dev mode
```sh
npm start
```

### creating a production build
```sh
npm run build
```

### building image (OpenShift)
```sh
s2i build . centos/nodejs-6-centos7 simple-webpack-starter --runtime-image centos/nginx-18-centos7 --runtime-artifact /opt/app-root/src/dist.tar.gz
```
