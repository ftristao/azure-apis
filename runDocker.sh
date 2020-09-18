#!/bin/bash

if [ "x$1" = "x/force" ]
then

# Baixa a imagem
  docker pull mongo

# Remove o container, se existir
  docker stop node-mongoose
  docker container rm node-mongoose

fi

# Gera o container
docker run --name node-mongoose -p 27017:27017 -d mongo
