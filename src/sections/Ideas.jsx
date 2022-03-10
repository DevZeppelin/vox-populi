import MainCard from "../components/MainCard";

const Fourth = () => {
  return (
    <div>
      {" "}
      <h2 className="m-4 p-4 mt-16 text-2xl text-center uppercase ">
        Ideas de proyectos de Mejora
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:px-6">
<MainCard
  children="El mejor sistema educativo del mundo"
  src="/p-ejecutivo.png"
  text="Un  siostema educativo libre y eficiente en donde los amestros sean respetados y los alumnos sean felices aprendiendo y preparandose para el mundo real que nos toca afrontar en este siglo XXI"
/>
<MainCard
  children="Bitcoin como Reserva/Tesoro Nacional"
  src="/p-ejecutivo.png"
  text="Pasar el total de reservas del país a la moneda digital Bitcoin, ya que es un bien escaso y en un futuro podría significar un poder económico global que posicione a la Argentina como potencia económica."
/>
        <MainCard
          children="Deflación - Bitcoin como respaldo de los pesos"
          src="/p-ejecutivo.png"
          text="Al estar el total de la reserva del país en Bitcoin, cada peso argentino estaría respaldado por esta moneda, lo que haría imposible imprimir nuevos pesois, si no se ha aumentado la base monetaria de Bitcoin en reserva."
        />
        <MainCard
          children="Trabajos comunitarios por puntos"
          src="/p-ejecutivo.png"
          text="Sistema de puntos que incentive a los ciudadanos sin trabajo a conseguir puntos útiles y valioso para la sociedad, lo que a posterioir les permitirá conseguir trabajos, prestamos o confianza."
        />
        <MainCard
          children="Ejército de programadores, Argentina potencia intelectual"
          src="/p-ejecutivo.png"
          text="Campaña intensiva de programadores, ya que el país ha sido estafado durante tantos añois por los políticos, empezar a aumentar el capital intelectual remodelando y creando el mejor sistema educativo del mundo"
        />
        <MainCard
          children="Sistemas adminsitrativos de Código Abierto para mejorar el mundo"
          src="/p-ejecutivo.png"
          text="La mejor forma de empezar es construyenbdo sistemas pequeñois que sirvan para administrar instituciones pequeñas, pero que sean escalables para lograr utilizar el mismo sistema base ya sea para un municipio como para un estado completo"
        />
        <MainCard
          children="El mejor sistema de cárceles del mundo"
          src="/p-ejecutivo.png"
          text="Implementear cárceles escuelas en donde los ciudadanos castigados por sus crímenes encuentren la posibilidad de crecer intelectualmente y lograr retribui el daño ocasionado a la sociedad, mediante tareas intelectuales o comunitarias. Buscar el equilibrio de la justicia a través del pueblo."
        />
      </div>
    </div>
  );
};

export default Fourth;
