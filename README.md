# Ferver
Https deno server template.

## How to run it ?
To start the server you have to use this command:
 - ***deno run --allow-net --allow-env --allow-read --unstable src/app.ts***

## How to benchmark it ?
To benchmark it install [Oha](https://github.com/hatoo/oha) and run:
 - ***bash -c "oha -n 1000 http://localhost:8080/ && clear && oha -n 400000 -c 100 http://localhost:8080/"***
