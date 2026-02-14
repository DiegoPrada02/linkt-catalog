import FaqCard from "./ui/faqCard";
import { FAQs } from "../data/dictionary";

export default function FaqArea() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {FAQs.map((faq) => (
        <FaqCard key={faq.id} Question={faq.question} Answer={faq.answer} />
      ))}
    </div>
  );
}