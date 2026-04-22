import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section" style={{ textAlign: 'center', display: 'block' }}>
      <div className="hero-content" style={{ margin: '0 auto', maxWidth: '800px' }}>
        <h1>El arte del tiempo</h1>
        <p>Estudio dedicado al cultivo y diseño de Bonsáis. Creamos historias vivas, rama por rama, respetando la esencia de cada especie.</p>
        <Link to="/pages/booking" className="btn">Reserva un taller</Link>
      </div>
    </section>
  );
};

export default Hero;
