import React from 'react';

const ListaTurnos = ({ turnos, onExcluirTurno, onEditarTurno }) => {
  return (
    <div>
      <h3>Turnos Cadastrados</h3>
      {turnos.length === 0 ? (
        <p>Nenhum turno cadastrado.</p>
      ) : (
        <ul>
          {turnos.map((turno, index) => (
            <li key={index}>
              <strong>Início:</strong> {turno.inicio}, <strong>Fim:</strong> {turno.fim},{' '}
              <strong>Dias:</strong> {turno.dias.join(', ')}
              <button onClick={() => onExcluirTurno(index)}>Excluir</button>
              <button onClick={() => onEditarTurno({ ...turno, index })}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTurnos;
