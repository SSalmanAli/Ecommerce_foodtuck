import { Input } from "@/components/ui/input"
import Header from "../../components/Header"
import { Button } from "@/components/ui/button"
import Hero from "../../components/Hero"
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/Section3";
import Section5 from "../../components/Section5";
import Section6 from "../../components/Section6";
import Section7 from "../../components/Section7";
import Section9 from "../../components/Section9";
import Footer from "../../components/Section9"

export default function Home() {
  return (

    <div className="bg-black">

    <Header />

    <Hero />

    <Section1 />

    <Section2 />

    <Section3 />

{/* Section4 */}
<br /><br /><br /><br /><br /><br />
<img src="/images/Clients.png" alt="reviews" />
<br /><br /><br /><br /><br /><br />

{/* Section5 */}
<Section5 />




{/* Section6 */}
<Section6 />


{/* Section7 */}
<Section7 />

{/* Section8 */}
<img className="mt-20 mb-20" src="/images/bn.png" alt="banner" />


{/* Section9 */}
<Section9 />


<Footer />



<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>

  );
}
