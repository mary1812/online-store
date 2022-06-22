import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
  constructor(){
    this._selectedBrand=""
    this._types=[
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Ноутбуки'},
      {id: 4, name: 'Телевизоры'},
    ]
    this._brands =[
      {id:1, name:'Samsung'},
      {id:2, name:'iphone'},
      {id:3, name:'Lenovo'},
      {id:4, name:'Xiaomi'},
      {id:5, name:'Meizu'}

    ]
    this._devices=[
      {id:1, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:2, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:3, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:4, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
      {id:5, name:'13pro', price: 150000, rating: 5, img:'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pro-max-graphite-select.png'},
    ]
    this._selectedType = {}
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
  setSelectedType(type){
    this._selectedType = type
  }
  setSelectedBrand(brand){
    this._selectedBrand = brand
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
  get selectedType(){
    return this._selectedType
  }
  get selectedBrand(){
    return this._selectedBrand
  }
}