import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}