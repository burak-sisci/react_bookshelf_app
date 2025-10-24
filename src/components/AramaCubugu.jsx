// src/components/AramaCubugu.jsx

function AramaCubugu({ aramaMetni, onArama }) {
  return (
    <input
      type="text"
      placeholder="Kitap veya yazar adı..."
      value={aramaMetni}
      onChange={onArama}
      style={{ padding: '10px', width: '200px' }}
    />
  );
}

export default AramaCubugu;
