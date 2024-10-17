import FlowerIcon from "@/public/icons/FlowerIcon";
export default function Intro() {
  return (
    <div className="rounded-3xl bg-primary h-full relative">
      <div className="absolute right-5 top-5">
        <FlowerIcon />
      </div>
      <p className="absolute bottom-10 left-10 text-4xl font-bold w-4/5">
        Artist Redefining Architecture with AI-Driven Design
      </p>
    </div>
  );
}
