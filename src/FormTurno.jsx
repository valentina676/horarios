import React, { useState, useEffect } from 'react';

const FormTurno = ({ onAdicionarTurno, editando, onEditarTurno }) => {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [dias, setDias] = useState([]);

  const diasSemana = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

  // Preenche os dados do turno ao iniciar a edição
  useEffect(() => {
    if (editando !== null) {
      setInicio(editando.inicio);
      setFim(editando.fim);
      setDias(editando.dias);
    } else {
      resetForm();
    }
  }, [editando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const turno = { inicio, fim, dias };

    if (editando !== null) {
      onEditarTurno(editando.index, turno); // Edita o turno
    } else {
      onAdicionarTurno(turno); // Adiciona um novo turno
    }
    resetForm();
  };

  const resetForm = () => {
    setInicio('');
    setFim('');
    setDias([]);
  };

  const handleCheckboxChange = (dia) => {
    setDias(prevDias =>
      prevDias.includes(dia)
        ? prevDias.filter(d => d !== dia)
        : [...prevDias, dia]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Hora de Início:</label>
        <input type="time" value={inicio} onChange={(e) => setInicio(e.target.value)} required />
      </div>
      <div>
        <label>Hora de Fim:</label>
        <input type="time" value={fim} onChange={(e) => setFim(e.target.value)} required />
      </div>
      <div>
        <label>Dias da Semana:</label>
        {diasSemana.map((dia) => (
          <div key={dia}>
            <label>
              <input
                type="checkbox"
                checked={dias.includes(dia)}
                onChange={() => handleCheckboxChange(dia)}
              />
              {dia}
            </label>
          </div>
        ))}
      </div>
      <button type="submit">{editando !== null ? 'Salvar Alterações' : 'Adicionar Turno'}</button>
    </form>
  );
};

export default FormTurno;
