import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'principiante',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario capturado:", formData);
    localStorage.setItem('zenith_booking', JSON.stringify(formData));
    alert('Reserva enviada con éxito (guardada en localStorage)');
    
    // Reset form after submit
    setFormData({
      name: '',
      email: '',
      level: 'principiante',
      message: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name} 
            onChange={handleInputChange} 
            placeholder="Tu nombre..." 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email} 
            onChange={handleInputChange} 
            placeholder="tu@email.com" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="level">Nivel de Conocimiento</label>
          <select 
            id="level"
            name="level"
            value={formData.level} 
            onChange={handleInputChange}
          >
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje / Notas Especiales</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message} 
            onChange={handleInputChange} 
            placeholder="¿Quieres contarnos algo sobre tu bonsái?"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-block">Enviar Reserva</button>
      </form>
    </div>
  );
};

export default BookingForm;