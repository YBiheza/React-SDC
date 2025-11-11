import { Header } from '../Header'
import { Hero } from '../Hero'
import { Footer } from '../Footer'

export function Homepage () {
    return (
        <>
            <Header currPage = 'Home'/>
            <Hero />
            <Footer />
        </>
    )
}

export default Homepage