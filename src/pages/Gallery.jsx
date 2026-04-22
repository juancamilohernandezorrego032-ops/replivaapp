import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const items = [
    'Arce Japonés',
    'Pino Negro',
    'Ficus Retusa',
    'Olmo Chino',
    'Enebro',
    'Azalea'
  ];

  return (
    <div className="content-section">
      <div style={{ width: '100%' }}>
        <h1 style={{ textAlign: 'center' }}>Nuestra Colección</h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
          Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.
        </p>
        
        <div className="gallery-grid">
          {items.map((item, index) => (
            <GalleryItem key={index} name={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;