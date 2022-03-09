import MainCard from "../components/MainCard";

const First = () => {
  return (
    <>
      <h2 className="p-4 mt-16 px-16 text-2xl text-center">
        ¿Como la tecnología y el código abierto pueden mejorar la política y el
        manejo de un país?
      </h2>
      <p className="p-4 px-16 text-center italic">
        <span className="font-bold text-orangi">Aclaración:</span> Todos los
        sitemas, aplicaciones y plataformas dispuestas en esta web, deben
        funcionar de manera integrada, perteneciendo básicamente a un "Sistema
        madre" capaz de conectar y comunicar a todos los sistemas inferiores.
        Este sistema principal no puede ser centralizado ni depender de un grupo
        reducido de personas ni de una compañía, sino que cualquier cambio debe
        ser consensuado por una mayoría diversificada y sin intereses
        concentrados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 md:px-12">
        <MainCard
          children="Poder Ejecutivo"
          src="/p-ejecutivo.png"
          text="Plataforma ayudada con Inteligencia Artificial, que estudia las decisiones políticas históricas del país y en base al criterio formado por los ciudadanos, sugiere y ayuda en la toma de decisiones políticas que acerquen al país al futuro dseseado."
        />
        <MainCard
          children="Poder Legislativo"
          src="/p-legislativo.png"
          text="Senado virtual en donde los usuarios(ciudadanos) se reúnen para debatir leyes, armas plebicitos, y decidir la importancia y prioridad de los problemas que necesitan resolverse primero. (Ver también el proyecto de simplificar leyes para que todos puedan participar en este sistema)"
        />
        <MainCard
          children="Poder Judicial"
          src="/p-judicial.png"
          text="Juzgado virtual en donde los ciudadanos se reunes para debatir y participar en el sistema judicial, tratando primero las causas de mayor importancia, proponiendo sentencias para los diferentes tipos de crímenes, y definiendo trabajos comunitarios para crimenes menores (Ver también 'Sistema eficiente de Cárceles')"
        />
        <MainCard
          children="'Masa pensante'"
          src="/p-popular.png"
          text="Este espacio propone unir a los ciudadanos en pos de idear y proponer nuevas herramientas que ayuden a mejorar la calidad de vida de todos, y también a la gestión del país. A través de eventos didácticos se buscará talentos dispuestos a aportar intelecto para cosntruir y mejorar las herramientas."
        />
      </div>
    </>
  );
};

export default First;
