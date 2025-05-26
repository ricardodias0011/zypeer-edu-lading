import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import rocket from "../assets/rocket-stars.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src={rocket}
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Zypeer</CardTitle>
            <CardDescription>@zypeereducacao</CardDescription>
          </div>
        </CardHeader>

        <CardContent>O universo é um lugar onde a matemática se torna poesia.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          {/* <img
            src={icon}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-md w-24 h-24 aspect-square object-cover"
          /> */}
          <CardTitle className="text-center">Aprendizado eficiente</CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p>
            Com a tecnologia de IA integrada, a Zypeer personaliza seu aprendizado, ajustando os conteúdos ao seu ritmo✨
          </p>
        </CardContent>

        <CardFooter>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Grátis
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Mais popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">R$0</span>
            <span className="text-muted-foreground"> /500 créditos</span>
          </div>

          <CardDescription>
            Tenha creditos 500 créditos grátis ao cadastrar pela primeira vez
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full" onClick={() => {
            window.open("https://edu.zypeer.com.br/auth/register", "_blank")
          }}>Começe agora</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Simulados", "Atividades", "Tarefas", "Diversas ferramentas de IA"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Espaços mágicos</CardTitle>
            <CardDescription className="text-md mt-2">
              Crie espaços de estudos com ferramentas de Inteligência Artificial
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
