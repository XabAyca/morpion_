export default class Save {

  constructor() {
    this.value = []
  }

  save = (data) => {
    localStorage.setItem('MyGame',JSON.stringify(data))
  }

  getGame = () => {
    return JSON.parse (localStorage.getItem('MyGame')) 
  }
}