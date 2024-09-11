import "./globals.css";

export const metadata = {
  title: "Unwavering Creativity",
  description: "Delve into the world of a creative mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  );
}
