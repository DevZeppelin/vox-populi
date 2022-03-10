import NavBar from "./components/NavBar";
import First from "./sections/First";
import Fourth from "./sections/Ideas";
import Second from "./sections/Comunity";
import Third from "./sections/Economy";
import BlackBanner from "./components/BlackBanner";

function App() {
  return (
    <>
      <NavBar />

      <h1 className="m-6 p-3 text-6xl font-bold text-center md:text-left">
        <span className="text-orangi">Vox</span> Populi
      </h1>
      <div className="flex flex-col-reverse md:flex-row ">
        <div className="text-left pb-8 mx-8 md:mx-32 text-lg w-3/5">
          <p className="md:mx-6">
            Es un proyecto paralelo al sistema de gobierno actual, en donde la
            masa intelectual global puede ir construyendo, entre todos y de a
            poco, sistemas que mejoren procesos actualmente deficientes.
          </p>
          <p className="md:mx-6">
            En este sistema el ciudadano de a pie tiene el poder de decidir
            sobre su futuro. Mientras más se unan en el proyecto, más
            descentralizados serán los sistemas y más democráticos serán los
            cambios.
          </p>
          <h2 className="font-bold italic mt-4 text-xl">La Misión:</h2>
          <p className="md:mx-6">
            Lograr desarrollar sistemas funcionales capaces de solucionar
            problemas actuales y mejorar la gestión de los recursos del país y
            la toma de decisiones políticas.
          </p>
        </div>
        <div className="w-3/4 md:w-2/5 flex justify-center mx-auto  pb-4 md:pr-16 md:pb-8">
          <img src="/logo.png" className="text-orangi animate-pulse" />
        </div>
      </div>

      <BlackBanner
        text="Aplicaciones y sistemas 
        construídos por la comunidad pueden aportar valor tecnológico e
      intelectual a cualquiera de los poderes polìticos actuales"
      />

      <First />

      <BlackBanner
        text="El código abierto pone a las comunidades a trabajar en soluciones
        comunes. Es por eso que todos ganan en reputación al contribuir a un
        código que hace un bien a la sociedad."
      />

      <Second />

      <BlackBanner
        text="Es importante convocar a todos los profesionales respectivos de cada
        rubro para contar con cerebros expertos capacitados para diseñar la
        mejor solución para los diferentes problemas"
      />

      <Third />

      <BlackBanner text="Un pilar para que esto funcione es la TRANSPARENCIA de todos los procesos, y el hecho de que sea abierto permite a todos la posibilidad de poder participar." />

      <Fourth />
    </>
  );
}

export default App;
