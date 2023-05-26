import './globals.css';
import Header from "./components/Header/header";
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const poppinsBold = Poppins({weight: "900", subsets: ['latin']});
const poppinsMedium = Poppins({weight: "500", subsets: ['latin']});

export const metadata = {
  title: 'Belajar Next JS',
  description: 'Tody was here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={poppinsMedium.className}>
          <Header></Header>
        {/* <h1>test layout</h1> */}
        {children}
      </body>
    </html>
  );
}
