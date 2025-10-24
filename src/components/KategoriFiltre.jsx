// src/components/KategoriFiltre.jsx

function KategoriFiltre({ kategori, onFiltre }) {
  return (
    <select value={kategori} onChange={onFiltre} style={{ padding: '10px' }}>
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="CS">CS</option>
      <option value="Tasarım">Tasarım</option>
    </select>
  );
}

export default KategoriFiltre;
