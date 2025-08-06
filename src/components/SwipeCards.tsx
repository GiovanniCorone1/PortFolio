import { useState, type Dispatch, type SetStateAction } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import img1 from "../assets/about1.webp";
import img2 from "../assets/about2.webp";
import img3 from "../assets/about3.webp";


type Card = {
  id: number;
  url: string | ImageMetadata;
};
const cardData: Card[] = [
  { id: 1, url: img1 },
  { id: 3, url: img3 },
  { id: 2, url: img2 },
];
const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData);

  return (
    <div
      className="relative h-[380px] w-full grid place-items-center"
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          url={card.url}
          setCards={setCards}
          index={index}
          total={cards.length}
        />
      ))}
    </div>
  );
};

type CardProps = {
  id: number;
  url: string | ImageMetadata;
  setCards: Dispatch<SetStateAction<Card[]>>;
  index: number;
  total: number;
};
const Card = ({ id, url, setCards, index, total }: CardProps) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = index === total - 1;
  const rotate = useTransform(() => {
    const offset = isFront ? 0 : index % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <motion.img
      src={typeof url === "string" ? url : (url as any).src}
      alt="Card"
      className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        position: "absolute",       // ahora se posiciona sobre el contenedor relative
        zIndex: isFront ? total : index,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.5)"
          : undefined,
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag={isFront ? "x" : false}
      // Opcional: si quieres arrastrar libremente, comenta o ajusta dragConstraints
      // dragConstraints={{ left: -300, right: 300 }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;
