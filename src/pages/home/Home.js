import './home.css';
import Banner from '../../components/banner/Banner.js';
import Card from '../../components/card/Card.js';
import bannerIndex from '../../assets/img/banner-index.png';
import logements from '../../assets/api/logements.json';

function Home() {
  return (
    <>
    <section className='banner-index-container'>
      <h1>Chez vous, partout et ailleurs</h1>
      <Banner img={bannerIndex} />
      <span className='banner-opacity'></span>
    </section>
    <section className='card-container'>
      {logements.map(logement =>
        <Card key={logement.id} title={logement.title} id={logement.id} cover={logement.cover} />
      )}
    </section>
    </>
  );
}

export default Home;

