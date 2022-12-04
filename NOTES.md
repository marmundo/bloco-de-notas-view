# Executar os seguintes comandos

```
yarn init
yarn add jest  -D
```

# Adicionar comando para test no package.json
```
"scripts":{
    "test": "node --experimental-vm-modules node_modules/.bin/jest"
  },
```
