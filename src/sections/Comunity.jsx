import MainCard from "../components/MainCard";
const Second = () => {
  return (
    <div>
      <h2 className="m-4 p-4 mt-12 text-2xl text-center uppercase">
        Acciones a desarrollar en comunidad
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:px-6">
        <MainCard
          children="Armado de listas"
          src="/listas.png"
          text="Este sistema enlista a todos los políticos en una base de datos púublica donde quedan plasmadas todas sus decisiones políticas, logros y delitos. Esto ayuda a los votantes a conocer a los políticos por sus decisiones y acciones y no por sus promesas. Además la plataforma permite a  los usuarios proponer candidatos y armar listas virtuales más afines a los intereses populares, y colocando candidatos conocidos por sus acciones."
        />
        <MainCard
          children="Simplificación de leyes"
          src="/leyes.png"
          text="Esta plataforma propone juntar a todos los abogados nacionales en una gran misión revoluicionaria: Revisar el sistema de leyes, y reformarlo en una versioón mucho más simplificada en donde todos los ciudadanos puedan participar de él (Hoy en día existen una 70mil leyes en el sistema actual, y son tan engañosas que solo abogados o jueces pueden jugar ese juego, haciendolo hermético para el resto de la población)"
        />
        <MainCard
          children="Armado de presupuesto nacional"
          src="/presupuesto.png"
          text="Los ciudadanos participan activamente en la elaboración y cumplimiento del presupuesto, también en las prioridades en donde es más importante inyectar el dinero recaudado por la suma del trabajo d etodo el país."
        />
        <MainCard
          children="Prioridad de leyes"
          src="/prioridad-leyes.png"
          text="Este sistema sse anexa al de simplificación de leyes, en donde los ciudadanos votan sobre cuales son los temas más importantes para la sociedad, por lo tanto los temas más sensibles y urgentes tendrán un tratamiento prioritario."
        />
      </div>
    </div>
  );
};

export default Second;
