import NavBar from "./components/NavBar";
import First from "./sections/First";
import Fourth from "./sections/Ideas";
import Second from "./sections/Comunity";
import Third from "./sections/Economy";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="m-6 p-3 text-6xl font-bold">
        <span className="text-orangi">Vox</span> Populi
      </h1>

      <div className="text-left pb-8 mx-8 md:mx-72 text-lg">
        <p className="md:mx-6">
          Es un proyecto paralelo al sistema de gobierno actual, en donde la
          masa intelectual global puede ir construyendo, entre todos y de a
          poco, sistemas que mejoren procesos actualmente deficientes.
        </p>

        <p className="md:mx-6">
          En este sistema el ciudadano de a pie tiene el poder de decidir sobre
          su futuro. Mientras más se unan en el proyecto, más descentralizados
          serán los sistemas y más democráticos serán los cambios.
        </p>
        <h2 className="font-bold italic mt-4 text-xl">Mi Misión:</h2>
        <p className="md:mx-6">
          Lograr desarrollar sistemas funcionales capaces de solucionar
          problemas actuales y mejorar la gestión de los recursos del país y la
          toma de decisiones políticas.
        </p>
      </div>

      <h2 className="p-4 px-16 text-xl text-center bg-black text-white ">
        Nuestras aplicaciones y sistemas aportan valor tecnológico a cualquiera
        de los poderes actuales
      </h2>

      <First/>
      <Second/>
      <Third/>
      <Fourth/>   

    </>
  );
}

export default App;
