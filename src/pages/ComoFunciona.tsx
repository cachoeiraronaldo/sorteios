import React from "react";

const mainGradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';

const passos = [
  {
    icon: '📋',
    title: '1. Escolha a publicação ou perfil',
    desc: 'Copie e cole o link do post, reel ou perfil que deseja sortear no Instagram.'
  },
  {
    icon: '🔗',
    title: '2. Valide os dados',
    desc: 'O SX69 busca os comentários e verifica quem está participando conforme as regras.'
  },
  {
    icon: '🎉',
    title: '3. Sorteie online',
    desc: 'Clique e veja ao vivo o(s) vencedor(es) do sorteio, simples, rápido e transparente.'
  },
  {
    icon: '⬇️',
    title: '4. Baixe o relatório',
    desc: 'Salve o link ou baixe o comprovante para transparência com seus seguidores.'
  }
];

const ComoFunciona = () => (
  <main style={{ background: '#fbfcfe', minHeight: '90vh' }}>
    <section style={{ maxWidth: 1250, margin: '0 auto', padding: '56px 16px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 38, fontWeight: 900, color: '#124aa6', marginBottom: 18 }}>Como funciona o SX69?</h1>
      <p style={{ fontSize: 19, maxWidth: 560, margin: '0 auto 50px', color: '#1d2440' }}>
        Nós facilitamos sorteios transparentes no Instagram. Sem senha, sem instalação, sem enrolação e 100% seguro!
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 48 }}>
        {passos.map(passo => (
          <div key={passo.title} style={{ width: 285, background: '#fff', borderRadius: 18, boxShadow: '0 1px 12px #134b8d11', padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: 40 }}>{passo.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#134b8d' }}>{passo.title}</div>
            <div style={{ color: '#34406a' }}>{passo.desc}</div>
          </div>
        ))}
      </div>
      <a
        href="/sorteios"
        style={{
          background: mainGradient,
          color: '#fff',
          padding: '15px 50px',
          borderRadius: 99,
          fontWeight: 700,
          fontSize: 18,
          textDecoration: 'none',
          boxShadow: '0 1px 18px 0 #134b8d11'
        }}
      >Comece seu sorteio agora</a>
    </section>
  </main>
);

export default ComoFunciona;
