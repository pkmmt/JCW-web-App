
import NewsAndUpdates from './NewsandUpdates'
import Events from './Events'
import Hero from './Hero'
import Nav from './NavHomePage'
import Faq from './FAQ'
import Footer from './footer'
function HomePage(){
    return(
        <>
{/* Nav */}
  <div>
  <Nav/>
  </div>
{/* Hero Section */}
  <div>
    <Hero/>
  </div>
  {/* NewsAndUpates Section */}
        <div>
<NewsAndUpdates/>
        </div>
        {/* Events Section */}
        <div>
<Events/>
        </div>
        {/* FAQ Section */}
        <div>
          <Faq/>
        </div>
        {/* Footer section */}
        <div>
          <Footer/>
        </div>
        </>
    )

}

export default HomePage