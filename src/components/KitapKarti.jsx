// src/components/KitapKarti.jsx

function KitapKarti({ kitap, onFavoriToggle, favorideMi }) {
  const { baslik, yazar, kategori } = kitap;

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{baslik}</h3>
      <p>{yazar} | Kategori: {kategori}</p>
      <button onClick={() => onFavoriToggle(kitap.id)}>
        {favorideMi ? '★ Favoriden Çıkar' : '☆ Favoriye Ekle'}
      </button>
    </div>
  );
}

export default KitapKarti;
