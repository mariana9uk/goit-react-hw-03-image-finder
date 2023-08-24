import {Searchbar}from "./Searchbar"
import {ImageGallery}from "./ImageGallery"
import { Component } from "react"

export class App extends Component {
state={}
  render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
 <Searchbar  />
 <ImageGallery /> 

    </div>
  );
}};
