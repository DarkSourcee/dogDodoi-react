import Banner from "../components/Banner/Banner";
import Beneficios from "../components/Beneficios/Beneficios";
import Footer from "../components/Footer/Footer";
import Titles from "../components/Titles/Titles";

function Home(){
    return(
        <div>
            <Banner/>  
            <section className="BemVindo">
                <div>
                <p className="pBemVindo">Bem-vindo</p>
                <p className="pObj">Olá somos a Dog Dodói. Aqui você pode ter certeza de que seus bichinhos de estimação estão em boas mãos.</p>
                </div>
                <div>
                <p className="pOfertas">Oferecemos tratamento veterinário especializado para animais de estimação. Nosso hospital está sempre disponível para cuidar do seu melhor amigo, pois estamos abertos 24 horas por dia, 7 dias por semana.</p>
                </div>
            </section>

            <section className="Benef">
                <Titles title="Nossos Beneficios" 
                        subTitle="Oferecemos serviços médicos e cirúrgicos para animais de estimação"
                />
                <div className="gridCard">
                <Beneficios icon="/img/iconMedico.png"
                            title="Médicos Especializados"
                />
                <Beneficios icon="/img/iconConsulta.png"
                            title="Consultas em casa"
                />
                <Beneficios icon="/img/iconSuporte.png"
                            title="Suporte ao paciente 24/7"
                />
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home