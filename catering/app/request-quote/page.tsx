import Form from '@/app/components/Form';
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
<>
<Navbar />
      <main className="mx-auto pb-20">
      <Form />
    </main>
    <Footer />
</>

  );
}
