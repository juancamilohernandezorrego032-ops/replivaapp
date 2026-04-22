import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>El arte del tiempo</h1>
        <p>Estudio dedicado al cultivo y diseño de Bonsáis. Creamos historias vivas, rama por rama, respetando la esencia de cada especie.</p>
        <Link to="/pages/booking" className="btn">Reserva un taller</Link>
      </div>
      <div className="hero-image" style={{ 
        background: 'var(--border-color)', 
        aspectRatio: '16/9', 
        borderRadius: '8px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '0 auto',
        width: '100%'
      }}>
        <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>Replica Placeholder [Hero Image]</span>
      </div>

    </section>
  );
};

export default Hero;
