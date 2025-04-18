import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Ajuda from './pages/Ajuda';
import Contato from './pages/Contato';
import Politica from './pages/Politica';
import Termos from './pages/Termos';
import Sorteios from './pages/Sorteios';
import SorteioInstagram from './pages/SorteioInstagram';
import SorteioReels from './pages/SorteioReels';
import ResultadoSorteio from './pages/ResultadoSorteio';

const Placeholder = ({ title }: { title: string }) => {
    return (
    <div style={{ padding: '2rem', textAlign: 'center', fontSize: 24 }}>
      {title} (em construção)
    </div>
  );
}

function LogoSX69() {
  return (
    <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }} aria-label="Página inicial">
      <span style={{ fontFamily: 'Inter, Montserrat, Arial, sans-serif', fontWeight: 800, fontSize: 32, letterSpacing: '-0.065em', color: '#000', lineHeight: 1 }}>S</span>
      <span style={{ fontFamily: 'Inter, Montserrat, Arial, sans-serif', fontWeight: 900, fontSize: 32, letterSpacing: '-0.065em', color: '#ff0000', margin: '0 1px', lineHeight: 1 }}>X</span>
      <span style={{ fontFamily: 'Inter, Montserrat, Arial, sans-serif', fontWeight: 800, fontSize: 32, letterSpacing: '-0.065em', color: '#000', lineHeight: 1 }}>69</span>
    </a>
  );
}

function getUserInitials() {
  if (typeof window !== 'undefined') {
    const nome = localStorage.getItem('sx69_user_nome');
    if (!nome) return null;
    return nome.split(' ').filter(Boolean).slice(0, 2).map(n => n[0]?.toUpperCase() || '').join('');
  }
  return null;
}

function handleLogout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('sx69_user_nome');
    window.location.reload();
  }
}

function handleExcluirConta() {
  if (typeof window !== 'undefined') {
    if (window.confirm('Você tem certeza que deseja excluir sua conta? Esta ação é irreversível.')) {
      localStorage.removeItem('sx69_user_nome');
      localStorage.clear();
      window.location.reload();
    }
  }
}

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  React.useEffect(() => {
    function onResize() {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 600);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const initials = getUserInitials();
  const hideAuthLinks = typeof window !== 'undefined' && (window.location.pathname.startsWith('/login') || window.location.pathname.startsWith('/cadastro'));
  const iconSize = isMobile ? 22 : 28;
  const iconStyle = { width: iconSize, height: iconSize, verticalAlign: 'middle', display: 'inline' };
  return (
    <header style={{ width:'100%', background:'#fff', boxShadow:'0 1px 8px 0 rgba(22,25,59,0.06)', padding:'0.5rem 0', position:'sticky', top:0, zIndex:30, display:'flex', alignItems:'center', height:68 }}>
      <div style={{ maxWidth:1280, margin:'0 auto', width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 2rem' }}>
        <LogoSX69 />
        {initials ? (
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <button aria-label="Abrir menu da conta" style={{marginLeft:10, background:'#124aa6',color:'#fff',border:'none',borderRadius:'50%',width:40,height:40,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:20,boxShadow:'0 1px 5px #124aa610',letterSpacing:1,cursor:'pointer', position:'relative'}} onClick={()=>setOpenMenu(v=>!v)}>{initials}</button>
            {openMenu && (
              <div onMouseLeave={()=>setOpenMenu(false)} style={{ position:'absolute', top:50, right:0, background:'#fff', border:'1.5px solid #e3e7f9', borderRadius:13, boxShadow:'0 4px 24px #124aa617', minWidth:162, padding:'9px 0', zIndex:20 }}>
                <button onClick={handleExcluirConta} style={{ display:'flex',alignItems:'center',gap:8,width:'100%',color:'#e0232f',background:'none',border:'none',padding:'10px 18px',cursor:'pointer',fontWeight:700, fontSize:16, borderBottom:'1px solid #f3f5fa' }} aria-label="Excluir conta">
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none"><rect x="4.2" y="5.5" width="11.6" height="10.3" rx="2" stroke="#e0232f" strokeWidth="1.5"/><path d="M8.2 9.4v3.1M11.8 9.4v3.1" stroke="#e0232f" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="2.5" width="6" height="2" rx="1" fill="#e0232f"/><rect x="10" y="10" width="0" height="0" /></svg>
                  Excluir conta
                </button>
                <button onClick={handleLogout} style={{ display:'flex',alignItems:'center',gap:8,width:'100%',color:'#124aa6',background:'none',border:'none',padding:'9px 18px',cursor:'pointer', fontWeight:700, fontSize:16 }} aria-label="Sair">
                  <svg viewBox="0 0 20 20" fill="none" width="18" height="18"><path d="M9 6v2.5h6m0 0-2-2m2 2-2 2m-5-8v2c0 2.21 0 4.42 0 6.62 0 1.78 0 3.57 0 5.36v2" stroke="#124aa6" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  Sair
                </button>
              </div>
            )}
          </div>
        ) : (!hideAuthLinks && (
          <nav style={{ display: 'flex', gap: 19, alignItems: 'center' }}>
            <a href="/login" aria-label="Login" title="Entrar"
              style={{ color:'#1a324a', textDecoration:'none', fontWeight: 700, fontSize:16, display:'flex', alignItems:'center', gap:6, borderRadius:10, padding:'6px 13px'}}>
              <svg viewBox="0 0 20 20" fill="none" style={iconStyle}><circle cx="10" cy="8" r="4" stroke="#124aa6" strokeWidth="1.3" /><path d="M3.1 16c.8-3.3 13-3.3 13.8 0" stroke="#124aa6" strokeWidth="1.3"/></svg>
              {!isMobile && 'Entrar'}
            </a>
            <a href="/cadastro" aria-label="Criar conta" title="Criar conta"
              style={{ color:'#ff0000', fontWeight:700, textDecoration:'none', fontSize:16, border:'1px solid #ff0000', borderRadius:10, padding:'6px 13px', display:'flex', alignItems:'center', gap:7, marginLeft:4, background:'#fff'}}>
              <svg viewBox="0 0 20 20" fill="none" style={{...iconStyle, width:22, height:22}}><circle cx="10" cy="8" r="4" stroke="#ff0000" strokeWidth="1.3" /><path d="M3.3 16c.6-2.2 9.4-2.2 10 0" stroke="#ff0000" strokeWidth="1.3"/><path d="M14.4 6.6h3m-1.5-1.5v3" stroke="#ff0000" strokeWidth="1.3" strokeLinecap="round"/></svg>
              {!isMobile && 'Cadastre-se'}
            </a>
          </nav>
        ))}
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/sorteios" element={<Sorteios />} />
        <Route path="/sorteios/instagram" element={<SorteioInstagram />} />
        <Route path="/sorteios/reels" element={<SorteioReels />} />
        <Route path="/sorteios/resultado" element={<ResultadoSorteio />} />
        <Route path="*" element={<Placeholder title="Página não encontrada" />} />
      </Routes>
    </Router>
  );
}

export default App;
