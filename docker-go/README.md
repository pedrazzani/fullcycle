#Primeiro desafio Docker

- Criar executável em GO que imprime a frase "Code.education Rocks!"
- Criar uma imagem com 2MB

## Criando a Imagem
```
docker build -t <seu-usuario-docker>/codeeducation .
```

## Rodando o container
```
docker run <seu-usuario-docker>/codeeducation
```