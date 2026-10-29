export default function Tabs({ items, value, onChange }) {
  return (
    <div className="flex flex-wrap justify-center mb-14">
      {items.map((t) => (
        <button key={t} onClick={() => onChange(t)} className={`tab ${t === value ? "on" : ""}`}>
          {t}
        </button>
      ))}
    </div>
  );
}