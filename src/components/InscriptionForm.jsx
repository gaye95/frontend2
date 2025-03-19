import React, { useState } from "react";
import axios from "axios";

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    classe: "",
    adresse: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://backend2-1-173j.onrender.com/api/etudiants",
        formData
      );
      alert("Inscription réussie !");
      setFormData({
        nom: "",
        prenom: "",
        classe: "",
        adresse: "",
        telephone: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Formulaire d'inscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="classe"
          placeholder="Classe"
          value={formData.classe}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="adresse"
          placeholder="Adresse"
          value={formData.adresse}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          name="telephone"
          placeholder="Téléphone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default InscriptionForm;
