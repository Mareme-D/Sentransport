function StatReseau({ lignes }) {
  const totalLignes = lignes.length;

  return (
    <div>
      <h3>Statistiques</h3>
      <p>Total lignes : {totalLignes}</p>
    </div>
  );
}

export default StatReseau;