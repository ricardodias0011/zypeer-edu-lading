import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import mobileLight from "../assets/mobile-light.png";
import mobile from "../assets/mobile.png";
import { useTheme } from "./theme-provider";
import { JSX } from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Facil e simples",
    description:
      "Uma experiência fácil e intuitiva, projetada para otimizar seu tempo e esforço, tornando cada tarefa mais eficiente e prazerosa.",
    icon: <ChartIcon />,
  },
  {
    title: "Cabe no seu bolso",
    description:
      "Foi criado para ser fácil, simples e acessível, proporcionando uma experiência sem complicações e ao seu alcance.",
    icon: <WalletIcon />,
  },
  {
    title: "Tarefas automatizadas",
    description:
      "Aprendizado automatizado, como mágica, a zypeer transforma seu processo de estudo em algo ágil e eficiente.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  const { theme } = useTheme();
  return (
    <section id="app-mobile" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Aplicativo{" "}
            </span>
            moderno
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Um app moderno com uma interface inovadora, simples e mágica.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={theme === 'dark' ? mobile : mobileLight}
          className="w-[300px] md:w-[400px] lg:w-[400px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
