import React from "react";
import { type } from "@testing-library/user-event/dist/type";

export default function Meme() {
  const [meme, setmeme] = React.useState({
    randomImage: "https://i.imgflip.com/43a45p.png",
    topText: " ",
    bottomText: " ",
  });

   const[allmemes,setallMemes]=React.useState([])

   React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setallMemes(data.data.memes))
   },[])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allmemes.length);
    const url = allmemes[randomNumber].url;
    setmeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    const{name,value}=event.target
    setmeme(prevMeme=>({
      ...prevMeme,
      [name] : value
    }))
  }

  return (
    <main>
      <div className="border-black  grid gap-4 grid-cols-2 pt-14 pb-6">
        <input
          className="h-14 w-1/2  bg-gray-200 rounded-lg pl-2 "
          style={{ position: "relative", left: "25%" }}
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="h-14 w-1/2  bg-gray-200 rounded-lg pl-2 "
          style={{ position: "relative", left: "25%" }}
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center ">
        <button
          className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 h-14 w-3/4  rounded-lg text-white text-xl px-2 py-2 font-semibold cursor-pointer"
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
      <div className=" relative flex justify-center items-center pt-7 pb-14">
        <img className=" h-56 lg:h-96 " src={meme.randomImage} />
        <div className="absolute top-8 left-0 right-0 bottom-20 flex flex-col justify-between items-center text-white text-3xl lg:text-4xl font-extrabold">
          <h2 className=" mt-2  bg-black bg-opacity-50 px-2 rounded ">{meme.topText}</h2>
          <h2 className=" mb-2 bg-black bg-opacity-50 px-2 rounded ">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
