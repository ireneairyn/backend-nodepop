# Nodepop API

Assignment for Keepcoding and Glovo's Bootcamp: Women in Tech

## Instrucciones 📖

Requisitos de instalación:

- Node >= 19.2.0
- Type in terminal _node -v_ to check what version of node you are using.
- MongoDB
- Git

### How to install 💾

    $ git clone https://github.com/ireneairyn/backend-nodepop
    $ cd nodepop
    $ npm install

### Initialise database 📊

    $ npm run init-db

### Run the app 🏃‍♀️

    $ npm start

    The app is configured to work in port 3000.

## Testing 🧪

### Fetch all anuncio tags

http://localhost:3000/api/v1/anuncios/tags

### Fetch all anuncios

http://localhost:3000/api/v1/anuncios

### Fetch anuncios for a specific tag

http://localhost:3000/api/v1/anuncios?tag=mobile

### Fetch anuncios by tipo de anuncio

http://localhost:3000/api/v1/anuncios?venta=true

### Fetch anuncios by price ranges

http://localhost:3000/api/v1/anuncios?precio=3
http://localhost:3000/api/v1/anuncios?precio=5-
http://localhost:3000/api/v1/anuncios?precio=5-100
http://localhost:3000/api/v1/anuncios?precio=-100

### Fetch anuncios by name

http://localhost:3000/api/v1/anuncios?nombre=tab

### Fetch anuncios with limit

http://localhost:3000/api/v1/anuncios?limit=2

### Fetch anuncios with limit and skip

http://localhost:3000/api/v1/anuncios?limit=2&start=1

### Fetch anuncios with a sort

http://localhost:3000/api/v1/anuncios?sort=precio

### Fetch anuncios with multiple filters

http://localhost:3000/api/v1/anuncios?sort=precio&limit=1&precio=50-

## Built With 🛠️

- [Visual Studio Code](https://code.visualstudio.com/) - Code Editor

## Author ✒️

- **Irene Auñón** - [IreneAiryn](https://github.com/IreneAiryn)
