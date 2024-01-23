export const metadata = {
  title: "Painel de ADM | Hotel Cândido",
  description: "Controle todos o seu site através desse super painel.",
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
