import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-3xl font-bold ">
            Aprendizado
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              inteligente e prático {" "}
            </span>
            para todos.
          </h2>
          <p className="text-muted-foreground text-md mt-4 mb-8 lg:mb-0">
            A Zypeer é um app que auxilia estudantes e professores. Estudantes têm acesso a ferramentas de IA personalizadas, simulados e organização de estudos. Já os professores, além das ferramentas, podem criar atividades impressas.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" onClick={() => {
            window.open("https://edu.zypeer.com.br/auth/register", "_blank")
          }}>Começe grátis</Button>
          <a href="/#features">
            <Button
              variant="outline"
              className="w-full md:w-auto"
            >
              Ferramentas
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
};
