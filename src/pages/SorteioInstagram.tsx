import type React from 'react';
import { useState } from 'react';

const gradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';
const usuarioMock = {
  nome: 'Carlos Moraes',
  foto: 'https://randomuser.me/api/portraits/men/37.jpg',
  perfil: '@carlosmoraes',
  comentario: 'Quero muito ganhar!! @amiga1 @amigo2',
};
const relatorioInfo = {
  participantes: 205,
  data: '16/04/2025 às 16:39',
  filtros: ['Ignorar duplicados', 'Precisa mencionar alguém'],
  post: 'https://instagram.com/p/Cv1sorteioINST/',
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
        <img src={usuarioMock.foto} alt="Foto vencedor" style={{width:70,height:70,borderRadius:36,border:'2.5px solid #124aa6',marginBottom:9}}/>
        <div style={{fontWeight:700, fontSize:17, color:'#232'} }>{usuarioMock.nome}</div>
        <div style={{color:'#417bc8', fontWeight:700, fontSize:15}}>{usuarioMock.perfil}</div>
        <div style={{fontSize:15, color:'#222',background:'#f6f8fa', borderRadius:7, padding:'8px 10px',margin:'10px auto 13px',display:'inline-block'}}>{usuarioMock.comentario}</div>
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

const SorteioInstagram = () => {
  const [url, setUrl] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [resultado, setResultado] = useState(false);
  const [filtros, setFiltros] = useState({
    menciona: true,
    duplicados: false,
  });
  const [showModal, setShowModal] = useState(false);

  function buscar(ev: React.FormEvent) {
    ev.preventDefault();
    setBuscando(true);
    setTimeout(() => { setBuscando(false); setResultado(true); }, 1300);
  }

  return (
    <main style={{ background: '#f7fafd', minHeight: '93vh' }}>
      <section style={{ maxWidth: 520, margin: '0 auto', padding: '50px 12px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, color: '#124aa6', fontWeight: 900, marginBottom: 6 }}>Sorteio Instagram</h1>
        <p style={{ color: '#474e73', fontSize: 16, marginBottom: 24 }}>
          Para sortear comentários de um post ou perfil no Instagram, cole o link abaixo, selecione as regras desejadas e boa sorte!
        </p>
        <form onSubmit={buscar} style={{ display:'flex', flexDirection:'column', gap:18, alignItems:'center', marginBottom:28 }}>
          <input
            type="url"
            placeholder="Cole aqui a URL do post ou perfil"
            required
            autoFocus
            value={url}
            onChange={e => setUrl(e.target.value)}
            style={{ width:'99%', maxWidth:440, fontSize:17, padding:'15px 22px', borderRadius:15, border:'1.5px solid #124aa62d', background:'#fff', outline:'none' }}
          />
          <div style={{ display:'flex', gap:12, alignItems:'center', fontSize:16 }}>
            <label>
              <input type="checkbox" checked={filtros.menciona} onChange={e=>setFiltros(f=>({...f, menciona: e.target.checked}))} style={{ accentColor:'#124aa6' }} />
              &nbsp; Precisa mencionar alguém
            </label>
            <label>
              <input type="checkbox" checked={filtros.duplicados} onChange={e=>setFiltros(f=>({...f, duplicados: e.target.checked}))} style={{ accentColor:'#124aa6' }} />
              &nbsp; Aceitar participantes duplicados
            </label>
          </div>
          <button type="submit" disabled={!url.trim()||buscando} style={{
            background: gradient,
            color: '#fff',
            padding: '15px 34px',
            borderRadius: 60,
            fontWeight: 800,
            fontSize: 18,
            border: 0,
            cursor: 'pointer',
            minWidth: 160,
            marginTop:12,
            opacity: (buscando||!url.trim())?0.65:1,
            transition: 'opacity .13s',
            boxShadow: '0 2px 22px 0 #124aa612',
          }}>{buscando? 'Buscando...':'Sortear no Instagram'}</button>
        </form>
        <div style={{color:'#7b88a2', fontSize:15, marginBottom:26}}>
          <b>Como funciona:</b> Cole o link, ajuste regras e sorteie. Participação segura, rápida e transparente.<br/>
        </div>
        {resultado && <div style={{position:'relative'}}><ResultInstagram onRepetir={()=>setResultado(false)} onShowRelatorio={()=>setShowModal(true)} />{showModal && <RelatorioModal onClose={()=>setShowModal(false)} />}</div>}
      </section>
    </main>
  );
};

function ResultInstagram({onRepetir,onShowRelatorio}:{onRepetir:()=>void, onShowRelatorio:()=>void}) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: 29, margin:'0 auto', maxWidth:370, boxShadow:'0 0 20px #124aa610' }}>
      <h2 style={{fontSize:22, color:'#124aa6', fontWeight:800}}>🏆 Sorteio finalizado</h2>
      <img src={usuarioMock.foto} alt="Vencedor" style={{ width:80, height:80, borderRadius:40, border:'2.5px solid #124aa6', margin: '18px 0 6px' }}/>
      <div style={{fontWeight: 700, color: '#222', fontSize:18}}>{usuarioMock.nome}</div>
      <div style={{color:'#4775c6', fontWeight:600, fontSize:16}}> {usuarioMock.perfil} </div>
      <div style={{margin: '7px auto 11px', color:'#282e4d', background:'#f4f5fc', borderRadius:7, padding:'8px 10px', fontSize:16}}>{usuarioMock.comentario}</div>
      <button onClick={onRepetir} style={{padding:'11px 25px', borderRadius:44, border:0, background:'#ff0000', color:'#fff', fontWeight:800, fontSize:16, marginTop:5, cursor:'pointer'}}>Sortear novamente</button>
      <button onClick={onShowRelatorio} style={{display:'block', marginTop:14, color:'#124aa6', textDecoration:'underline', fontWeight:500, fontSize:16, background:'none', border:'none', cursor:'pointer'}}>Relatório deste sorteio</button>
    </div>
  );
}

export default SorteioInstagram;
