# Executar os seguintes comandos

```
yarn init
yarn add supertest jest ts-jest @types/jest @types/supertest -D

yarn ts-jest config:init
```
# Adicionar as seguintes linhas no arquivo jest.config.js

```
testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
```

# Adicionar comando para test no package.json
```
test:jest
```
