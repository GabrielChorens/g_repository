import hexagonalFrontend from "./courses/hexagonal-frontend.js";
import agregados from "./courses/agregados.js";
import proyecciones from "./courses/proyecciones.js";
import awsEc2 from "./courses/aws-ec2.js";
import goHexagonal from "./courses/go-hexagonal.js";
import auditoriaHemav from "./courses/auditoria-hemav.js";
import automatizaTuFlujoDeTrabajoConGithubActions from "./courses/automatiza-tu-flujo-de-trabajo-con-githubactions.js";
import awsSqsComoColaDeMensajeria from "./courses/aws-sqs-como-cola-de-mensajeria.js";
import cache from "./courses/cache.js";
import casoPracticoAgregadosYReadModelEnDdd from "./courses/caso-practico-agregados-y-read-model-en-ddd.js";
import codeSmellsBloaters from "./courses/code-smells-bloaters.js";
import designPatternsCriteria from "./courses/design-patterns-criteria.js";
import patronesDeDisenoCQRS from "./courses/patrones-de-diseno-cqrs.js";

// Define your courses here
export const courses = [
  { type: "category", name: "All" },
  hexagonalFrontend,
  auditoriaHemav,
  agregados,
  proyecciones,
  awsEc2,
  goHexagonal,
  automatizaTuFlujoDeTrabajoConGithubActions,
  awsSqsComoColaDeMensajeria,
  cache,
  casoPracticoAgregadosYReadModelEnDdd,
  codeSmellsBloaters,
  designPatternsCriteria,
  patronesDeDisenoCQRS,
];
