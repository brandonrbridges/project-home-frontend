// Next
import Image from 'next/image'
import Link from 'next/link'

// Components
import PageHeightWrapper from '@/components/PageHeightWrapper'
import RegisterForm from '@/components/RegisterForm'

// Assets
import logo from '@/assets/logo_icon.svg'

export default function LoginPage() {
  return (
    <PageHeightWrapper className="flex">
      <div className="grow h-full flex items-center justify-center">
        <div className="w-3/5 space-y-8">
          <h1 className="text-4xl font-semibold">Register for an account</h1>

          <RegisterForm />

          <p>
            Already have an account? <Link href="/login">Log back in</Link>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-eggplant-600 to-eggplant-300 rounded-l-2xl h-full w-7/12 hidden md:flex items-center justify-start relative">
        <Link href="/">
          <Image
            src={logo}
            alt="Hello Home Logo"
            height={52}
            width={52}
            className="absolute top-4 left-6"
          />
        </Link>
        <div className="px-36">
          <h2 className="text-eggplant-50 text-3xl font-semibold mb-4">
            Designed for full logistic support
          </h2>
          <p className="text-eggplant-200 text-lg">
            View all of your analytics and grow your property management
            business from anywhere!
          </p>
        </div>
      </div>
    </PageHeightWrapper>
  )
}
