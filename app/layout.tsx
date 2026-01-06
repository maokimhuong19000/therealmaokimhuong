import "./globals.css";
import ClientOnly from "./components/ClientOnly";

import LiquidBackground, { BirdsOverlay, VideoBackground } from "./components/LiquidBackground";
import Cursor from "./components/Cursor";
import AnimatedMenu from "./components/AnimatedMenu";
import PageLoader from "./components/PageLoader";
import TransitionWrapper from "./components/TransitionWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative antialiased">
        <ClientOnly>
          {/* <LiquidBackground /> */}
          <VideoBackground />
          <BirdsOverlay />
          <Cursor />
          <AnimatedMenu />
           <PageLoader loading={false} />
        </ClientOnly>

        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  );
}
