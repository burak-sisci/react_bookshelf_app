// src/components/KitapListe.jsx

import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, onFavoriToggle, favoriler }) {
  return (
    <div style={{ flex: 2 }}>
      <h2>Kitaplar</h2>
      {kitaplar.map(kitap => (
        <KitapKarti
          key={kitap.id}
          kitap={kitap}
          onFavoriToggle={onFavoriToggle}
          favorideMi={favoriler.includes(kitap.id)}
        />
      ))}
    </div>
  );
}

export default KitapListe;
