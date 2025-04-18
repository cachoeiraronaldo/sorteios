import React, { useEffect, useRef, useState } from 'react';

const mainGradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';

const influencerImgs = [
  'https://ext.same-assets.com/3296872472/784129408.jpeg', // Juju Salimeni
  'https://ext.same-assets.com/3296872472/1037310887.jpeg', // Grazi
  'https://ext.same-assets.com/3296872472/2874318426.jpeg', // Mari Gon
  'https://ext.same-assets.com/3296872472/1611409352.jpeg', // Leo Picon
  'https://ext.same-assets.com/3296872472/3306819365.jpeg', // Gabriel Rodrigues
  'https://ext.same-assets.com/3296872472/1869053834.jpeg', // Tata
  'https://ext.same-assets.com/3296872472/1109321667.jpeg', // Zeca Pagodinho
  'https://ext.same-assets.com/3296872472/3124489512.jpeg', // Toguro
];
const partnerLogos = [
  'https://ext.same-assets.com/3296872472/1739399420.svg',
];

const winners = [
  { nome: 'Larissa', cidade: 'Cuiabá', foto: 'https://randomuser.me/api/portraits/women/21.jpg', premio: 'AirFryer', comentario: 'Muito fácil e confiável, recomendo!' },
  { nome: 'Diego', cidade: 'Salvador', foto: 'https://randomuser.me/api/portraits/men/42.jpg', premio: 'Vale-compras', comentario: 'Fui o vencedor, recebi o prêmio certinho!' },
  { nome: 'Amanda', cidade: 'Curitiba', foto: 'https://randomuser.me/api/portraits/women/44.jpg', premio: 'iPhone', comentario: 'Participei e ganhei, sensacional.' },
  { nome: 'João Pedro', cidade: 'Manaus', foto: 'https://randomuser.me/api/portraits/men/64.jpg', premio: 'Camiseta SX69', comentario: 'Ganhei rapidinho, transparência na hora!' },
  { nome: 'Marina', cidade: 'Fortaleza', foto: 'https://randomuser.me/api/portraits/women/33.jpg', premio: 'Livro', comentario: 'Foi automático, adorei!' },
  { nome: 'Paulo', cidade: 'Rio de Janeiro', foto: 'https://randomuser.me/api/portraits/men/29.jpg', premio: 'Vale-presente', comentario:'Participei com meus amigos e fui sorteado!'}
];

function CarouselRecentWinners() {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx(i => (i + 1) % winners.length);
    }, 3600);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <section style={{ padding: '44px 0 30px' }}>
      <h2 style={{ fontSize: 26, fontWeight: 800, textAlign: 'center', color: '#124aa6', marginBottom: 25 }}>Ganhadores recentes da SX69!</h2>
      <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position:'relative', minHeight: 190, minWidth:270, width: 320 }}>
          {winners.map((g, i) => (
            <div key={g.nome+g.cidade}
              style={{
                opacity: idx === i ? 1 : 0,
                zIndex: idx === i ? 2 : 1,
                position: 'absolute',
                transition: 'opacity 0.7s',
                left:0, right:0, top:0
              }}>
              <div style={{ boxShadow:'0 3px 30px #124aa62a', borderRadius:18, background:'#fff', padding: '22px 22px', textAlign:'center', minWidth:270, minHeight: 150, display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
                <img src={g.foto} alt={g.nome} style={{ width:59, height:59, borderRadius:40, border:'2px solid #ff0000' }} />
                <div style={{fontWeight:700, color:'#232', fontSize:18, marginBottom: -1}}>{g.nome} <span style={{color:'#999', fontWeight:500, fontSize:15}}>- {g.cidade}</span></div>
                <div style={{ fontSize:15, color:'#134aa6', fontWeight:500 }}>Prêmio: {g.premio}</div>
                <div style={{ color:'#2d335c', fontSize:15, fontStyle:'italic'}}>&quot;{g.comentario}&quot;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HeroSection = () => (
  <section
    style={{
      background: mainGradient,
      color: '#fff',
      padding: '64px 0 48px',
      minHeight: 400,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 40,
      justifyContent: 'center',
    }}
  >
    <div style={{ maxWidth: 480, minWidth: 260 }}>
      <h1 style={{ fontSize: 44, marginBottom: 24, fontWeight: 900, lineHeight: 1.1 }}>
        Sorteio no Instagram fácil, rápido e seguro com sua marca SX69!
      </h1>
      <p style={{ fontSize: 20, marginBottom: 28 }}>Sorteie comentários em posts, reels ou perfis em menos de 3 minutos. Nenhuma senha requerida, seguro e direto no navegador.</p>
      <a href="/sorteios" style={{
        background: '#ff0000',
        color: '#fff',
        fontWeight: 700,
        fontSize: 19,
        padding: '16px 40px',
        borderRadius: 90,
        textDecoration: 'none',
        boxShadow: '0 2px 32px 0 #ff000066',
        transition: 'filter .15s',
        display: 'inline-block',
      }}
      >Fazer sorteio grátis</a>
    </div>
    <div style={{ minWidth: 240 }}>
      <img
        src="https://ext.same-assets.com/3296872472/2096661778.svg"
        alt="Ilustração app sorteio"
        style={{ maxWidth: 370, width: '90%', borderRadius: 32 }}
      />
    </div>
  </section>
);

const Steps = () => (
  <section style={{ background: '#f5fafa', padding: '40px 0' }}>
    <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 32, color: '#134b8d' }}>Como funciona?</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
      <CardEtapa icon={'🎲'} title="1. Informe o post" desc="Cole a URL do post ou perfil do sorteio (Instagram ou Reels)." />
      <CardEtapa icon={'🔎'} title="2. Validar e carregar" desc="O sistema busca e prepara todos os comentários válidos automaticamente."/>
      <CardEtapa icon={'🏆'} title="3. Realize o sorteio" desc="Clique no botão e veja o resultado online, ao vivo, com máxima transparência!"/>
    </div>
  </section>
);

function CardEtapa({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{ width: 305, background: '#fff', borderRadius: 18, boxShadow: '0 1px 12px #134b8d09', padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 38 }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: 19, color: '#134b8d' }}>{title}</div>
      <div style={{ color: '#21294d', fontSize: 16 }}>{desc}</div>
    </div>
  );
}

const Partners = () => (
  <section style={{ background: '#f5fafa', padding: '26px 0', marginBottom: 40 }}>
    <h3 style={{ textAlign: 'center', color: '#7f8aaa', fontWeight: 600, fontSize: 17, marginBottom: 8 }}>Apoiadores:</h3>
    <div style={{ display: 'flex', gap: 36, justifyContent: 'center', alignItems: 'center' }}>
      {partnerLogos.map((src, i) => (
        <img src={src} key={src} style={{ height: 32, maxWidth: 200, objectFit: 'contain', filter: 'contrast(1.2)' }} alt="Parceiro" />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: '#e0e3ed', color: '#1a213f', padding: '38px 0 26px 0', marginTop: 40 }}>
    <div style={{ maxWidth:1200, margin: '0 auto', width: '95%', textAlign: 'center', fontSize: 17, letterSpacing:0.1 }}>
      <div style={{fontWeight:700}}>SX69</div>
      <div style={{margin:'12px 0'}}>Sorteio inteligente, rápido e seguro. © {new Date().getFullYear()} SX69. Não é afiliado ao Instagram.</div>
      <a href="/politica" style={{ color:'#134b8d', fontWeight:600, textDecoration:'underline', marginRight:15 }}>Política de Privacidade</a>
      <a href="/termos" style={{ color:'#134b8d', fontWeight:600, textDecoration:'underline' }}>Termos de Uso</a>
    </div>
  </footer>
)

const Homepage = () => (
  <>
    <HeroSection />
    <Steps />
    <CarouselRecentWinners />
    <Partners />
    <Footer />
  </>
);

export default Homepage;
