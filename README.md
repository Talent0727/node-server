 node-app

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
=======
  
  ## code
-   [create](http://github.com/liamphilips/create)
  
        ```js
        {
            {
                _id: sdfi786asdf69a8sdfas6df78ad6sf879687dsf,
                first_name: "Liam",
                last_name: "philips",
                email: "liam@philips@gmail.com",
                title: "This is Node",
                description: "Use node as well",
                date: "2023-04-27"
            }
        }
        ```
        `Created a new Object`
-   [get_all](https://github.com/liamphilips/get_all)
    
        ```js
            {
                {
                    _id: sdfi786asdf69a8sdfas6df78ad6sf879687dsf,
                    first_name: "Liam",
                    last_name: "philips",
                    email: "liam@philips@gmail.com",
                    title: "This is Node",
                    description: "Use node as well",
                    date: "2023-04-27"
                },
                {
                    _id: df9dfs798dsf98c7v9x789d79f7s9ds9df7s9d7,
                    first_name: "Lucas",
                    last_name: "Thomps",
                    email: "Lucas@Thomps@gmail.com",
                    title: "This is Express",
                    description: "Use Express as well",
                    date: "2023-04-27"
                },
                {
                    _id: cv789cv797d97f9sdf79s8df79sd7f9sd7f89sd,
                    first_name: "Joe",
                    last_name: "Thoy",
                    email: "Joe@Thoy@gmail.com",
                    title: "This is MondoDB",
                    description: "Use mongodb as well",
                    date: "2023-04-27"
                }
            }
        ```
        `Selected all Objects`
-   [deleteById](http://github.com/liamphilips/deleteOne)

        ```js
            {
                {
                    _id: df9dfs798dsf98c7v9x789d79f7s9ds9df7s9d7,
                    first_name: "Lucas",
                    last_name: "Thomps",
                    email: "Lucas@Thomps@gmail.com",
                    title: "This is Express",
                    description: "Use Express as well",
                    date: "2023-04-27"
                },
                {
                    _id: cv789cv797d97f9sdf79s8df79sd7f9sd7f89sd,
                    first_name: "Joe",
                    last_name: "Thoy",
                    email: "Joe@Thoy@gmail.com",
                    title: "This is MondoDB",
                    description: "Use mongodb as well",
                    date: "2023-04-27"
                }
            }
        ```
        `First Object was deleted 1 ,ore.`
    }
 
