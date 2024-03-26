import React from "react";
import Poke from "../assets/pokemon.png";
import Word from "../assets/wordcount.png";
import Number from "../assets/numbers.png";

function about() {
  return (
    <div className="fea">
      <div>
        <h1 className="head2">Features Of Reacoo</h1>
      </div>
      <div className="poke">
        <img src={Poke} alt="" className="headi1" />
        <h3 className="name1">Poke API</h3>
        <p className="pokecon">
          This website provides a RESTful API interface to highly detailed
          objects built from thousands of lines of data related to Pokémon. We
          specifically cover the video game franchise. Using this website, you
          can consume information on Pokémon, their moves, abilities, types, egg
          groups and much, much more.
        </p>
        <a href="#" className="linkone">Read More</a>
      </div>
      <div className="word">
        <img src={Word} alt="" className="headi2" />
        <h3 className="name1">Term Finder</h3>
        <p className="pokecon">
          The Term Finder API  allows developers to search for words in text by
          providing a term and receiving a list of  dictionaries containing the 
          original word, normalized version of the word, <br /> and an array of suggestions  
          for that word. 
        </p>
        <a href="#" className="linkone">Read More</a>
      </div>
      <div className="number">
        <img src={Number} alt="" className="headi3" />
        <h3 className="name1">Text To Audio Convertor</h3>
        <p className="pokecon">
         The Text To Audio Convertor API  converts written text into audio  
         allowing applications to make text-to-speech available to users without  
         requiring them to manually listen to it. <br /> You can use our API to convert   
         any given <br /> text into speech.
        </p>
        <a href="#" className="linkone">Read More</a>
      </div>
    </div>
  );
}

export default about;
