import FaqCard from "./ui/faqCard";
import { FAQs } from "../data/dictionary";

export default function FaqArea() {
  return (
    <div className="grid gap-3">
      {FAQs.map((c) => (
        <FaqCard key={c.id} Question={c.question} Answer={c.answer} />
      ))}
    </div>
  );
}
