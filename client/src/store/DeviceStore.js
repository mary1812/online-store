import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
  constructor(){
    this._types=[
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'}
    ]
    this._brands =[
      {id:1, name:'Samsung'},
      {id:1, name:'iPhone'}
    ]
    this._devices=[
      {id:1, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:2, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:3, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:4, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:5, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
    ]
    makeAutoObservable(this)
  }

  setTypes(types){
    this._types = types
  }
  setBrands(brands){
    this._brands = brands
  }
  setDevices(devices){
    this._devices = devices
  }

  get types(){
    return this._types
  }
  get brands(){
    return this._brands
  }
  get devices(){
    return this._devices
  }
}