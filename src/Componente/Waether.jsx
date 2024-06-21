import { useState } from "react";
import sunset from "../img/sunset.jpg";

const Waether = () => {
  const [name, setName] = useState("Rio de Janeiro");

  const [weather, SetWeather] = useState(null);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const citySearch = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=234a6641e2e542bb925213945232502&q=${name}&lang=pt` 
    )
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        SetWeather(data);
        console.log(data);
      });
  };

  return (
    <div
    className="bg-cover bg-center bg-no-repeat h-screen bg-[url('../img/sunset.jpg')]  overflow-hidden"
      style={{ backgroundImage: `url(${sunset})` }}
    >
      <nav>
        <header className="bg-[#ffffff0e] w-screen text-center  pb-5 pt-5 text-[#f3f3f3] font-extralight text-3xl rounded-lg ">
          <h1> Previsão do Tempo</h1>
        </header>
        <main className="w-screen h-screen bg-[#ffffff00] flex justify-center items-center">
          <div className="h-[32rem] mb-[10rem]  w-[90rem] ml-10 rounded-sm text-start justify-center flex flex-col">
            <h1 className="font-semibold ml-2 sm:ml-0  text-3xl px-4 text-[#ffffff] sm:text-4xl">
              {" "}
              Verifique agora a previsão do tempo da sua cidade!{" "}
            </h1>
            <h1 className="font-bold sm:text-2xl px-4 ml-2 sm:ml-0 text-1xl text-[#000000] py-10">
              {" "}
              Digite o nome da sua cidade no campo abaixo{" "}
              <br className="ml-10" /> e em seguida clique em pesquisar{" "}
            </h1>
            <input
              className="border border-gray-400 p-2 sm:w-[30rem] w-[15rem] ml-5 sm:ml-3 rounded-md focus:outline-none focus:border-blue-400 focus:shadow-outline-indigo"
              onChange={nameChange}
              value={name}
            />
            <button
              onClick={citySearch}
              className="hover:bg-blue-500 duration-200 rounded-md w-[6rem] ml-5 sm:ml-3 py-2 font-semibold mt-4 text-white bg-[#0000009d]"
              >
              {" "}
              Pesquisar
            </button>
            {weather ? (
              <div className="mt-10 ml-3">
                <div className="bg-gray-100 p-4 rounded-xl sm:w-[30rem] mr-10 w-[22rem]">
                  <div className=" flex items-center   ">
                   <h1 className="text-1xl font-bold ">  A previsão de hoje é:</h1>  <h2 className="pl-2 text-[#000000]"> {weather.current.condition.text} </h2>  
                  </div>
                  <img
                    className="w-20 h-20 mt-2"
                    src={weather.current.condition.icon}
                    alt={weather.current.condition.text}
                  />
                  <div className="mt-2">
                    Temperatura: {weather.current.temp_c}ºC
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </nav>
    </div>
  );
};

export default Waether;
