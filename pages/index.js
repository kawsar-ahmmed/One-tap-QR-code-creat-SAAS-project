import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import CanvasMain from '../components/canvas/canvas';

export default function Home() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div className="main-bg overflow-hidden">
      <Head>
        <title>OneTap | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container vh-100">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <Navbar />
            <div>
              <CanvasMain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
