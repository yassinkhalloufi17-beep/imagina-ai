
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMAGINA AI",
  description: "Créez des images avec l'intelligence artificielle."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
