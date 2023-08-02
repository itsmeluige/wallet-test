
# Wallet Test

Uma carteira virtual, onde terá a possibilidade de cadastrar novos cartões e listar os
cartões já cadastrados que serão providos por uma API REST.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/itsmeluige/wallet-test.git
```

Entre no diretório do projeto

```bash
  cd wallet-test
```

Instale as dependências

```bash
  npm install
```
ou
```bash
  yarn install
```
Inicie com

```bash
  npm run start
```
ou 

```bash
  yarn start
```


## Rodando o Server local

Entre no diretório do mock: 

```bash
  cd mock
```

e rode o comando para iniciar o JSON Server:

```bash
  json-server --watch db.json
```

Obs: caso esteja rodando em device físico, talvez seja necessário apontar para o seu IP da máquina, neste caso rode o comando: 

macOS
```bash
  ifconfig
```
Windows
```bash
  ipconfig
```

e depois, subsitua localhost por seu ip no arquivo Server.js
```diff
const Server = axios.create({
-  baseURL: 'http://localhost:3000/',
+  baseURL: 'http://SEU_IP:3000/',
  timeout: 5000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
```
logo após o comando:
```bash
  json-server --host SEU_IP --watch db.json
```
substituindo SEU_IP pelo ip
## Rodando no Android

Abra o Emulador do Android Studio ou device real

use o comando: 
```bash
  yarn android
```
## Rodando no iOS

Abra o Emulador pelo Xcode ou device real

use o comando: 
```bash
  cd ios && pod install
```

e depois: 
```bash
  yarn ios
```
## Rodando os testes

```bash
  yarn jest
```

## Screenshots

---

  <img  src="./assets/screenshots/teste_cadastro_01.gif" style="width: 180px; padding-top: 30px" alt="Wallet Test" />

  <img  src="./assets/screenshots/teste_consulta_01.gif" style="width: 180px; padding-top: 30px" alt="Wallet Test" />


&#xa0;

## Stack utilizada

**Front-end:** React Native

**Back-end:** Node, JSON Sever

**Testes:** Jest

## Observações

O módulo Scanner foi testado apenas em devices reais, no emulador pode implicar em não funcionamento devido ao componente da câmera 


## Troubleshotting

error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65

abra o projeto (.xcworkspace) pelo XCode e tente realizar o build


se der algo parecido com o pod React-Codegen como na imagem,
  <img  src="./assets/screenshots/troubleshotting_ios_1.jpg" style="width: 180px; padding-top: 30px" alt="Wallet Test-tshotting1" />


altere o parametro iOS Deployment Target para 12.4 em PODS > React-Codegen > Build Settings > iOS Deployment Target, como na imagem abaixo
  <img  src="./assets/screenshots/troubleshotting_ios_2.jpg" style="width: 180px; padding-top: 30px" alt="Wallet Test-tshotting2" />