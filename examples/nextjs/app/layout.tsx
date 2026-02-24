import "./globals.css";

export const metadata = {
  title: "Untold Horizon",
  description: "Afrocentric minimal / futuristic / cinematic / corporate-clean",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
