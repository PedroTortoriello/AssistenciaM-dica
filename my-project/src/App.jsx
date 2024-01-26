import React, { useState } from 'react';
import './styles.css';

function App() {
  // Estados para armazenar os dados dos titulares e dependentes
  const [titulares, setTitulares] = useState([]);
  const [dependentes, setDependentes] = useState([]);

  // Estados para armazenar os valores dos campos do formulário de titular e dependente
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [filial, setFilial] = useState('');

  const [tipoDependente, setTipoDependente] = useState('Cônjuge');
  const [nomeDependente, setNomeDependente] = useState('');
  const [cpfDependente, setCpfDependente] = useState('');
  const [dataNascimentoDependente, setDataNascimentoDependente] = useState('');

  // Função para enviar titular
  const enviarTitular = () => {
    const novoTitular = {
      matricula,
      nome,
      empresa,
      filial
    };
    setTitulares([...titulares, novoTitular]);
    limparCamposTitular();
  };

  // Função para enviar dependente
  const enviarDependente = () => {
    const novoDependente = {
      tipoDependente,
      nomeDependente,
      cpfDependente,
      dataNascimentoDependente
    };
    setDependentes([...dependentes, novoDependente]);

  };

  // Função para limpar campos do formulário de titular
  const limparCamposTitular = () => {
    setMatricula('');
    setNome('');
    setEmpresa('');
    setFilial('');
  };

  // Função para excluir dependente
  const excluirDependente = (index) => {
    const novosDependentes = [...dependentes];
    novosDependentes.splice(index, 1);
    setDependentes(novosDependentes);
  };

  // Função para alterar dependente
  const alterarDependente = (index) => {
    const dependenteSelecionado = dependentes[index];
    setTipoDependente(dependenteSelecionado.tipoDependente);
    setNomeDependente(dependenteSelecionado.nomeDependente);
    setCpfDependente(dependenteSelecionado.cpfDependente);
    setDataNascimentoDependente(dependenteSelecionado.dataNascimentoDependente);
    excluirDependente(index);
  };

  return (
    <div className="container">
      <div>
        <h2>Formulário de Cadastro</h2>
        <form>
          <div>
            <label htmlFor="matricula">Número de Matrícula:</label>
            <input type="text" id="matricula" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
          </div>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div>
            <label htmlFor="empresa">Empresa:</label>
            <input type="text" id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
          </div>
          <div>
            <label htmlFor="filial">Filial do Titular:</label>
            <input type="text" id="filial" value={filial} onChange={(e) => setFilial(e.target.value)} />
          </div>
          <button type="button" onClick={enviarTitular}>Enviar Titular</button>
        </form>
      </div>

      <div>
        <h2>Tabela de Cadastros de Titulares</h2>
        <table>
          <thead>
            <tr>
              <th>Número de Matrícula</th>
              <th>Nome</th>
              <th>Empresa</th>
              <th>Filial do Titular</th>
            </tr>
          </thead>
          <tbody>
            {titulares.map((titular, index) => (
              <tr key={index}>
                <td>{titular.matricula}</td>
                <td>{titular.nome}</td>
                <td>{titular.empresa}</td>
                <td>{titular.filial}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Formulário de Dependente</h2>
        <form>
          <div>
            <label htmlFor="tipo-dependente">Tipo de Dependente:</label>
            <select id="tipo-dependente" value={tipoDependente} onChange={(e) => setTipoDependente(e.target.value)}>
              <option value="Cônjuge">Cônjuge</option>
              <option value="Filho(a)">Filho(a)</option>
              <option value="Pai/Mãe">Pai/Mãe</option>
              <option value="Irmão/Irmã">Irmão/Irmã</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div>
            <label htmlFor="nome-dependente">Nome do Dependente:</label>
            <input type="text" id="nome-dependente" value={nomeDependente} onChange={(e) => setNomeDependente(e.target.value)} />
          </div>
          <div>
            <label htmlFor="cpf-dependente">CPF do Dependente:</label>
            <input type="text" id="cpf-dependente" value={cpfDependente} onChange={(e) => setCpfDependente(e.target.value)} />
          </div>
          <div>
            <label htmlFor="data-nascimento-dependente">Data de Nascimento do Dependente:</label>
            <input type="date" id="data-nascimento-dependente" value={dataNascimentoDependente} onChange={(e) => setDataNascimentoDependente(e.target.value)} />
          </div>
          <div>
            <button type="button" onClick={enviarDependente}>Enviar Dependente</button>

          </div>
        </form>
      </div>

      <div>
        <h2>Tabela de Cadastros de Dependentes</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo de Dependente</th>
              <th>Nome do Dependente</th>
              <th>CPF do Dependente</th>
              <th>Data de Nascimento do Dependente</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {dependentes.map((dependente, index) => (
              <tr key={index}>
                <td>{dependente.tipoDependente}</td>
                <td>{dependente.nomeDependente}</td>
                <td>{dependente.cpfDependente}</td>
                <td>{new Date(dependente.dataNascimentoDependente).toLocaleDateString('pt-BR')}</td>
                <td>
                  <button type="button" onClick={() => alterarDependente(index)}>Alterar</button>
                  <button type="button" onClick={() => excluirDependente(index)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
