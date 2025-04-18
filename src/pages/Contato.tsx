import type React from "react";
import { useState } from "react";

const mainGradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleContato(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3500);
    setNome(""); setEmail(""); setMsg("");
  }

  return (
    <main style={{ minHeight: '85vh', background: '#f7fafc', paddingTop: 54 }}>
      <section style={{ maxWidth: 440, margin: '0 auto', background: '#fff', boxShadow: '0 2px 20px #124aa61b', borderRadius: 15, padding: '38px 20px', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900, fontSize: 27, color: '#124aa6', marginBottom: 9 }}>Fale com o suporte</h1>
        <p style={{ color: '#495073', fontSize: 15.5, marginBottom: 21 }}>
          Preencha o formulário abaixo e responderemos por e-mail em até 1 dia útil.<br/>
          Para dúvidas rápidas, consulte a <a href="/ajuda" style={{color:'#124aa6',fontWeight:700}}>central de ajuda</a>.
        </p>
        <form onSubmit={handleContato} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <input
            type="text"
            required
            minLength={2}
            placeholder="Seu nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            style={{ fontSize: 16, padding: '12px 18px', borderRadius: 10, border: '1.5px solid #124aa62b', background: '#f9fbff', outline: 'none' }}
          />
          <input
            type="email"
            required
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ fontSize: 16, padding: '12px 18px', borderRadius: 10, border: '1.5px solid #124aa62b', background: '#f9fbff', outline: 'none' }}
          />
          <textarea
            required
            placeholder="Como podemos ajudar?"
            value={msg}
            onChange={e => setMsg(e.target.value)}
            rows={4}
            style={{ fontSize: 16, padding: '12px 18px', borderRadius: 10, border: '1.5px solid #124aa62b', background: '#f9fbff', outline: 'none', resize: 'vertical', minHeight: 77 }}
          />
          <button
            type="submit"
            disabled={!nome || !email || !msg || enviado}
            style={{
              background: mainGradient,
              color: '#fff',
              fontWeight: 800,
              borderRadius: 63,
              fontSize: 17.2,
              padding: '12px 0',
              border: 'none',
              marginTop: 7,
              cursor: 'pointer',
              boxShadow: '0 2px 10px #124aa611',
              letterSpacing: '0.01em',
            }}
          >Enviar mensagem</button>
        </form>
        <div style={{ minHeight: 24, color: enviado ? '#007955' : '#ef4141', fontSize: 15.2, margin: '14px 0 0', fontWeight:600 }}>
          {enviado ? "Mensagem enviada! Responderemos em breve." : ""}
        </div>
      </section>
    </main>
  );
};

export default Contato;
