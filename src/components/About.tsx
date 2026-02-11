import PageTitle from "./PageTitle";
import { pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();
  const about = pageTitles[1];

  return (
    <PageTitle
      title={t(about.title)}
      subtitle={t(about.subtitle)}
      extraContent={
        about.text ? <div className="text-sm leading-relaxed">{t(about.text)}</div> : null
      }
    />
  );
}
