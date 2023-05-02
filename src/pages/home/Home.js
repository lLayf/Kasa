import './home.css';
import Banner from '../../components/banner/Banner.js';
import bannerIndex from '../../assets/img/banner-index.png';

function Home() {
  return (
    <>
    <section className='banner-index-container'>
      <h1>Chez vous, partout et ailleurs</h1>
      <Banner img={bannerIndex} />
      <span className='banner-opacity'></span>
    </section>
    </>
  );
}

export default Home;
