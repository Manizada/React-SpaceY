import './Home.css'
import Card from '../../components/card/Card'

function Home() {
    return (
        <>
            <div className="container">
                <Card photo={'/images/solpequeno.png'} photosub={'Sol'} title={'Sol'} subscription={'Não sei o que escrever mas preciso preencher este campo para testar'}/>
            </div>
        </>
    )
}

export default Home