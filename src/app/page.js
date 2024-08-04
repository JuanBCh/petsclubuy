import MainCards from "@/ui/mainCards";

export default function Home() {
  const cards = [
    {
      imgSrc: "/main/pedidos.jpeg",
      imgAlt: "Agregar pedidos",
      title: "Agregar Pedidos",
      link: "/drive",
    },
    {
      imgSrc: "/main/crear.jpeg",
      imgAlt: "Ver pedidos",
      title: "Ver Pedidos",
      link: "/pedidos",
    },
    {
      imgSrc: "/main/stock.jpeg",
      imgAlt: "Stock",
      title: "Stock",
      link: "/stock",
    },
  ];
  return (
    <main className="flex flex-col justify-around items-center my-5">
      {cards.map((i, k) => {
        return (
          <MainCards
            key={k}
            imgSrc={i.imgSrc}
            imgAlt={i.imgAlt}
            title={i.title}
            link={i.link}
          />
        );
      })}
    </main>
  );
}
