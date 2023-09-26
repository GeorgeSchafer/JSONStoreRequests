"use strict";
import { config } from 'dotenv';
config({ path: './secrets.env' })

export default class JSONStore2 {

    #URL;

    #options;
    
    constructor(){
        #URL = process.env.URL;
        #options = {
            get: {
                method: 'GET'
            },
            post: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: null
            },
        
            remove: {
                method: "DELETE"
            }
        }
    }

    async getDB(pathStr='') {
        return await fetch(URL + `/${pathStr}`, #options.get)
            .then(res => res.json())
            .then(res => res.data)    
    }

    async postDB(pathStr='', bodyObj){
        post.body = bodyObj;
        console.log('body =', post.body)
    
        const result = await fetch(URL + `/${pathStr}`, #options.post)
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

    async pushDB(pathStr='', bodyObj){
        return await postDB(pathStr, bodyObj)
    }

    async removeDB(pathStr=''){
        await fetch(URL + `/${pathStr}`, #options.remove)
    
        return true
    }
}
/** 
GET	Gets the db. Returns { "ok": true, "data": <data> } - Takes no body
POST	Sets the db to the body of the request. The request must have the header Content-Type set to application/json.
DELETE	Deletes a key from the db. If you do not specify a path (e.g. <token>/key), the whole database will be emptied!
PUT	An alias of the POST request.
*/


