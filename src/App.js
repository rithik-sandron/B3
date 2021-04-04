import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Nav from './components/Nav/Nav';
// import Grid from './components/Grid';
import Plans from './components/plans/Plans';
// import Testimonials from './components/testimonials/Testimonials';
import ThingsWeDo from './components/things-we-do/ThingsWeDo';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Plans />
      <div style={{
        margin: 'auto',
        marginTop: '5rem',
        width: '30%', textAlign: 'center',
        fontSize: '58px',
        color: 'rgb(23, 130, 218)',
        fontWeight: 'Bold',
        borderBottom: 'solid 2px rgb(23, 130, 218)',
        textTransform: 'uppercase'
      }}>our services</div>
      <ThingsWeDo width='70%' />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
