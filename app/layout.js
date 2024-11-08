import "./globals.css";

export const metadata = {
  title: "Jomo Kigo | Software Engineer",
  description: "Jomo Kigo is a software engineer based in Nyeri, Kenya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
