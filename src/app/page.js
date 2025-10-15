import { Header } from "../../widgets/header.js";
import { Footer } from "../../widgets/footer.js";
import { About } from "../../widgets/about.js";
import { MainScreen } from "../../widgets/main-screen.js";
import { Facts } from "../../widgets/facts.js";
import { Breeds } from "../../widgets/breeds.js";

export default function Home() {
  return (
    <div>
      <Header/>
      <MainScreen/>
      <About/>
      <Facts/>
      <Breeds/>
      <Footer/>
    </div>
  );
}
