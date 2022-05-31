import Head from "components/head";
import Header from "components/header";
import Sidebar from "components/sidebar";
import Footer from "components/footer";

export default function PageLayout({ children }) {
  return (
    <div>
      <Head />
      <Header />
      <div className="flex py-3 px-9 mb-9 mt-24 md:space-x-16">
        <Sidebar />
        <div className="space-y-4 w-full text-slate-200 md:pl-56">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
