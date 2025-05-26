import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F462FF]  to-[#b7b5ff] text-transparent bg-clip-text">
              Zypeer:
            </span>{" "}
            aprendizado
          </h1>{" "}
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#f17d27] via-[#f5abfa] to-[#F462FF] text-transparent bg-clip-text">
              Organizado
            </span>{" "}
            e eficiente
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Aprenda e ensine de forma inovadora com <strong>Zypeer</strong>, a IA que personaliza seu aprendizado e transforma o ensino! 🚀📚
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" onClick={() => {
            window.open("https://edu.zypeer.com.br/auth/register", "_blank")
          }}>Começe grátis</Button>

          <a
            href="#features"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Conheça os recursos
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
