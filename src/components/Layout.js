import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <Navbar />
      {/* Adding the padding here fixes it for ALL pages at once */}
      <main className="pt-32"> 
        {children}
      </main>
      <Footer />
    </div>
  );
}