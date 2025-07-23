import { Suspense, lazy } from 'react';
import Header from './header';
import Loading from './loading';
const Home = lazy(() => import('./home/home'));
const AboutMe = lazy(() => import('./about/aboutMe'));
const ShowCase = lazy(() => import('./showcase/showCase'));
function App() {
  return (
  <Suspense fallback={<Loading />}>
    <div className="overflow-hidden "> 
      <Header />
      <main className="pt-12">
        <Home />
        <AboutMe />
        <ShowCase />
      </main>
    </div>
  </Suspense>
  )
}

export default App
