import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <div>
    {/* <Navbar/>  */}
    <Layout>
    <Component {...pageProps} />

    </Layout>
    </div>
  )
}

const EmptyLayout = ({children}) =><>{children}</>

export default MyApp;
