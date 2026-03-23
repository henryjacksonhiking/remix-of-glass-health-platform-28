import { useState, useEffect, useRef, useCallback } from "react";

const scenes = [
  {
    badge: "Scene 1 of 4",
    step: "11pm — patient books",
    caption:
      "Sarah opens Borna Care at 11pm and books her dental appointment — without calling anyone. She picks her service, doctor, and time slot in under 2 minutes.",
    patientImg: "/images/Choose your appointment (1).png",
    adminImg: "/images/Admin Dashboard.png",
    patientTag: "Patient — Sarah Collins",
    adminTag: "Admin — Yalan Corp Dental",
    duration: 9000,
  },
  {
    badge: "Scene 2 of 4",
    step: "Booking confirmed instantly",
    caption:
      "Appointment confirmed. Sarah gets her confirmation screen with all details. The admin sees a new notification automatically — no one had to do a thing.",
    patientImg: "/images/patient appointment Confirmation.png",
    adminImg: "/images/Notifications Admin Side - View All.png",
    patientTag: "Patient — confirmation received",
    adminTag: "Admin — new booking notification",
    duration: 9000,
  },
  {
    badge: "Scene 3 of 4",
    step: "Before the visit — forms",
    caption:
      "Before arriving, Sarah completes her intake form digitally. No clipboards, no scanning, no manual data entry. The admin sees all submitted forms instantly.",
    patientImg: "/images/Patient Information (Personal Info).png",
    adminImg: "/images/Patient's Forms.png",
    patientTag: "Patient — completing intake form",
    adminTag: "Admin — forms overview",
    duration: 9000,
  },
  {
    badge: "Scene 4 of 4",
    step: "After the visit — payment",
    caption:
      "The admin creates a payment request in seconds and sends it by email and SMS. Sarah opens it on her phone and pays online. Billing stays clean.",
    patientImg: "/images/Pay now.png",
    adminImg: "/images/New Payment Request  - OWNER and ADMIN ONLY.png",
    patientTag: "Patient — payment request received",
    adminTag: "Admin — creating payment request",
    duration: 9000,
  },
];

const BornaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 161 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M80.1889 0C35.9685 0 0 35.8785 0 80.0022C0 124.112 35.9685 160.004 80.1889 160.004C124.409 160.004 160.378 124.112 160.378 80.0022C160.378 35.8785 124.409 0 80.1889 0ZM132.717 106.854H128.58C127.584 106.854 126.581 106.854 125.578 106.847H125.551C124.555 106.847 123.552 106.847 122.549 106.84H122.459C120.861 106.84 119.263 106.833 117.665 106.833C116.04 106.833 114.414 106.84 112.782 106.847C110.153 106.861 108.355 108.071 107.276 110.541C107.02 111.108 106.896 111.917 106.889 112.941C106.861 115.639 106.861 118.398 106.861 121.068V122.417C106.868 124.416 106.875 126.415 106.875 128.421V132.544H53.3993V128.324C53.3993 126.346 53.4062 124.354 53.4201 122.397C53.4408 117.914 53.4478 113.868 53.3509 109.766C53.3094 107.836 53.4132 105.955 53.6483 104.17C53.9665 100.158 55.6474 96.3816 55.8756 95.8905C57.9922 90.8757 61.4715 86.3935 66.2304 82.5683C69.267 80.1266 72.5456 77.9685 75.7344 75.8727C76.7512 75.1948 77.8094 74.5031 78.8332 73.8114C82.3193 71.4596 85.9162 69.0318 88.9044 65.8984C90.0249 64.7294 90.9864 63.4843 91.7749 62.1909C93.0269 60.1434 93.8777 57.8815 94.2996 55.4537C94.5002 54.3608 94.6109 53.1849 94.6386 51.9606C94.687 48.8064 94.6662 45.5831 94.6455 42.4704C94.6455 41.592 94.6385 40.7066 94.6316 39.8143H67.3855V39.7728H65.6563C65.6493 40.7896 65.6493 41.7995 65.6493 42.8163C65.6563 44.677 65.6563 46.6068 65.6355 48.5159C65.5318 57.9922 57.7155 65.6978 48.2254 65.6978H40.0841V79.8362H40.0495V94.5002H52.8875L52.2165 95.932L51.338 97.8135C51.3173 97.8481 49.761 101.237 49.5051 104.592L49.4151 105.816L49.346 106.743H27.7441V79.8015H27.668V53.3786H32.0258C33.9418 53.3855 35.844 53.3924 37.76 53.3924L40.9487 53.3993H44.1236C45.1819 53.3993 46.2402 53.3993 47.2985 53.3924C51.2205 53.3786 53.3855 51.2135 53.3924 47.3054C53.3993 44.8845 53.3924 42.4705 53.3855 40.0564V39.9596L53.3786 37.4971L53.3578 31.7975V27.4536H106.909V37.4902C106.909 41.9517 106.909 46.5653 106.937 51.1167V51.5525C106.937 53.1088 106.84 54.6582 106.646 56.1661L106.515 57.1553H106.487C106.245 58.5525 105.685 61.264 104.585 64.2245L104.578 64.259L104.571 64.2729C102.247 70.0555 98.1731 75.1187 92.4666 79.3035C90.0457 81.0812 87.521 82.7482 85.0792 84.3599C82.8935 85.7986 80.6385 87.2927 78.5012 88.8352C75.679 90.8688 73.1682 93.0061 71.0308 95.185C70.1454 96.0842 69.343 97.0733 68.6583 98.1109C67.3164 100.138 66.4172 102.399 65.9745 104.827C65.76 106.031 65.6493 107.276 65.6493 108.528C65.6424 111.198 65.6493 113.923 65.6563 116.552V116.614C65.6632 117.769 65.6632 118.924 65.6701 120.086H92.9577V120.107H94.4933V112.374C94.4933 103.548 100.961 96.0289 109.545 94.8807C111.896 94.5694 114.248 94.5417 116.268 94.5417C116.662 94.5417 117.057 94.5417 117.444 94.5486H118.613C119.249 94.5486 119.775 94.5417 120.259 94.5348V92.9439H120.232V65.7324H107.85L108.348 64.3766L109.005 62.5989C110.347 58.9675 110.811 55.5989 110.811 55.5643L110.963 54.4161L111.08 53.5377H132.717V106.854Z"
      fill="url(#demoIconGrad)"
    />
    <defs>
      <linearGradient id="demoIconGrad" x1="80" y1="0" x2="80" y2="160" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00DEC4" />
        <stop offset="1" stopColor="#00479B" />
      </linearGradient>
    </defs>
  </svg>
);

const ProductDemo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(1);
  const [displayedScene, setDisplayedScene] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [progressWidth, setProgressWidth] = useState("0%");
  const [progressTransition, setProgressTransition] = useState("none");

  const typeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sceneTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scene = scenes[displayedScene];

  // Start progress bar for current scene
  const startProgress = useCallback((duration: number) => {
    setProgressWidth("0%");
    setProgressTransition("none");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setProgressTransition(`width ${duration}ms linear`);
        setProgressWidth("100%");
      });
    });
  }, []);

  // Typewriter effect
  useEffect(() => {
    const text = scenes[displayedScene].caption;
    setTypedText("");
    let i = 0;
    if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    typeIntervalRef.current = setInterval(() => {
      i++;
      setTypedText(text.slice(0, i));
      if (i >= text.length && typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
    }, 22);
    return () => {
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    };
  }, [displayedScene]);

  // Scene cycling
  useEffect(() => {
    startProgress(scenes[currentScene].duration);

    sceneTimeoutRef.current = setTimeout(() => {
      const next = (currentScene + 1) % scenes.length;
      setCurrentScene(next);
    }, scenes[currentScene].duration);

    return () => {
      if (sceneTimeoutRef.current) clearTimeout(sceneTimeoutRef.current);
    };
  }, [currentScene, startProgress]);

  // Fade transition on scene change
  useEffect(() => {
    if (currentScene === displayedScene && currentScene === 0 && imgOpacity === 1) return;
    setImgOpacity(0);
    fadeTimeoutRef.current = setTimeout(() => {
      setDisplayedScene(currentScene);
      setImgOpacity(1);
    }, 200);
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [currentScene]);

  return (
    <section id="demo" className="overflow-hidden" style={{ background: "#0B1130" }}>
      {/* Header */}
      <div className="text-center px-4 pt-20 pb-10">
        <span
          className="inline-block mb-3"
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "#00DEC4",
            fontWeight: 600,
          }}
        >
          See it in action
        </span>
        <h2
          className="mb-4"
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "rgba(255,255,255,0.95)",
            letterSpacing: "-1px",
          }}
        >
          Watch Borna Care work
        </h2>
        <p
          className="mx-auto"
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 480,
          }}
        >
          A real clinic day — from the moment a patient books at 11pm to the moment they pay.
        </p>
      </div>

      {/* Demo player */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }} className="pb-20 px-5 md:px-10">
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/* Player header */}
          <div
            className="flex items-center justify-between"
            style={{
              background: "#0d1535",
              borderBottom: "0.5px solid rgba(255,255,255,0.08)",
              padding: "12px 24px",
            }}
          >
            {/* Left: logo + title */}
            <div className="flex items-center gap-2.5">
              <BornaIcon />
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                Borna Care — product demo
              </span>
            </div>
            {/* Center: scene badge */}
            <span
              className="hidden md:inline-flex items-center gap-1.5"
              style={{
                background: "rgba(0,222,196,0.1)",
                border: "0.5px solid rgba(0,222,196,0.25)",
                color: "#00DEC4",
                fontSize: 10,
                borderRadius: 980,
                padding: "4px 12px",
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 5, height: 5, background: "#00DEC4" }}
              />
              {scene.badge}
            </span>
            {/* Right: dot indicators */}
            <div className="flex items-center gap-1.5">
              {scenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentScene(i)}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: i === currentScene ? "#00DEC4" : "rgba(255,255,255,0.2)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  aria-label={`Go to scene ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ width: "100%", height: 2, background: "rgba(255,255,255,0.08)" }}>
            <div
              style={{
                height: "100%",
                width: progressWidth,
                background: "linear-gradient(90deg, #00DEC4, #00479B)",
                transition: progressTransition,
              }}
            />
          </div>

          {/* Split screen */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ minHeight: 480 }}
          >
            {/* Patient side */}
            <div
              className="flex flex-col items-center justify-center p-6 md:p-8"
              style={{ borderRight: "0.5px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="block mb-4 text-center"
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {scene.patientTag}
              </span>
              {/* Phone frame */}
              <div
                style={{
                  background: "#1a2340",
                  borderRadius: 26,
                  padding: 7,
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  maxWidth: 200,
                  width: "100%",
                }}
              >
                {/* Notch */}
                <div className="flex justify-center mb-1.5">
                  <div
                    style={{
                      width: 44,
                      height: 5,
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 3,
                    }}
                  />
                </div>
                {/* Screen */}
                <div
                  style={{
                    borderRadius: 18,
                    overflow: "hidden",
                    background: "#f5f6f8",
                  }}
                >
                  <img
                    src={scene.patientImg}
                    alt={scene.patientTag}
                    style={{
                      width: "100%",
                      height: 320,
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                      opacity: imgOpacity,
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Admin side */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8">
              <span
                className="block mb-4 text-center"
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {scene.adminTag}
              </span>
              {/* Desktop frame */}
              <div
                style={{
                  background: "white",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "0.5px solid rgba(0,0,0,0.1)",
                  width: "100%",
                }}
              >
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-2"
                  style={{ background: "#f0f0f0", padding: "7px 10px" }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                  <div
                    className="ml-2 flex-1 max-w-[120px]"
                    style={{ height: 14, background: "#e0e0e0", borderRadius: 3 }}
                  />
                </div>
                {/* Screen */}
                <div style={{ overflow: "hidden", maxHeight: 340 }}>
                  <img
                    src={scene.adminImg}
                    alt={scene.adminTag}
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: "top center",
                      opacity: imgOpacity,
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Caption bar */}
          <div
            className="flex items-start gap-3.5"
            style={{
              background: "#0d1535",
              borderTop: "0.5px solid rgba(255,255,255,0.06)",
              padding: "14px 24px",
            }}
          >
            <span
              className="inline-flex items-center gap-1.5 shrink-0"
              style={{
                background: "rgba(0,222,196,0.1)",
                border: "0.5px solid rgba(0,222,196,0.25)",
                color: "#00DEC4",
                fontSize: 10,
                borderRadius: 980,
                padding: "4px 12px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 5, height: 5, background: "#00DEC4" }}
              />
              {scene.step}
            </span>
            <p
              className="text-xs md:text-[13px]"
              style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, minHeight: 42 }}
            >
              {typedText}
              <span
                className="inline-block ml-0.5 align-middle"
                style={{
                  width: 1.5,
                  height: 12,
                  background: "#00DEC4",
                  animation: "demoCursorBlink 0.7s step-end infinite",
                }}
              />
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes demoCursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ProductDemo;
