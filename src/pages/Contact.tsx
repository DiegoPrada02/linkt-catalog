import { Mail, MapPin, Phone } from "lucide-react";
import AppShell from "../components/AppShell";
import { useLanguage } from "../i18n/LanguageProvider";
import { contactCopy } from "../data/dictionary";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <AppShell>
      <div className="contact-page">
        <div className="contact-card">
          {/* LEFT: info */}
          <div className="contact-info">
            <h3 className="contact-title">{t(contactCopy.infoTitle)}</h3>
            <p className="contact-text">{t(contactCopy.infoText)}</p>

            <div className="contact-list">
              <div className="contact-row">
                <MapPin className="contact-icon" />
                <div>
                  <div className="contact-meta">{t(contactCopy.addressLabel)}</div>
                  <p>{t(contactCopy.addressValue)}</p>
                </div>
              </div>

              <div className="contact-row">
                <Mail className="contact-icon" />
                <div>
                  <div className="contact-meta">{t(contactCopy.emailLabel)}</div>
                  <p>{contactCopy.emailValue}</p>
                </div>
              </div>

              <div className="contact-row">
                <Phone className="contact-icon" />
                <div>
                  <div className="contact-meta">{t(contactCopy.phoneLabel)}</div>
                  <p>{contactCopy.phoneValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="contact-form">
            <span className="contact-circle one" />
            <span className="contact-circle two" />

            <form className="contact-form-inner" autoComplete="off">
              <h3 className="contact-title contact-title--light">
                {t(contactCopy.formTitle)}
              </h3>

              <div className="contact-field">
                <label className="contact-label" htmlFor="name">
                  {t(contactCopy.nameLabel)}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="contact-input"
                  placeholder={t(contactCopy.namePlaceholder)}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="email">
                  {t(contactCopy.emailInputLabel)}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="contact-input"
                  placeholder={t(contactCopy.emailPlaceholder)}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="phone">
                  {t(contactCopy.phoneInputLabel)}
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="contact-input"
                  placeholder={t(contactCopy.phonePlaceholder)}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="message">
                  {t(contactCopy.messageLabel)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-input contact-textarea"
                  placeholder={t(contactCopy.messagePlaceholder)}
                />
              </div>

              <button type="submit" className="contact-btn">
                {t(contactCopy.sendButton)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
