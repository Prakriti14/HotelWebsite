import Rv from "./Rv";
import { eyebrow } from "../../lib/utils";

export default function Heading({ eyebrowText, title, sub }) {
  return (
    <Rv className="text-center mb-12">
      <p className={eyebrow}>{eyebrowText}</p>
      <h2 className="font-serif text-5xl mt-3">{title}</h2>
      {sub && <p className="text-mut mt-3 text-sm">{sub}</p>}
    </Rv>
  );
}