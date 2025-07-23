import Header from "./header";
import Home from "./home/home";
import AboutMe from "./about/aboutMe";
import ShowCase from "./showcase/showCase";
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
