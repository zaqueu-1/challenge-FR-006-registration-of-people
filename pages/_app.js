import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import '../styles/form.css'
import '../styles/thankyou.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
    )
}

export default MyApp
