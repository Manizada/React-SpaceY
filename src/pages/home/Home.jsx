import './Home.css'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'

//Import the images 
import SunImage from "./../../assets/images/solpequeno.png"
import MercuryImage from "./../../assets/images/mercurypng.png"
import VenusImage from "./../../assets/images/venuspng brilhante.png"
import EarthImage from "./../../assets/images/terrapng2.png"
import MarsImage from "./../../assets/images/mars_planet_PNG1.png"
import JupiterImage from "./../../assets/images/jupiterpng.png"
import SaturnImage from "./../../assets/images/Saturn-Free-PNG-Image.png"
import UranusImage from "./../../assets/images/uranuss.png"
import NeptuneImage from "./../../assets/images/neptun.png"


//import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
    return (
        <>
            <Header/>
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={45}
                    slidesPerView={3}
                    navigation
                    pagination={{clickable: true}}
                    loop={true}
                >

                    <SwiperSlide>
                        <Card photo={NeptuneImage} photosub={'Netuno'} title={'Netuno'} subscription={'Escuro, frio e açoitado por ventos supersônicos, o gigante Netuno é o oitavo e mais distante planeta orbitando nosso Sol. Mais de 30 vezes mais longe do Sol que a Terra, Netuno não é visível a olho nu. Em 2011, Netuno completou sua primeira órbita de 165 anos desde a sua descoberta.'} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card photo={SunImage} photosub={'Sol'} title={'Sol'} subscription={'O Sol é a estrela mais próxima da Terra, distância aproximadamente 150 milhões de quilômetros de nós, e é responsável por manter todo o Sistema Solar em sua interação gravitacional: oito planetas e os demais corpos celestes que o compõem, como planetas anões, asteroides e cometas.'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card photo={MercuryImage} photosub={'Mercúrio'} title={'Mercúrio'} subscription={'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card photo={VenusImage} photosub={'Vênus'} title={'Vênus'} subscription={'Vênus é o segundo planeta a partir do Sol e o sexto maior planeta. É o planeta mais quente do nosso sistema solar. Vênus é um planeta envolto em nuvens que leva o nome de uma deusa do amor e é frequentemente chamado de gêmeo da Terra. Mas chegue perto e Vênus se tornará infernal.'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card photo={EarthImage} photosub={'Terra'} title={'Terra'} subscription={'O planeta Terra é um dos quatro planetas de formação rochosa do Sistema Solar, sendo os outro: Mercúrio, Vênus e Marte. É o único planeta do Sistema Solar em que existe água em estado líquido, que junto ao oxigênio e a temperatura média de 14 °C possibilitam a vida no planeta.'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card photo={MarsImage} photosub={'Marte'} title={'Marte'} subscription={'Marte é seco, rochoso e muito frio. O quarto planeta a partir do Sol, Marte, é um dos dois vizinhos planetários mais próximos da Terra (Vénus é o outro). Marte é um dos planetas mais fáceis de detectar no céu noturno – parece um ponto de luz vermelho brilhante.'} />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Card photo={JupiterImage} photosub={'Júpiter'} title={'Júpiter'} subscription={'Júpiter é o maior planeta do Sistema Solar, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno.'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card photo={SaturnImage} photosub={'Saturno'} title={'Saturno'} subscription={'Saturno é o sexto planeta a partir do Sol e o segundo maior planeta do nosso sistema solar. Adornado com um deslumbrante sistema de anéis gelados. Não é o único que possui anéis. Assim como Júpiter, Saturno é uma bola enorme feita principalmente de hidrogênio e hélio.'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card photo={UranusImage} photosub={'Urano'} title={'Urano'} subscription={'Urano é o sétimo planeta a partir do Sol e é o terceiro maior planeta do nosso sistema solar. Urano é um planeta muito frio e ventoso. É cercado por anéis fracos e por mais de duas dúzias de pequenas luas enquanto gira em um ângulo de quase 90 graus em relação ao plano de sua órbita.'}/>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Home