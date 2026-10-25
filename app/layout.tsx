import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nihas14m-star.github.io"),
  title: "Nihas — AI/ML Engineer & Builder",
  description:
    "Nihas builds AI systems, intelligent agents, developer tools, and practical software with an emphasis on clear interfaces and observable execution.",
  applicationName: "Nihas Portfolio",
  authors: [{ name: "Nihas" }],
  creator: "Nihas",
  keywords: ["AI engineer", "ML engineer", "AI agents", "computer vision", "developer tools"],
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nihas — AI/ML Engineer & Builder",
    description:
      "A portfolio of AI systems, agentic interfaces, and practical developer tools built by Nihas.",
    url: "https://nihas14m-star.github.io",
    siteName: "Nihas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihas — AI/ML Engineer & Builder",
    description:
      "AI systems, agentic interfaces, and practical developer tools by Nihas.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0e0c",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nihas",
  jobTitle: "AI/ML Engineer & Builder",
  url: "https://nihas14m-star.github.io",
  sameAs: ["https://github.com/nihas14m-star"],
  knowsAbout: ["Artificial intelligence", "Machine learning", "Computer vision", "Developer tools"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
