import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./../sass/main.scss";
import Footer from "./_components/Layout/Footer";
import Header from "./_components/Layout/Header";
import Sidebar from "./_components/Layout/Sidebar";

export const metadata = {
  title: {
    default: "Arena Cambodia Auto",
    template: "%s | Arena Cambodia Auto",
  },
  description:
    "Arena Cambodia Auto is a website of vehicle news and knowledge. All new models you can visit on this page or website as linked below.",
  alternates: { canonical: "https://arenacambodiaauto.com" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
