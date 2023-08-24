import Image from "next/image";
import Button from "../components/Button";
import iphone from "../public/iphone-13.jpeg";
import React from "react";

// https://tailwindcss.com/docs/installation

// run npm install

//  create the component for the product details
export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const hero = data.slice(0, 3);
  //gets data from the json, runs at build time 

  return{
    props: {hero: hero}
    //passed data from aysnc function to the Hero funct
  }
}

const Hero = ({hero}) => {
//hero var is initialized

  return (
    <div className="mx-auto">
      <Image src={iphone} 
        alt="iphone" 
        width={200}
        mx-auto />
      <h1 className="text-black text-4xl font-bold pt-5 pb-5"> iPhone 13</h1>
      <p className="text-black text-1xl pt-5 pb-5"> 6.1-inch Super Retina XDR display,
      A curved notched design with a rounded edge and vibrant color.</p>
      <p>One year warranty included and free delivery within Dar-es-salaam</p>
      <h2 className="text-black text-2xl font-bold pt-5 pb-5"> Tshs 2,000,000</h2>
      {hero && hero.map(hero => (
        <div key={hero.id}>
          <a>
            <h4>{hero.name}</h4>
          </a>
        </div>
      ))}
      <Button
        className="bg-green-600 text-white px-6 margin-left: 0;"
        onClick={() => console.log("clicked")}
      >
        Buy now
      </Button>
      
    </div>
  );
};

export default Hero;
