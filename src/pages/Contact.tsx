import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Building2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { contactCopy as copy } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
  const contactCopy = copy;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [captchaToken, setCaptchaToken] = useState<string>("");

  // Generate dynamic subject based on name
  const subject = useMemo(() => {
    const clean = name.trim();
    return clean ? `Quote for ${clean}` : "Quote request";
  }, [name]);

  const onHCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const onHCaptchaExpire = () => {
    setCaptchaToken("");
  };

  return (
    <AppShell>
      <div className="min-h-screen flex items-center justify-center px-4 py-5 sm:py-10">
        <PageTitle
          title={t(contactCopy.formTitle)}
          subtitle={t(contactCopy.infoText)}
          extraContent={
            <div className="w-full max-w-6xl mx-auto mt-12">
              {/* Main Card */}
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 rounded-3xl border border-(--ink-12) bg-white shadow-2xl overflow-hidden">
                {/* LEFT SIDE - Contact Info */}
                <div className="lg:col-span-2 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 p-8 sm:p-10">
                  <h3
                    className="text-2xl font-black text-(--ink) mb-3"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {t(contactCopy.infoTitle)}
                  </h3>
                  <p
                    className="text-sm text-(--ink-72) leading-relaxed mb-8"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t({ en: "Get in touch with our team", es: "Contáctanos" })}
                  </p>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="group flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-(--ink-12) flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                        <MapPin
                          className="w-5 h-5 text-(--ink)"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs font-black uppercase tracking-wider text-(--ink-60) mb-1"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(contactCopy.addressLabel)}
                        </div>
                        <p
                          className="text-sm font-medium text-(--ink-80) leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t(contactCopy.addressValue)}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-(--ink-12) flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                        <Mail
                          className="w-5 h-5 text-(--ink)"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs font-black uppercase tracking-wider text-(--ink-60) mb-1"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(contactCopy.emailLabel)}
                        </div>
                        <a
                          href={`mailto:${contactCopy.emailValue}`}
                          className="text-sm font-medium text-(--ink-80) hover:text-(--ink) transition-colors underline-offset-2 hover:underline"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {contactCopy.emailValue}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-(--ink-12) flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                        <Phone
                          className="w-5 h-5 text-(--ink)"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs font-black uppercase tracking-wider text-(--ink-60) mb-1"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(contactCopy.phoneLabel)}
                        </div>
                        <p
                          className="text-sm font-medium text-(--ink-80)"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {contactCopy.phoneValue}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="mt-12 pt-8 border-t border-(--ink-12)">
                    <div className="flex items-center gap-3 text-sm text-(--ink-60)">
                      <Building2 className="w-5 h-5" strokeWidth={2} />
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>
                        {t({
                          en: "Trusted by 500+ businesses",
                          es: "Confiado por 500+ empresas",
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE - Form */}
                <div className="lg:col-span-3 p-8 sm:p-10 bg-(--ink)/90 text-(--background-paper)">
                  <form
                    autoComplete="off"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Web3Forms Access Key */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="51ba5711-db1a-4f65-8f8f-9fc33bbc740f"
                    />

                    {/* REQUIRED: hCaptcha token field name for Web3Forms */}
                    <input
                      type="hidden"
                      name="h-captcha-response"
                      value={captchaToken}
                    />

                    {/* Dynamic Subject */}
                    <input type="hidden" name="subject" value={subject} />

                    {/* Redirect to Home */}
                    <input
                      type="hidden"
                      name="redirect"
                      value={
                        typeof window !== "undefined"
                          ? window.location.origin
                          : ""
                      }
                    />

                    {/* Form Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="name"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(contactCopy.nameLabel)}
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="Company Name"
                          className="w-full rounded-xl border border-(--ink-14) bg-white px-4 py-3 text-sm font-medium text-(--ink) placeholder:text-(--ink-60) placeholder:font-normal outline-none transition-all duration-300 focus:border-(--ink-60) focus:ring-2 focus:ring-(--ink)/10"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          placeholder={t(contactCopy.namePlaceholder)}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="email"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(contactCopy.emailInputLabel)}
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="w-full rounded-xl border border-(--ink-14) bg-white px-4 py-3 text-sm font-medium text-(--ink) placeholder:text-(--ink-60) placeholder:font-normal outline-none transition-all duration-300 focus:border-(--ink-60) focus:ring-2 focus:ring-(--ink)/10"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          placeholder={t(contactCopy.emailPlaceholder)}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="phone"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(contactCopy.phoneInputLabel)}
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          className="w-full rounded-xl border border-(--ink-14) bg-white px-4 py-3 text-sm font-medium text-(--ink) placeholder:text-(--ink-60) placeholder:font-normal outline-none transition-all duration-300 focus:border-(--ink-60) focus:ring-2 focus:ring-(--ink)/10"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          placeholder={t(contactCopy.phonePlaceholder)}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="message"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(contactCopy.messageLabel)}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="w-full rounded-xl border border-(--ink-14) bg-white px-4 py-3 text-sm font-medium text-(--ink) placeholder:text-(--ink-60) placeholder:font-normal outline-none resize-vertical transition-all duration-300 focus:border-(--ink-60) focus:ring-2 focus:ring-(--ink)/10"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          placeholder={t(contactCopy.messagePlaceholder)}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* hCaptcha */}
                    <div className="my-5">
                      <HCaptcha
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        reCaptchaCompat={false}
                        onVerify={onHCaptchaVerify}
                        onExpire={onHCaptchaExpire}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!captchaToken}
                      className={[
                        "group w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold shadow-lg transition-all duration-300",
                        !captchaToken
                          ? "bg-white/20 text-white/60 cursor-not-allowed opacity-70"
                          : "bg-(--ink) text-(--background-paper) hover:opacity-90 hover:scale-105 active:scale-100 hover:shadow-xl hover:cursor-pointer",
                      ].join(" ")}
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {t(contactCopy.sendButton)}
                      <Send
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </AppShell>
  );
}
