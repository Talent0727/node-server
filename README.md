# node-server

# Setup a project

```
npm install
```

## Quick start

Create New User:
```
fetch(Server_url/create, {
    method: "post",
    body : {
        first_name: user_define,
        last_name: user_define,
        email: user_define,
        title: user_define,
        description: user_define,
    }
})
.then(res => res.json())
.catch(err => console.log(err))
```

Get All Users:

```
fetch(Server_url/getall, {
    method: "post"
})
.then(res => res.json())
.catch(err => console.log(err))
````

Delete ById:

```
fetch(Server_url/delete/:id, {
    method: "post",
})
.then(res => res.json())
.catch(err => console.log(err))
```
