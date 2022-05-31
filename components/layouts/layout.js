import Head from "components/head";
import Header from "components/header";
import Footer from "components/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
