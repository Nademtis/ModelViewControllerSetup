"use strict"

import Model from "../model/model.js"
import View from "../view/view.js"

//import Model from "/model.js"
//import View from "/view.js"

export default class Controller {
    constructor() {
        this.model = new Model()
        this.view = new View()
    }
    init() {
        console.log("hi from controller");
        this.view.sayHello()
        this.model.sayHello()
    }

}