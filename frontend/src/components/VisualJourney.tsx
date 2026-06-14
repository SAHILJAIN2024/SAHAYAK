import ParallaxImage from "./ParallaxImage";

export default function VisualJourney() {
  return (
    <section className="py-32">

      <div className="text-center mb-16">

        <div className="uppercase text-violet-400 text-xs tracking-[0.5em]">

          Journey

        </div>

      </div>

      <ParallaxImage
        src="/understand.jpg"
        title="UNDERSTAND"
        direction={1}
      />

      <ParallaxImage
        src="/plan.jpg"
        title="PLAN"
        direction={-1}
      />

      <ParallaxImage
        src="/execute.jpg"
        title="EXECUTE"
        direction={1}
      />

    </section>
  );
}