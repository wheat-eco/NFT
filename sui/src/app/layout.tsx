import './globals.css';

export const metadata = {
  title: 'Sui Launchpad',
  description: 'A decentralized application',
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