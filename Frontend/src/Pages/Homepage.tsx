import GetInvolved from '../Components/Getinvolved'
import Involved from '../Components/Involved'
import Upcomingevents from '../Components/Upcomingevents'
import News from '../Components/News'
import Hero from '../Components/Hero'
import RecentEvents from '../Components/RecentEvents'
import VolunteeroftheYear from '../Components/VolunteeroftheYear'
import InspiringPeople from '../Components/InspiringPeople'
import Photogallery from '../Components/Photogallery'
import Logos from '../Components/Logos'
import OurMission from '../Components/OurMission'

const Homepage = () => {
  return (
    <>
      <Hero />
      <Logos />
      <GetInvolved />
      <OurMission />
      <RecentEvents />
      <Involved />
      <Upcomingevents />
      <VolunteeroftheYear />
      <InspiringPeople />
      <Photogallery />
      <News />
    </>
  )
}

export default Homepage
