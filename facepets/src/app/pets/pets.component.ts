import { Component, OnInit } from '@angular/core';
import {Pet} from "../interfaces/pet";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  nombre = "Coby";
  pets : Pet[];
  verMensaje = false;
  constructor() {
    let pet1: Pet = {
      id: 1,
      nombre: 'Coby',
      tipo: 'perro'
    };
    let pet2: Pet = {
      id: 2,
      nombre: 'Toby',
      tipo: 'conejo'
    };
    let pet3: Pet = {
      id: 3,
      nombre: 'Trosqui',
      tipo: 'perro'
    };
    let pet4: Pet = {
      id: 4,
      nombre: 'Alvin',
      tipo: 'gato'
    };
    this.pets = [pet1, pet2, pet3, pet4];
  }

  ngOnInit() {
  }

  showMensaje(){
    this.verMensaje = !this.verMensaje;
  }
  
  emojiPet(tipo){
    switch (tipo) {
      case 'perro':{
        return '🐶';
      }
      case 'gato':{
        return '😺';
      }
      case 'conejo':{
        return '🐰';
      }
    }
    return '🤮';
  }
}
