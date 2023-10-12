import BackgroundAnimation from "./BackgroundAnimation/BackgroundAnimation";
import Appbar from "./appbar/Appbar";
import "./scss/global.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "DocHive - Doctors Community Hub",
  description:
    "Connect, collaborate, and thrive on DocHive, your premier medical network. Elevate your practice in a thriving medical community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundAnimation />
        <main className={rubik.className}>
          <Appbar />
          {children}
        </main>
      </body>
    </html>
  );
}
