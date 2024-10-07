import './Home.css'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'

function Home() {
    return (
        <>
            <Header/>
            <div className="container">
                <Card photo={'/images/solpequeno.png'} photosub={'Sol'} title={'Sol'} subscription={'Não sei o que escrever mas preciso preencher este campo para testar'}/>
            </div>
        </>
    )
}

export default Home