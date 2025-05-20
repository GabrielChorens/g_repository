export default {
  title: "12 Mejora los tests aplicando el patrón Object Mother",
  videoId: "IC1ietl0n28",
  notes: [
    {
      type: "text",
      content:
        "El patrón Object Mother nos ayuda a simplificar y agilizar la creación de datos fake en nuestros tests.",
    },
    {
      type: "text",
      content:
        "En lugar de tener que crear manualmente cada instancia de datos o hardcodear valores en nuestros tests, usaremos funciones que generan objetos, apoyándonos en librerías como Faker para la generación de valores o Fishery para las funciones factory.",
    },
    { type: "link", content: "placeholder" },
    {
      type: "code",
      content: `import { Faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { Course } from "../../domain/Course";

const CourseFactory = Factory.define<Course>(() => ({
    id: Faker.datatype.uuid(),
    title: Faker.lorem.sentence(),
    imageUrl: Faker.image.imageUrl()
}));

export const CourseMother = {
    create: (params?: Partial<Course>): Course => {
        return CourseFactory.build(params);
    },
    createList: (length = 1): Course[] => {
        return CourseFactory.buildList(length);
    }
};`,
    },
    {
      type: "text",
      content:
        "Más allá de tener mayor agilidad a la hora de crear datos para nuestros tests, la aleatoriedad de los datos también nos aporta robustez y fiabilidad, ya que no estamos testeando siempre con los mismos valores.",
    },
    {
      type: "text",
      content:
        "Otro beneficio del patrón Object Mother es que mejora la legibilidad de nuestros tests. Al utilizar objetos que representan conjuntos de datos, el código se vuelve más conciso y fácil de entender:",
    },
    {
      type: "code",
      content: `// Sin Object Mother
const titleInput = screen.getByLabelText(/title/i);
userEvent.type(
    titleInput,
    "Lorem ipsum dolor amet deserunt. Tempor minim voluptate tempor dolor aute consectetur dolore."
);

const Lorem nisi est illum cupidatat sint cupidatat nostrud adipisicing eu sunt labore adipisicing
labore. Sint qui cupidatat nemo fugiat ex est consectetur aute ut ipsum nostrud do duis esse. Aute
esse id tempor do deserunt ex ea nulla deserunt ut laboris quis ea."
);

// Con Object Mother
const { title } = CourseMother.create({ title });

const titleInput = screen.getByLabelText(/title/i);
userEvent.type(titleInput, invalidTitle);`,
    },
  ],
};
