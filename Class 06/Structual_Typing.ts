// TypeScript is a Structural Type System. A structural type system means that when comparing types, TypeScript only takes into account the members on the type.

import { log } from "console";
import inquirer from "inquirer";

// This is in contrast to nominal type systems, where you could create two types but could not assign them to each other. See example:nominal-typing

// For example, these two interfaces are completely transferrable in a structural type system:

interface Ball {
    diameter: number;
  }
  interface Sphere {
    diameter: number;
  }
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;
// Another example
  interface Bat {
    length : number,
    Thickness : number,
    company : string,
    name : string
  }
  interface Hockey{
    lenght : number,
    company : string,
    Thickness : number
    name : string
  }
  let bat : Bat = {length:58, company:"TAURO Zing",Thickness:55,name:"bat"}
  let hockey : Bat = {length:48, company:"Drive(Duo Drive)",Thickness:15,name:"hockey"}

  // so the both interfaces are same . we can say that 
  bat = hockey;
  hockey = bat; // Becasuse both have same interface/properties


  // If we add in a type which structurally contains all of the members of Ball and Sphere, then it also can be set to be a ball or sphere.
  
  interface Tube{
    diameter : number,
    length : number
  }
//   let tube : Tube = {diameter:22,length:5}
    let tube : Tube = { diameter : 5, length: 6}
  // tube = ball; error
  ball = tube
  // Because a ball does not have a length, then it cannot be assigned to the tube variable. However, all of the members of Ball are inside tube, and so it can be assigned.
  // TypeScript is comparing each member in the type against each other to verify their equality.
  
  