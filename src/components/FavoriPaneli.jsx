// src/components/FavoriPaneli.jsx

function FavoriPaneli({ favoriKitaplar }) {
  return (
    <div style={{ flex: 1 }}>
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      {favoriKitaplar.map(kitap => (
        <div key={kitap.id} style={{ borderBottom: '1px solid #eee', padding: '5px 0' }}>
          {kitap.baslik}
        </div>
      ))}
    </div>
  );
}

export default FavoriPaneli;
