// Components
import Banner from '@/components/Banner'
import HomepageContentBlock from '@/components/HomepageContentBlock'
import HomepageFooter from '@/components/HomepageFooter/HomepageFooter'
import HomepageHighlightBlock from '@/components/HomepageHighlightBlock'
import HomepageImageBlock from '@/components/HomepageImageBlock/HomepageImageBlock'
import HomepageNavigation from '@/components/HomepageNavigation'
import HomepageTestimonials from '@/components/HomepageTestimonials'
import Jumbotron from '@/components/Jumbotron'

export default function HomePage() {
  return (
    <>
      <Banner />
      <HomepageNavigation />
      <Jumbotron />
      <div className="space-y-32">
        <HomepageImageBlock />
        <HomepageContentBlock />
        <HomepageHighlightBlock />
      </div>
      <HomepageTestimonials />
      <HomepageFooter />
    </>
  )
}
