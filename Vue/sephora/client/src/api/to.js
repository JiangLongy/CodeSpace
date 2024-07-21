import {post} from './index'

export function toHome() {
  return post('/home').then(res=> res.data)
}

export function toBars(){
    return post('/bars').then(res=>res.data)
}

export function toCommunity(){
    return post('/community').then(res=>res.data)
}

export function toBag(){
    return post('/bag').then(res=>res.data)
}

export function toMine(){
    return post('/mine').then(res=>res.data)
}