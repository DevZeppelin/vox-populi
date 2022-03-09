import MainCard from "../components/MainCard";

const Third = () => {
  return (
    <div>
      <h2 className="m-4 p-4 mt-16 text-2xl text-center uppercase ">
        Economía y dinero argentino
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:px-6">
        <MainCard
          children="Base Monetaria Total"
          src="/p-ejecutivo.png"
          text="Un sistema principal se encargará de hacer la economía del país transparente, por lo que es muy importante que los ciudadanos tengan control y conocimiento sobre el dinero nuevo que se inyecta a la economía, para qué se utiliza, y controlando la emisión también va a poder controlarse la inflación."
        />
        <MainCard
          children="Reserva/Tesoro Nacional"
          src="/p-ejecutivo.png"
          text="Siendo que el peso argentino ha perdido la confianza de los ciudadanos y del mundo, sería importante recuperar reservas de oro, y lo demás migrar a una moneda deflacionaria como lo es Bitcoin, ya que el trabajo de todos agrandaría ese tesoro, y con un tesoro más grande mayor será la confianza y la presencia del país en la Geopolítica."
        />
        <MainCard
          children="Emisión Monetaria (Impresiòn de billetes)"
          src="/p-ejecutivo.png"
          text="Una vez acomodada la administración financiera del país, será más fácil controlar la emisión de billetes y demostrar al ciudadano que se comienza a respetar al peso argentino al hacer uso responsable del manejo del mismo. Una vez logrado una buena base de reservas, el peso argentino podría respaldarse en el total de la reserva y mientras esta aumente de valor, el peso argentino aumentará con ella."
        />
        <MainCard
          children="Control de Inflación"
          src="/p-ejecutivo.png"
          text="Una vez habiendo migrado a una economía deflacionaria se recuperará la cultura del ahorro, la inflación desaparecería, y por fin se recuperaría la confianza en nuestra moneda. Es muy importante la transparencia y descentralización de todo el sistema fionanciero a través de estos sistemas de código abierto."
        />
      </div>
    </div>
  );
};

export default Third;
