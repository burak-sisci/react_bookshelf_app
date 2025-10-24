// src/App.jsx

import React, { useState, useEffect } from 'react';
import KitapListe from './components/KitapListe';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import FavoriPaneli from './components/FavoriPaneli';

// Sabit Kitap Verisi
const KITAP_LISTESI = [
  { id: 1, baslik: "React'e Giriş", yazar: "D. Usta", kategori: "Web" },
  { id: 2, baslik: "İleri JavaScript", yazar: "S. Kılıç", kategori: "Web" },
  { id: 3, baslik: "Veri Yapıları", yazar: "A. Demir", kategori: "CS" },
  { id: 4, baslik: "Algoritmalar", yazar: "E. Kaya", kategori: "CS" },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "N. Akın", kategori: "Tasarım" },
];

function App() {
  // State'ler
  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem('sonArama') || '');
  const [kategori, setKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState(() => JSON.parse(localStorage.getItem('favoriler')) || []);

  // Veriyi Tarayıcıda Saklama
  useEffect(() => {
    localStorage.setItem('sonArama', aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [favoriler]);

  // Olay Yöneticileri
  const handleArama = (event) => setAramaMetni(event.target.value);
  const handleFiltre = (event) => setKategori(event.target.value);
  const handleFavoriToggle = (kitapId) => {
    setFavoriler(prevFavoriler =>
      prevFavoriler.includes(kitapId)
        ? prevFavoriler.filter(id => id !== kitapId)
        : [...prevFavoriler, kitapId]
    );
  };

  // Filtreleme Mantığı
  const filtrelenmisKitaplar = KITAP_LISTESI.filter(kitap => {
    const aramaSarti = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriSarti = kategori === 'Tümü' || kitap.kategori === kategori;
    return aramaSarti && kategoriSarti;
  });
  const favoriKitaplar = KITAP_LISTESI.filter(kitap => favoriler.includes(kitap.id));

  // Arayüz
  return (
    <div style={{ fontFamily: 'Arial', margin: 'auto', width: '800px' }}>
      <h1>Mini Kitaplık</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <AramaCubugu aramaMetni={aramaMetni} onArama={handleArama} />
        <KategoriFiltre kategori={kategori} onFiltre={handleFiltre} />
      </div>
      <hr style={{ margin: '20px 0' }} />
      <div style={{ display: 'flex', gap: '40px' }}>
        <KitapListe
          kitaplar={filtrelenmisKitaplar}
          onFavoriToggle={handleFavoriToggle}
          favoriler={favoriler}
        />
        <FavoriPaneli favoriKitaplar={favoriKitaplar} />
      </div>
    </div>
  );
}

export default App;
