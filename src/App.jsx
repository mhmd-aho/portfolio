import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./home/home'));
const AboutMe = lazy(() => import('./about/aboutMe'));
const ShowCase = lazy(() => import('./showcase/showCase'));
function App() {
  return (
    <div className="overflow-hidden "> 
    <Header />
    <main className="pt-12">
      <Home />
      <AboutMe />
      <ShowCase />
    </main>
    </div>
  )
}

export default App
