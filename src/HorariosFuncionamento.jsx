import React, { useState } from 'react';
import FormTurno from './FormTurno';
import ListaTurnos from './ListaTurnos';
import './App.css';


const HorariosFuncionamento = () => {
  const [turnos, setTurnos] = useState([]);
  const [editando, setEditando] = useState(null); // Para armazenar o turno que está sendo editado

  // Adiciona um novo turno
  const adicionarTurno = (novoTurno) => {
    setTurnos([...turnos, novoTurno]);
  };

  // Remove um turno
  const excluirTurno = (index) => {
    const novosTurnos = turnos.filter((_, i) => i !== index);
    setTurnos(novosTurnos);
  };

  // Edita um turno existente
  const editarTurno = (index, turnoEditado) => {
    const novosTurnos = turnos.map((turno, i) => (i === index ? turnoEditado : turno));
    setTurnos(novosTurnos);
  };

  return (
    <div>
      <h2>Cadastro de Horários de Funcionamento</h2>
      <FormTurno onAdicionarTurno={adicionarTurno} editando={editando} onEditarTurno={editarTurno} />
      <ListaTurnos turnos={turnos} onExcluirTurno={excluirTurno} onEditarTurno={setEditando} />
    </div>
  );
};

export default HorariosFuncionamento;
