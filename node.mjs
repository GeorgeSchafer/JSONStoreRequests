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
        .catch(err => return err)
}

export async function postDB(pathStr='', bodyObj={"key":"value"}){
    let result;
    post.body = bodyObj;

    result = await fetch(URL + `/${pathStr}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: bodyObj
    })
        .then(res => res.json())
        .catch(err => {
            console.log('error:', err)
            return false;
        }
    )
    console.log('expected =', bodyObj)
    post.body = null;
    return true;
}

export async function pushDB(pathStr='', bodyObj={}){
    return await postDB(pathStr, bodyObj)
}

export async function removeDB(pathStr=''){
    await fetch(URL + `/${pathStr}`, remove)
        .catch(err => return err)

    return true;
}

/** 
POST	Sets the db to the body of the request. The request must have the header Content-Type set to application/json.
*/


