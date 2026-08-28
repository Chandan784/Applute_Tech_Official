import "./globals.css";

export const metadata = {
  title: "Applute Technologies Private Limited | Software Development Company",
  description:
    "Applute Technologies Private Limited provides website development, mobile app development and custom software development services from Bhubaneswar, Odisha, India.",
  keywords: [
    "software development company",
    "website development",
    "mobile app development",
    "custom software development",
    "React development",
    "Next.js development",
    "Node.js development",
    "Bhubaneswar software company",
    "Odisha software company",
    "Applute Technologies",
  ],
  authors: [
    {
      name: "Applute Technologies Private Limited",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}