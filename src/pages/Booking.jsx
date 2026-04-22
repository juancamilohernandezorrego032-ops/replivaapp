import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <div className="content-section">
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h1>Reserva tu espacio</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
          Nuestros talleres son de cupo limitado para garantizar una atención personalizada. Déjanos tus datos y nos pondremos en contacto contigo.
        </p>
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
