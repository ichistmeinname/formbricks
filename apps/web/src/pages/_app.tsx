import { FeedbackButton } from "@/components/FeedbackButton";
import { initPosthog, usePosthog } from "@/lib/posthog";
import "@/styles/globals.css";
import "@/styles/prism.css";
import "@/styles/toastify.css";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

initPosthog();

function FormbricksApp({ Component, pageProps: { session, ...pageProps } }) {
  const [isMobile, setIsMobile] = useState(false);

  usePosthog();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={isMobile ? "hidden" : "block"}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <ToastContainer />
          <Analytics />
          <FeedbackButton />
        </SessionProvider>
      </div>
      <div
        className={
          isMobile
            ? "flex h-screen flex-col items-center justify-center bg-slate-100 text-slate-700"
            : "hidden"
        }>
        <p>Formbricks is not yet fully responsive.</p>
        <p className="font-bold">Please resize window to use.</p>
      </div>
    </>
  );
}

export default FormbricksApp;
