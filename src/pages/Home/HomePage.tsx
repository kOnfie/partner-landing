import Parthners from '@/Сomponents/ui/Parthners/Parthners'
import Banner from '@/temp/Banner/Banner'
import Footer from '@/Сomponents/Footer/Footer'
import Header from '@/Сomponents/Header/Header'
import Main from '@/Сomponents/Main/Main'

const partn = ['OLX', 'PROM', 'ROZETKA', 'ALLO', 'EVO', 'PROZORRO', 'MODNAKASTA', 'ZAKUPKI.COM.UA']

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Parthners parthners={partn} />
      <Main />
      <Footer />
    </>
  )
}

export default HomePage
