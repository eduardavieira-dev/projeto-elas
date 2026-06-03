## Como rodar o sistema dockeirizado

### Como buildar

Dentro da pasta do projeto:
```
docker build -t website-elas .
```

### Como rodar

Dentro da pasta do projeto:
```
docker run -p 3000:3000 website-elas
```

### Acessar

Abra:
```
http://localhost:3000
```
---
### Como saber se funcionou

Você deve ver algo como:
```
Ready in xxx ms
```
no terminal do container.

### Ver containers
```
docker ps
```
### Parar Container
```
docker stop ID_CONTAINER
```
---
## Se você usa variáveis .env

Exemplo:
```
NEXT_PUBLIC_API_URL=http://localhost:8080
```
Você pode passar no docker:
```
docker run -p 3000:3000 --env-file .env website-elas
```