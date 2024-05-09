# healthy_app

### DON'T RUN NOM INSTALL

#### Development workflow for developers

1.- Pull the source code

If pulled for the first time or the package.json changed run

```node
docker-compose build
```

2.- Then, run the following command to start the environment.

```node
docker-compose up -d
```

3.- To see the logs of your app

```node
docker-compose logs -f web
```

4.- To stop the containers

```docker
docker-compose down
```

5.- The app run on

[for develop] (http://localhost:3000)

---

#### To see and follow the logs of your tests

```node
docker-compose logs -f test
```

### If you need to install any npm package

```docker
docker-compose exec web npm install pacakge-name
```

## production

WIP no finished yet

### Production temporal site

<https://healthy-app-iota.vercel.app/login>
