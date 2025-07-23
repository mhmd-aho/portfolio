import { Suspense, lazy } from 'react';
import Header from './header';
import Loading from './loading';
const Home = lazy(() => import('./home/home'));
const AboutMe = lazy(() => import('./about/aboutMe'));
const ShowCase = lazy(() => import('./showcase/showCase'));
function App() {
  return (
  <div className="overflow-hidden "> 
    <Header />
    <main className="pt-12">
      <Suspense fallback={<Loading />}>
          <Home />
          <AboutMe />
          <ShowCase />
      </Suspense>
    </main>
  </div>
  )
}

export default App
