// src/pages/Contact.tsx
import {
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
  type RefObject,
} from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { contactCopy as copy } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

// ─── Types ────────────────────────────────────────────────────────────────────
interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  delay?: string;
}

interface FieldProps {
  id: string;
  label: string;
  delay?: string;
  children: React.ReactNode;
}

// ─── useScrollReveal ──────────────────────────────────────────────────────────
function useScrollReveal<T extends HTMLElement = HTMLElement>(
  delay = 0,
): RefObject<T> {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (el == null) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(() => {
              target.dataset.visible = "true";
            }, delay);
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref as RefObject<T>;
}

// ─── InfoRow ──────────────────────────────────────────────────────────────────
function InfoRow({
  icon,
  label,
  children,
  delay = "0ms",
}: InfoRowProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el == null) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(
              () => {
                target.dataset.visible = "true";
              },
              parseInt(delay, 10),
            );
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="card-reveal group flex items-start gap-4"
      style={{ transitionDelay: delay }}
    >
      <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-lg">
        {icon}
      </div>
      <div>
        <div
          className="text-xs font-black uppercase tracking-widest text-white/50 mb-1"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {label}
        </div>
        <div
          className="text-sm font-medium text-white/90 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({
  id,
  label,
  delay = "0ms",
  children,
}: FieldProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el == null) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(
              () => {
                target.dataset.visible = "true";
              },
              parseInt(delay, 10),
            );
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="card-reveal" style={{ transitionDelay: delay }}>
      <label
        htmlFor={id}
        className="block text-xs font-black uppercase tracking-widest text-white/60 mb-2"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

// ─── Shared input classes ─────────────────────────────────────────────────────
const INPUT_CLS = `
  w-full rounded-xl
  border border-white/15
  bg-white/8 backdrop-blur-sm
  px-4 py-3
  text-sm font-medium text-white
  placeholder:text-white/35 placeholder:font-normal
  outline-none
  transition-all duration-300
  focus:border-white/40 focus:bg-white/12 focus:ring-2 focus:ring-white/10
  hover:border-white/25
`;

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Contact(): JSX.Element {
  const { t } = useLanguage();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const cardRef = useScrollReveal<HTMLDivElement>();
  const leftRef = useScrollReveal<HTMLDivElement>(60);
  const formRef = useScrollReveal<HTMLDivElement>(120);

  const subject = useMemo(() => {
    const clean = name.trim();
    return clean.length > 0 ? `Quote for ${clean}` : "Quote request";
  }, [name]);

  // FormSubmit uses a plain POST — detect redirect back to show success state
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (params.get("success") === "true") setSubmitted(true);
  }, []);

  const handleReset = useCallback((): void => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSubmitted(false);
    window.history.replaceState({}, "", window.location.pathname);
  }, []);

  const successRef = useScrollReveal<HTMLDivElement>();

  return (
    <AppShell>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px) scale(0.98);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1),
                      transform 0.75s cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        .reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .card-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s cubic-bezier(0.16,1,0.3,1),
                      transform 0.55s cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        .card-reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }
        .slide-left {
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        .slide-left[data-visible="true"] {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-right {
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        .slide-right[data-visible="true"] {
          opacity: 1;
          transform: translateX(0);
        }
        @keyframes success-pop {
          0%   { opacity: 0; transform: scale(0.88) translateY(20px); }
          60%  { transform: scale(1.04) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .success-enter {
          animation: success-pop 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .card-reveal, .slide-left, .slide-right {
            opacity: 1 !important; transform: none !important; transition: none !important;
          }
          .success-enter { animation: none !important; }
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-14">
        <PageTitle
          title={t(copy.formTitle)}
          subtitle={t(copy.infoText)}
          extraContent={
            <div
              ref={cardRef}
              className="reveal w-full max-w-6xl mx-auto mt-10"
            >
              <div className="grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                {/* ── LEFT: dark info panel ── */}
                <div
                  ref={leftRef}
                  className="slide-left lg:col-span-2 relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-10 flex flex-col justify-between"
                >
                  {/* Decorative blobs */}
                  <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl" />

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 mb-6">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span
                        className="text-xs font-bold text-white/80"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {t({
                          en: "We reply within 24h",
                          es: "Respondemos en 24h",
                        })}
                      </span>
                    </div>

                    <h3
                      className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {t(copy.infoTitle)}
                    </h3>
                    <p
                      className="text-sm text-white/55 leading-relaxed mb-10"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t({
                        en: "Fill out the form and our team will get back to you shortly.",
                        es: "Completa el formulario y nuestro equipo te contactará pronto.",
                      })}
                    </p>

                    <div className="space-y-7">
                      <InfoRow
                        icon={
                          <MapPin
                            className="w-5 h-5 text-white/80"
                            strokeWidth={2}
                          />
                        }
                        label={t(copy.addressLabel)}
                        delay="0ms"
                      >
                        {t(copy.addressValue)}
                      </InfoRow>
                      <InfoRow
                        icon={
                          <Mail
                            className="w-5 h-5 text-white/80"
                            strokeWidth={2}
                          />
                        }
                        label={t(copy.emailLabel)}
                        delay="80ms"
                      >
                        <a
                          href={`mailto:${copy.emailValue}`}
                          className="hover:text-white transition-colors underline-offset-2 hover:underline"
                        >
                          {copy.emailValue}
                        </a>
                      </InfoRow>
                      <InfoRow
                        icon={
                          <Phone
                            className="w-5 h-5 text-white/80"
                            strokeWidth={2}
                          />
                        }
                        label={t(copy.phoneLabel)}
                        delay="160ms"
                      >
                        {copy.phoneValue}
                      </InfoRow>
                    </div>
                  </div>

                  {/* Bottom badge */}
                  <div className="relative mt-10 pt-8 border-t border-white/10 flex items-center gap-3">
                    <Building2
                      className="w-5 h-5 text-white/40"
                      strokeWidth={2}
                    />
                    <span
                      className="text-sm text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t({
                        en: "Trusted by 500+ businesses",
                        es: "Confiado por 500+ empresas",
                      })}
                    </span>
                  </div>
                </div>

                {/* ── RIGHT: form panel ── */}
                <div
                  ref={formRef}
                  className="slide-right lg:col-span-3 bg-linear-to-br from-slate-800 via-slate-700 to-slate-800 p-8 sm:p-10"
                >
                  {submitted ? (
                    /* ── Success state ── */
                    <div
                      ref={successRef}
                      className="success-enter h-full flex flex-col items-center justify-center text-center py-12 gap-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                        <CheckCircle2
                          className="w-10 h-10 text-emerald-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-black text-white mb-2"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t({ en: "Message Sent!", es: "¡Mensaje Enviado!" })}
                        </h3>
                        <p
                          className="text-sm text-white/60 max-w-xs mx-auto leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t({
                            en: "Thanks for reaching out. We'll get back to you within 24 hours.",
                            es: "Gracias por contactarnos. Te responderemos en 24 horas.",
                          })}
                        </p>
                      </div>
                      <button
                        onClick={handleReset}
                        className="mt-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-100"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {t({
                          en: "Send another message",
                          es: "Enviar otro mensaje",
                        })}
                      </button>
                    </div>
                  ) : (
                    /* ── Form ── */
                    <>
                      <div className="mb-8">
                        <h3
                          className="text-xl font-black text-white mb-1"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(copy.formTitle)}
                        </h3>
                        <p
                          className="text-sm text-white/50"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t({
                            en: "All fields marked * are required.",
                            es: "Los campos marcados con * son obligatorios.",
                          })}
                        </p>
                      </div>

                      <form
                        action={`https://formsubmit.co/1147c4a7b23c60d1ab28add9e66b0749`}
                        method="POST"
                        className="space-y-5"
                      >
                        {/* FormSubmit hidden config */}
                        <input type="hidden" name="_subject" value={subject} />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input
                          type="hidden"
                          name="_next"
                          value={`${typeof window !== "undefined" ? window.location.origin + window.location.pathname : ""}?success=true`}
                        />
                        {/* Honeypot */}
                        <input
                          type="text"
                          name="_honey"
                          style={{ display: "none" }}
                          aria-hidden="true"
                        />

                        <div className="grid sm:grid-cols-2 gap-5">
                          {/* Company Name */}
                          <Field
                            id="name"
                            label={`${t(copy.nameLabel)} *`}
                            delay="0ms"
                          >
                            <input
                              id="name"
                              type="text"
                              name="Company Name"
                              className={INPUT_CLS}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              placeholder={t(copy.namePlaceholder)}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                              autoComplete="organization"
                            />
                          </Field>

                          {/* Phone */}
                          <Field
                            id="phone"
                            label={t(copy.phoneInputLabel)}
                            delay="60ms"
                          >
                            <input
                              id="phone"
                              type="tel"
                              name="Phone"
                              className={INPUT_CLS}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              placeholder={t(copy.phonePlaceholder)}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              autoComplete="tel"
                            />
                          </Field>

                          {/* Email — full width */}
                          <div className="sm:col-span-2">
                            <Field
                              id="email"
                              label={`${t(copy.emailInputLabel)} *`}
                              delay="120ms"
                            >
                              <input
                                id="email"
                                type="email"
                                name="email"
                                className={INPUT_CLS}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                                placeholder={t(copy.emailPlaceholder)}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                              />
                            </Field>
                          </div>

                          {/* Message — full width */}
                          <div className="sm:col-span-2">
                            <Field
                              id="message"
                              label={`${t(copy.messageLabel)} *`}
                              delay="180ms"
                            >
                              <textarea
                                id="message"
                                name="Message"
                                rows={5}
                                className={`${INPUT_CLS} resize-y min-h-30`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                                placeholder={t(copy.messagePlaceholder)}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                              />
                            </Field>
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="
                              group w-full flex items-center justify-center gap-2.5
                              rounded-xl px-6 py-4
                              bg-white text-slate-900
                              text-sm font-black
                              shadow-lg shadow-black/20
                              transition-all duration-300
                              hover:bg-white/90 hover:scale-[1.02] hover:shadow-xl
                              active:scale-100
                            "
                            style={{ fontFamily: "'Sora', sans-serif" }}
                          >
                            {t(copy.sendButton)}
                            <Send
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                              strokeWidth={2.5}
                            />
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </AppShell>
  );
}
