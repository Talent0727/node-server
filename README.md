# node-app

> Minimal and efficient cross-platform file watching library

# installation

```bash
$ npm install
```
## Launching the app

```bash
# development
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# <h3>Create New</h3>

- URI
```
/create
```

- Param
``` json
{
    "first_name": "String",
    "last_name": "String",
    "email": "E-mail",
    "title": "String",
    "description": "String",
}
```


- Return
``` json
{
    "message" : "success"
}
```


# <h3>Get All Records</h3>

- URI
```
/getall
```

- Param
``` json
 No---need
```

- Return
<!-- ***When Success*** -->
``` json
[
    {
        "_id": "6449ed3dce3c947c3a55f71d",
        "first_name": "Liam",
        "last_name": "Philips",
        "email": "liampilips.hum@gmail.com",
        "title": "Project using of Liam",
        "description": "Description of Liam",
        "date": "2023-04-27T03:34:19.414Z",
    },
    {
        "_id": "6449ed3dce3c947c334f3fy4y3d",
        "first_name": "Theo",
        "last_name": "Lucky",
        "email": "TheoLuck.hum@gmail.com",
        "title": "Project using of Theo",
        "description": "Description of Theo",
        "date": "2023-04-28T03:34:19.414Z",
    },
    {
        "_id": "6449ed3dce312f5h6u7j85f75iu",
        "first_name": "Odyn",
        "last_name": "Young",
        "email": "OdynYoung.hum@gmail.com",
        "title": "Project using of Odyn",
        "description": "Description of Odyn",
        "date": "2023-04-29T03:34:19.414Z",
    },
]
```
<!-- ***No exist***
```json
{
    "message" : "0 exist"
}
``` -->

# <h3>Delete By Id</h3>

- URI
```
/delete/_id
```

- Param
``` json
{
    "_id": "6449ed3dce312f5h6u7j85f75iu",
}
```

- Return
<!-- ```json
``` -->
<!-- ***When Success*** -->
```json
{
    "message": "success"
}
```
<!-- ***No exist***
```json
{
    "message": "no-exist"
}
``` -->
