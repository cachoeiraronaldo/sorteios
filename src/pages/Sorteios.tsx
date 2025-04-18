import type React from "react";
import { useState } from "react";

const mainGradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';
const winnerProfile = {
  nome: 'Julia Santos',
  foto: 'https://randomuser.me/api/portraits/women/68.jpg',
  perfil: '@juliainsta',
  comentario: 'Participandooo! #sorteSX69',
}
const relatorioInfo = {
  participantes: 143,
  data: '16/04/2025 às 16:00',
  filtros: ['Ignorar duplicados'],
  post: 'https://instagram.com/p/Cv1SorteSX69/',
};
const modalBg: React.CSSProperties = {
  position: 'fixed', zIndex: 99, left: 0, top: 0, width: '100vw', height: '100vh', background: 'rgba(25,30,46,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center'
};
function RelatorioModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={modalBg}>
      <div style={{background:'#fff', borderRadius: 14, boxShadow:'0 2px 28px #134b8d25', minWidth:320, maxWidth:415, padding:'34px 22px 28px', position:'relative', textAlign:'center'}}>
        <button onClick={onClose} aria-label="Fechar modal" style={{position:'absolute',top:16,right:18,fontSize:25,color:'#134b8d',background:'none',border:0,cursor:'pointer',fontWeight:600,lineHeight:1}}>&times;</button>
        <div style={{fontWeight:800, fontSize:19,marginBottom:8,color:'#124aa6'}}>Relatório do sorteio</div>
        <div style={{color:'#45526b', fontSize:16, marginBottom:13}}><b>Data:</b> {relatorioInfo.data}</div>
        <img src={winnerProfile.foto} alt="Foto vencedor" style={{width:70,height:70,borderRadius:36,border:'2.5px solid #124aa6',marginBottom:9}}/>
        <div style={{fontWeight:700, fontSize:17, color:'#232'} }>{winnerProfile.nome}</div>
        <div style={{color:'#417bc8', fontWeight:700, fontSize:15}}>{winnerProfile.perfil}</div>
        <div style={{fontSize:15, color:'#222',background:'#f6f8fa', borderRadius:7, padding:'8px 10px',margin:'10px auto 13px',display:'inline-block'}}>{winnerProfile.comentario}</div>
        <div style={{margin:'11px 0 3px', color:'#124aa6',fontWeight:700,fontSize:15}}>{relatorioInfo.participantes} participantes</div>
        <div style={{fontSize:15, color:'#2d335c',margin:'0 0 7px'}}>
          Filtros: {relatorioInfo.filtros.map(f=>(<span key={f} style={{marginRight:7}}>{f}</span>))}
        </div>
        <div style={{fontSize:14, marginBottom:9,color:'#626982'}}>
          Post original: <a href={relatorioInfo.post} target="_blank" rel="noopener noreferrer" style={{color:'#134b8d',textDecoration:'underline'}}>Ver no Instagram</a>
        </div>
        <div style={{padding:'12px 14px', margin:'14px auto 0',background:'#eff1fc', borderRadius:10, color:'#107b53',fontWeight:600,width:'fit-content',fontSize:15}}>Relatório gerado apenas para visualização. Não é documento oficial.</div>
      </div>
    </div>
  );
}

const Sorteios = () => {
  const [url, setUrl] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [mostraResultado, setMostraResultado] = useState(false);
  const [filtros, setFiltros] = useState({
    menciona: false,
    removerDuplicados: true,
  });
  const [showModal, setShowModal] = useState(false);

  function handleBuscar(ev: React.FormEvent) {
    ev.preventDefault();
    setBuscando(true);
    setTimeout(() => { setBuscando(false); setMostraResultado(true); }, 1500);
  }

  return (
    <main style={{ background: '#f7fafc', minHeight: '95vh', width: '100%' }}>
      <section style={{ maxWidth: 550, margin: '0 auto', padding: '54px 12px', textAlign: 'center' }}>
        <h1 style={{ color: '#124aa6', fontSize: 34, fontWeight: 900, marginBottom: 10 }}>Realize um sorteio agora</h1>
        <p style={{ color: '#484a62', marginBottom: 32, fontSize: 17 }}>Cole abaixo o link do post, vídeo ou perfil Instagram para fazer o sorteio seguro!</p>
        <form onSubmit={handleBuscar} style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', marginBottom: 30 }}>
          <input
            type="url"
            autoFocus
            required
            placeholder="Cole aqui a URL..."
            value={url}
            onChange={e => setUrl(e.target.value)}
            style={{
              width: '100%',
              maxWidth: 450,
              fontSize: 18,
              padding: '17px 24px',
              borderRadius: 16,
              border: '1.5px solid #124aa62f',
              outline: 'none',
              boxSizing: 'border-box',
              background: '#fff',
            }}
          />
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 17 }}>
            <label style={{ cursor: 'pointer', display: 'flex', gap: 7, alignItems: 'center' }}>
              <input type="checkbox" checked={filtros.menciona} onChange={e => setFiltros(f => ({ ...f, menciona: e.target.checked }))} style={{ accentColor: '#124aa6' }} />
              Precisa mencionar alguém
            </label>
            <label style={{ cursor: 'pointer', display: 'flex', gap: 7, alignItems: 'center' }}>
              <input type="checkbox" checked={filtros.removerDuplicados} onChange={e => setFiltros(f => ({ ...f, removerDuplicados: e.target.checked }))} style={{ accentColor: '#124aa6' }} />
              Ignorar duplicados
            </label>
          </div>
          <button
            type="submit"
            disabled={!url.trim() || buscando}
            style={{
              background: mainGradient,
              color: '#fff',
              padding: '15px 36px',
              borderRadius: 55,
              fontWeight: 700,
              fontSize: 20,
              border: 0,
              cursor: 'pointer',
              marginTop: 16,
              minWidth: 210,
              opacity: (buscando || !url.trim()) ? 0.65 : 1,
              transition: 'opacity .14s',
              boxShadow: '0 2px 32px 0 #124aa622',
            }}
          >{buscando ? 'Buscando...' : 'Sortear agora'}</button>
        </form>
        {mostraResultado && (
          <div style={{ position: 'relative' }}>
            <ResultadoSorteio onRepetir={() => setMostraResultado(false)} onShowRelatorio={() => setShowModal(true)} />
            {showModal && <RelatorioModal onClose={()=>setShowModal(false)} />}
          </div>
        )}
      </section>
    </main>
  );
};

function ResultadoSorteio({ onRepetir, onShowRelatorio }: { onRepetir: () => void, onShowRelatorio: () => void }) {
  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 0 24px 0 #124aa611', padding: 32, margin: '0 auto', maxWidth: 410 }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: '#124aa6', marginBottom: 18 }}>Resultado do sorteio 🎉</div>
      <img src={winnerProfile.foto} alt="Foto perfil vencedor" style={{ width: 88, height: 88, borderRadius: 44, marginBottom: 10, border: '2.5px solid #124aa6' }} />
      <div style={{ fontSize: 19, fontWeight: 700, color:'#232326' }}>{winnerProfile.nome}</div>
      <div style={{ color:'#485fa3', fontWeight: 600, fontSize:17, marginBottom:6 }}>{winnerProfile.perfil}</div>
      <div style={{ fontSize: 16, color:'#222', background:'#f7f7fa', borderRadius:8, padding:'8px 13px', marginBottom:17 }}>{winnerProfile.comentario}</div>
      <button onClick={onRepetir} style={{ padding: '11px 30px', borderRadius: 44, border:0, fontSize:16, background:'#ff0000', color:'#fff', fontWeight:700, cursor:'pointer', marginTop:8 }}>Sortear novamente</button>
      <button onClick={onShowRelatorio} style={{ display:'inline-block', marginTop:18, textDecoration:'underline', color:'#124aa6', fontWeight:500, fontSize:16, background: 'none', border: 'none', cursor: 'pointer' }}>Gerar relatório deste sorteio</button>
    </div>
  );
}

export default Sorteios;
