import React from 'react';

const Termos = () => (
  <main style={{ minHeight: '90vh', background: '#f7fafc', paddingTop: 54 }}>
    <section style={{ maxWidth: 650, margin: '0 auto', background: '#fff', borderRadius: 15, boxShadow: '0 1px 8px #134b8d14', padding: '40px 26px', color: '#222a34' }}>
      <h1 style={{ fontSize: 26, fontWeight: 900, color: '#124aa6', marginBottom: 16 }}>Termos de Uso</h1>
      <p style={{marginBottom:19}}>
        Ao utilizar a SX69, o usuário concorda com os termos estabelecidos nesta página. Nos reservamos o direito de cancelar sorteios que tentem fraudar o sistema ou que sejam denunciados pelo Instagram. O usuário é responsável por garantir que tem permissão da rede social e dos participantes para realizar sorteios.
      </p>
      <ul style={{ paddingLeft: 20, marginBottom: 20 }}>
        <li style={{marginBottom:7}}><b>Proibições:</b> Não aceitamos sorteios envolvendo atividades ilícitas, promoção de ódio ou que violem diretrizes das redes sociais.</li>
        <li style={{marginBottom:7}}><b>Garantias:</b> A SX69 não se responsabiliza por promessas de prêmios não cumpridas pelos sorteadores.</li>
        <li style={{marginBottom:7}}><b>Conteúdo:</b> Não é permitida reprodução do sistema ou layout sem permissão.</li>
        <li style={{marginBottom:7}}><b>Transparência:</b> Fornecemos relatórios para comprovação, mas não somos afiliados ao Instagram.</li>
      </ul>
      <div style={{fontSize:15, color:'#1d3977'}}>
        Para dúvidas sobre regras, direitos ou responsabilidades, entre em contato pelo nosso <a href="/contato" style={{color:'#124aa6',fontWeight:700, textDecoration:'underline'}}>formulário</a>.
      </div>
      <div style={{marginTop:42, fontSize:13.5, color:'#7d8696', lineHeight:1.6}}>
        Última atualização: 16/04/2025
      </div>
    </section>
  </main>
);

export default Termos;
