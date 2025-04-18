import React from 'react';

const Politica = () => (
  <main style={{ minHeight: '90vh', background: '#f7fafc', paddingTop: 54 }}>
    <section style={{ maxWidth: 650, margin: '0 auto', background: '#fff', borderRadius: 15, boxShadow: '0 1px 8px #134b8d14', padding: '40px 26px', color: '#212b36' }}>
      <h1 style={{ fontSize: 26, fontWeight: 900, color: '#124aa6', marginBottom: 16 }}>Política de Privacidade</h1>
      <p style={{marginBottom:20}}>
        Esta página explica como a SX69 coleta, armazena e protege dados dos usuários. Usamos cookies e dados de navegação de forma restrita e não compartilhamos dados pessoais com terceiros. Nenhuma senha ou informação sensível do Instagram é solicitada ou armazenada.
      </p>
      <ul style={{ paddingLeft: 20, marginBottom: 20 }}>
        <li style={{marginBottom:7}}><b>Coleta de dados:</b> Apenas informações fornecidas pelo usuário e dados de uso anônimos.</li>
        <li style={{marginBottom:7}}><b>Uso dos dados:</b> Exclusivamente para oferecer os serviços de sorteio, contato e segurança.</li>
        <li style={{marginBottom:7}}><b>Compartilhamento:</b> Não vendemos ou transferimos dados pessoais.</li>
        <li style={{marginBottom:7}}><b>Opções de usuário:</b> Você pode solicitar remoção ou explicação dos dados pelo e-mail mostrado em contato.</li>
      </ul>
      <p style={{fontSize:15, color:'#1d3977'}}>
        Caso reste alguma dúvida, entre em contato pelo nosso <a href="/contato" style={{color:'#124aa6',fontWeight:700, textDecoration:'underline'}}>formulário</a>.
      </p>
      <div style={{marginTop:42, fontSize:13.5, color:'#7d8696', lineHeight:1.6}}>
        Última atualização: 16/04/2025
      </div>
    </section>
  </main>
);

export default Politica;
