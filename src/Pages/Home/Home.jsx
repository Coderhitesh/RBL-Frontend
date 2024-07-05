import React from 'react'
import Hero from '../../Components/Hero/Hero'
import LoansHome from '../../Components/LoansHome/LoansHome'
import MakeLoanHappen from '../../Components/MakeLoanHappen/MakeLoanHappen'
import Offers from '../../Components/Offers/Offers'
import OurPartner from '../../Components/OurPartner/OurPartner'
import HaveQuestion from '../../Components/HaveQuestion/HaveQuestion'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'
import Form from '../../Components/Form/Form'
import IncreaseCard from '../../Components/IncreaseCard/IncreaseCard'
import ApniPolicyAdvantage from '../../Components/ApniPolicyAdvantage/ApniPolicyAdvantage'
import AttractiveRate from '../../Components/AttractiveRate/AttractiveRate'
import Poster from '../../Components/Poster/Poster'
import OurProduct from '../../Components/OurProduct/OurProduct'
import OffersDeals from '../../Components/OffersDeals/OffersDeals'

function Home() {
  return (
    <>
    <Hero />
    {/* <LoansHome /> */}
    <AttractiveRate />
    <Poster />
    {/* <MakeLoanHappen /> */}
    {/* <IncreaseCard /> */}
    <Form />
    <OurProduct />  
    <OffersDeals />
    {/* <Offers /> */}
    {/* <OurPartner /> */}
    {/* <AdvantageHome /> */}
    {/* <ApniPolicyAdvantage /> */}
    {/* <HaveQuestion /> */}
    </>
  )
}

export default Home
