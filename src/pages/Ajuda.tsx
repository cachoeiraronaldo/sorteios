import type React from "react";
import { useState } from "react";

const mainGradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';

const Ajuda = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleRecover(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Se este e-mail existir, enviaremos um link para redefinição em instantes.");
    setEmail("");
  }

  return (
    <main style={{ minHeight: '85vh', background: '#f6f8fa', paddingTop: 55 }}>
      <section style={{ maxWidth: 410, margin: '0 auto', background: '#fff', boxShadow: '0 2px 22px #124aa615', borderRadius: 16, padding: '38px 18px', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900, fontSize: 25, color: '#124aa6', marginBottom: 9 }}>Precisa de ajuda?</h1>
        <p style={{ color: '#4f5172', fontSize: 15, marginBottom: 19 }}>Digite o e-mail cadastrado para redefinir sua senha.<br/>Enviaremos um link em poucos minutos.</p>
        <form onSubmit={handleRecover} style={{ display: 'flex', flexDirection: 'column', gap: 17, marginBottom: 10 }}>
          <input
            type="email"
            required
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
            style={{ fontSize: 17, padding: '12px 20px', borderRadius: 10, border: '1.5px solid #124aa62d', background: '#f9fbff', outline: 'none' }}
          />
          <button
            type="submit"
            style={{
              background: mainGradient,
              color: '#fff',
              fontWeight: 800,
              borderRadius: 77,
              fontSize: 17.5,
              padding: '11px 0',
              border: 'none',
              marginTop: 5,
              cursor: 'pointer',
              boxShadow: '0 1px 10px #124aa613',
              letterSpacing: '0.01em',
            }}
            disabled={!email}
          >Enviar link de recuperação</button>
        </form>
        <div style={{ margin: '8px 0 16px', color: msg ? '#0e8962' : '#ec1734', fontSize: 15, minHeight: 22 }}>{msg}</div>
        <div style={{ fontSize: 15.5, color: '#3d4e77' }}>
          <a href="/login" style={{ color: '#124aa6', fontWeight: 800, textDecoration: 'underline', marginRight: 13 }}>Voltar ao login</a>
          <a href="/contato" style={{ color: '#124aa6', textDecoration: 'underline', fontWeight: 600 }}>Falar com suporte</a>
        </div>
      </section>
    </main>
  );
};

export default Ajuda;
