import '../assets/css/style.min.css'
import '../assets/css/bootstrap.min.css'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("../assets/js/plugins/plugins.js")
    import("../assets/js/plugins/plugin-custom.js")
    import("../assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js")
    import("../assets/js/main.js")
  },[])
  return <Component {...pageProps} />
}
