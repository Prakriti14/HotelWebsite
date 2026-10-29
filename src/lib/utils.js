export const iso = (d) => d.toISOString().slice(0, 10);
export const addDays = (n) => new Date(Date.now() + n * 864e5);
export const eyebrow = "text-xs tracking-[.3em] uppercase text-acc";