"use client";

import styles from "./faca-parte.module.css";
import { useEffect, useState } from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function FacaParte() {
  const [cadastros, setCadastros] = useState([]);

  const chamadaApi = async () => {
    try {
      const response = await fetch("http://localhost:8080/sce");
      const data = await response.json();
      setCadastros(data);
    } catch (error) {
      console.error("Falha na listagem.");
    }
  };

  useEffect(() => {
    chamadaApi();
  }, []);

  const [cadastro, setCadastro] = useState({
    idCliente: 0,
    nome: "",
    email: "",
    genero: "",
  });

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setCadastro({ ...cadastro, [name]: value });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/sce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastro),
      });

      if (response.ok) {
        alert("Cadastro concluído com sucesso.");
        setCadastro({
          idCliente: 0,
          nome: "",
          email: "",
          genero: "",
        });
      }
    } catch (error) {
      console.error("Falha ao cadastrar: ", error);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.div}>
        <h2 className={styles.h2}>Cadastre-se</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="idNome">
              ID: *
            </label>
            <input
              className={styles.input}
              type="number"
              name="idCliente"
              id="idCliente"
              value={cadastro.idCliente}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite um id..."
              required
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="idNome">
              Nome: *
            </label>
            <input
              className={styles.input}
              type="text"
              name="nome"
              id="idNome"
              value={cadastro.nome}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite seu nome..."
              required
            />
          </div>
          <div>
            <label className={styles.label} htmlE-mail="idE-mail">
              E-mail: *
            </label>
            <input
              className={styles.input}
              type="text"
              name="email"
              id="idE-mail"
              value={cadastro.email}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite seu e-mail..."
              required
            />
          </div>
          <div>
            <label className={styles.label} htmlGenero="idGenero">
              Gênero: *
            </label>
            <input
              className={styles.input}
              type="text"
              name="genero"
              id="idGenero"
              value={cadastro.genero}
              onChange={(evento) => handleChange(evento)}
              placeholder="Qual o seu gênero?"
              required
            />
          </div>
          <div>
            <button className={styles.button} type="submit">
              Cadastrar
            </button>
          </div>
          <div>
            <p className={styles.p}>
              Campos marcados com "*" são obrigatórios.
            </p>
          </div>
        </form>
      </div>
      <div className={styles.div}>
        <h2 className={styles.h2}>Clientes Cadastrados</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Nome</th>
              <th className={styles.th}>E-mail</th>
              <th className={styles.th}>Gênero</th>
            </tr>
          </thead>
          <tbody>
            {cadastros.map((c) => (
              <tr key={c.codigo}>
                <td className={styles.td}>{c.nome}</td>
                <td className={styles.td}>{c.email}</td>
                <td className={styles.td}>{c.genero}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className={styles.tfoot}>
            <tr>
              <td className={styles.td} colSpan={4}>
                Total de clientes: {cadastros.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
