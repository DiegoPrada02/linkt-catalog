import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import AppShell from "../components/AppShell";
import { useLanguage } from "../i18n/LanguageProvider";
import { contactCopy } from "../data/dictionary";
//import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
 // const [captchaToken, setCaptchaToken] = useState<string>("");

  // Generate dynamic subject based on name
  const subject = useMemo(() => {
    const clean = name.trim();
    return clean ? `Quote for ${clean}` : "Quote request";
  }, [name]);

 // const onHCaptchaVerify = (token: string) => {
  //  setCaptchaToken(token);
 // };

  //const onHCaptchaExpire = () => {
  //  setCaptchaToken("");
  //};

  return (
    <AppShell>
      <div className="contact-page">
        <div className="contact-card">
          {/* LEFT SIDE - Contact Info */}
          <div className="contact-info">
            <h3 className="contact-title">{t(contactCopy.infoTitle)}</h3>
            <p className="contact-text">{t(contactCopy.infoText)}</p>

            <div className="contact-list">
              <div className="contact-row">
                <MapPin className="contact-icon" />
                <div>
                  <div className="contact-meta">
                    {t(contactCopy.addressLabel)}
                  </div>
                  <p>{t(contactCopy.addressValue)}</p>
                </div>
              </div>

              <div className="contact-row">
                <Mail className="contact-icon" />
                <div>
                  <div className="contact-meta">
                    {t(contactCopy.emailLabel)}
                  </div>
                  <p>{contactCopy.emailValue}</p>
                </div>
              </div>

              <div className="contact-row">
                <Phone className="contact-icon" />
                <div>
                  <div className="contact-meta">
                    {t(contactCopy.phoneLabel)}
                  </div>
                  <p>{contactCopy.phoneValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="contact-form">
            <span className="contact-circle one" />
            <span className="contact-circle two" />

            <form
              className="contact-form-inner"
              autoComplete="off"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="51ba5711-db1a-4f65-8f8f-9fc33bbc740f"
              />

              {/* hCaptcha token (required field name)
              <input
                type="hidden"
                name="h-captcha-response"
                value={captchaToken}
              /> */}

              {/* Dynamic Subject */}
              <input type="hidden" name="subject" value={subject} />

              {/* Redirect to Home (auto detects local or production) */}
              <input
                type="hidden"
                name="redirect"
                value={typeof window !== "undefined" ? window.location.origin : ""}
              />

              <h3 className="contact-title contact-title--light">
                {t(contactCopy.formTitle)}
              </h3>

              {/* Name */}
              <div className="contact-field">
                <label className="contact-label" htmlFor="name">
                  {t(contactCopy.nameLabel)}
                </label>
                <input
                  id="name"
                  type="text"
                  name="Company Name"
                  className="contact-input"
                  placeholder={t(contactCopy.namePlaceholder)}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Phone */}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Message */}
              <div className="contact-field">
                <label className="contact-label" htmlFor="message">
                  {t(contactCopy.messageLabel)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-input contact-textarea"
                  placeholder={t(contactCopy.messagePlaceholder)}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* activate hCaptcha Component before production */}
              {/* <div className="my-5"><HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={onHCaptchaVerify}
                onExpire={onHCaptchaExpire}
              /></div> */}
              

              {/* Submit Button */}
              <button
                type="submit"
                className="contact-btn"
                //disabled={!captchaToken}
              >
                {t(contactCopy.sendButton)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
