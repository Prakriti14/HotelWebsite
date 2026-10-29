import Counter from "../ui/Counter";

export default function Stats() {
  return (
    <section className="py-20 border-b border-line">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <Counter to={180} label="Rooms & suites" d={0} />
        <Counter to={12} label="Restaurants & bars" d={100} />
        <Counter to={25} label="Years of service" d={200} />
        <Counter to={50000} label="Guests hosted" d={300} />
      </div>
    </section>
  );
}