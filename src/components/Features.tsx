import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Atividades",
    description:
      "Crie provas e atividades personalizadas com IA, prontas para imprimir e aplicar.",
    image: image4,
  },
  {
    title: "Espaços",
    description:
      "Crie espaços de estudo, salve seus materiais e compartilhe com facilidade.",
    image: image3,
  },
  {
    title: "Tarefas",
    description:
      "Crie tarefas To-Do com IA, otimizando seu aprendizado ou ensino.",
    image: image,
  },
];

const featureList: string[] = [
  "Plano de aula/estudo",
  "Gerar simulados",
  "Correção de questões",
  "Analise de redação",
  "Gerar imagem",
  "Resumir assunto",
  "Digitalizar imagem ou documento",
  "Gerar slides",
  "E muito mais"
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Nossas {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Ferramentas e recursos
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
