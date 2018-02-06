import {get} from '../src'

get('index.html').then(r => {
    console.info(r)
}).catch(e => {
    console.info(e)
})