import type React from 'react';
import { useState } from 'react';

const gradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';
const vencedor = {
  nome: 'Ana Beatriz',
  foto: 'https://randomuser.me/api/portraits/women/82.jpg',
  perfil: '@aninhabt',
  comentario: 'Eu mereço! Sorte minha? #sx69',
};
const info = {
  participantes: 282,
  data: '16/04/2025 às 17:25',
  filtros: ['Ignorar duplicados', 'Deve mencionar alguém'],
  post: 'https://instagram.com/p/Cv1sorteioDemo/',
}

const modalBg: React.CSSProperties = {
  position: 'fixed', zIndex: 99, left: 0, top: 0, width: '100vw', height: '100vh', background: 'rgba(25,30,46,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center'
};

function RelatorioModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={modalBg}>
      <div style={{background:'#fff', borderRadius: 14, boxShadow:'0 2px 28px #134b8d25', minWidth:320, maxWidth:415, padding:'34px 22px 28px', position:'relative', textAlign:'center'}}>
        <button onClick={onClose} aria-label="Fechar modal" style={{position:'absolute',top:16,right:18,fontSize:25,color:'#134b8d',background:'none',border:0,cursor:'pointer',fontWeight:600,lineHeight:1}}>&times;</button>
        <div style={{fontWeight:800, fontSize:19,marginBottom:8,color:'#124aa6'}}>Relatório do sorteio</div>
        <div style={{color:'#45526b', fontSize:16, marginBottom:13}}><b>Data:</b> {info.data}</div>
        <img src={vencedor.foto} alt="Foto vencedor" style={{width:70,height:70,borderRadius:36,border:'2.5px solid #124aa6',marginBottom:9}}/>
        <div style={{fontWeight:700, fontSize:17, color:'#232'} }>{vencedor.nome}</div>
        <div style={{color:'#417bc8', fontWeight:700, fontSize:15}}>{vencedor.perfil}</div>
        <div style={{fontSize:15, color:'#222',background:'#f6f8fa', borderRadius:7, padding:'8px 10px',margin:'10px auto 13px',display:'inline-block'}}>{vencedor.comentario}</div>
        <div style={{margin:'11px 0 3px', color:'#124aa6',fontWeight:700,fontSize:15}}>{info.participantes} participantes</div>
        <div style={{fontSize:15, color:'#2d335c',margin:'0 0 7px'}}>
          Filtros: {info.filtros.map(f=>(<span key={f} style={{marginRight:7}}>{f}</span>))}
        </div>
        <div style={{fontSize:14, marginBottom:9,color:'#626982'}}>
          Post original: <a href={info.post} target="_blank" rel="noopener noreferrer" style={{color:'#134b8d',textDecoration:'underline'}}>Ver no Instagram</a>
        </div>
        <div style={{padding:'12px 14px', margin:'14px auto 0',background:'#eff1fc', borderRadius:10, color:'#107b53',fontWeight:600,width:'fit-content',fontSize:15}}>Relatório gerado apenas para visualização. Não é documento oficial.</div>
      </div>
    </div>
  );
}

const ResultadoSorteio = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main style={{ background: '#f5f7fa', minHeight: '92vh' }}>
      <section style={{ maxWidth: 560, margin: '0 auto', padding: '60px 14px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 30, color: '#124aa6', fontWeight: 900, marginBottom: 13 }}>Resultado do Sorteio</h1>
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 1px 24px #124aa61b', margin:'0 auto', padding: '40px 18px', maxWidth: 440}}>
          <div style={{ fontSize: 19, color:'#636dac',fontWeight:700, marginBottom:18 }}>
            <span style={{ color:'#07939b' }}>Sorteio realizado com sucesso!</span> <br/>
            <span style={{ fontWeight:500 }}>{info.data}</span>
          </div>
          <img src={vencedor.foto} alt="Foto vencedor" style={{ width:93, height:93, borderRadius:47, border:'3px solid #124aa6', marginBottom:16 }} />
          <div style={{ fontWeight: 900, fontSize: 22 }}>{vencedor.nome}</div>
          <div style={{ color:'#417bc8', fontWeight:700, marginBottom:7, fontSize:17 }}>{vencedor.perfil}</div>
          <div style={{ fontSize: 16, color:'#222', background:'#f6f8fa', borderRadius:8, padding:'10px 16px', margin:'10px auto 17px', display:'inline-block' }}>{vencedor.comentario}</div>

          <div style={{ margin:'20px 0 8px', color:'#222', fontSize:15 }}>
            <strong>{info.participantes}</strong> participantes <br/>
            Filtros: {info.filtros.map(f=><span key={f} style={{marginRight:8}}>{f}</span>)}
            <div><a href={info.post} style={{ color:'#134b8d', textDecoration:'underline' }} target="_blank" rel="noopener noreferrer">Ver post do sorteio</a></div>
          </div>

          <div style={{ display:'flex', justifyContent:'center', gap:21, marginTop:26 }}>
            <a href="/sorteios" style={{ background:gradient, color:'#fff', borderRadius:55, padding:'13px 40px', fontWeight:800, fontSize:16, textDecoration:'none', boxShadow:'0 1px 11px #134b8d12' }}>Novo sorteio</a>
            <button type="button" onClick={()=>setShowModal(true)} style={{ color:'#134b8d', textDecoration:'underline', fontWeight:600, fontSize:16, paddingTop:14, background:'none', border:'none', cursor:'pointer' }}>Baixar relatório</button>
          </div>
        </div>
        {showModal && <RelatorioModal onClose={()=>setShowModal(false)} />}
      </section>
    </main>
  )
}

export default ResultadoSorteio;
