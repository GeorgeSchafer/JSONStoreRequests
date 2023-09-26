"use strict";
import { config } from 'dotenv';
config({ path: './secrets.env' })



const URL = process.env.URL;

const get = {
    method: 'GET'
}

const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: null
}

const remove = {
    method: "DELETE"
}

export async function getDB(pathStr='') {
    return await fetch(URL + `/${pathStr}`, get)
        .then(res => res.json())
        .then(res => res.data)    
}

export async function postDB(pathStr='', bodyObj){
    post.body = bodyObj;
    console.log('body =', post.body)

    const result = await fetch(URL + `/${pathStr}`, post)
        .then(res => res.json())
        .catch(err => {
            console.log('error:', err)
            return false;
        }
    )

    console.log('result =', result)
    post.body = null;
    return true;
}

export async function pushDB(pathStr='', bodyObj){
    return await postDB(pathStr, bodyObj)
}

export async function removeDB(pathStr=''){
    await fetch(URL + `/${pathStr}`, remove)

    return true
}

/** 
GET	Gets the db. Returns { "ok": true, "data": <data> } - Takes no body
POST	Sets the db to the body of the request. The request must have the header Content-Type set to application/json.
DELETE	Deletes a key from the db. If you do not specify a path (e.g. <token>/key), the whole database will be emptied!
PUT	An alias of the POST request.
*/


