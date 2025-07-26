import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slices/counterSlice'
import HeroBanner from '../components/HeroBanner'
import ContactForm from '../components/ContactForm'
import AnimatedHero from '../components/AnimatedHero'
import MobileVehicleSlider from '../components/SwiperSlider'

export default function Home() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Supreme Group Dashboard</title>
      </Head>
      <main>
        <HeroBanner />
        <AnimatedHero />
        <MobileVehicleSlider />
        <ContactForm />

        {/* <div className="mt-10 flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">Counter: {count}</h2>
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Decrement
            </button>
          </div>
        </div> */}
      </main>
    </>
  )
}