import type React from "react";
import { useState } from "react";

const mainGradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';
const UserIcon = () => (<svg style={{verticalAlign:'middle',marginRight:7}} height="1.25em" fill="#124aa6" viewBox="0 0 20 20"><circle cx="10" cy="7" r="4"/><path d="M2,18c1.5-4,14.5-4,16,0"/></svg>);
const LoginIcon = () => (<svg height="1.1em" style={{verticalAlign:'middle',marginRight:7,marginTop:-2}} fill="#fff" viewBox="0 0 20 20"><path d="M3 10h9M12 13l3-3-3-3" stroke="#fff" strokeWidth="2" fill="none"/><rect x="1" y="1" width="18" height="18" rx="4" stroke="#fff" strokeWidth="1" fill="#124aa6" /></svg>);

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [msg, setMsg] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Login simulado. Bem-vindo! (Funcionalidade visual para demo)");
  }

  return (
    <main style={{ minHeight: '90vh', background: '#f6f8fa', paddingTop: 55 }}>
      <section style={{ maxWidth: 430, margin: '0 auto', background: '#fff', boxShadow: '0 2px 22px #124aa616', borderRadius: 16, padding: '42px 24px', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900, fontSize: 28, color: '#124aa6', marginBottom: 7 }}>Acesse sua conta</h1>
        <p style={{ color: '#4e5070', fontSize: 16, marginBottom: 24 }}>Entre com seu e-mail e senha para gerenciar seus sorteios.</p>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 7 }}>
          <input
            type="email"
            required
            spellCheck={false}
            placeholder="Seu e-mail"
            value={email}
            autoComplete="username"
            onChange={e => setEmail(e.target.value)}
            style={{ fontSize: 17, padding: '14px 22px', borderRadius: 13, border: '1.5px solid #124aa62d', background: '#f9fbff', outline: 'none' }}
          />
          <div style={{ position: 'relative' }}>
            <input
              type={showPass ? 'text' : 'password'}
              required
              placeholder="Senha"
              value={senha}
              autoComplete="current-password"
              onChange={e => setSenha(e.target.value)}
              style={{ fontSize: 17, padding: '14px 22px', borderRadius: 13, border: '1.5px solid #124aa62d', background: '#f9fbff', outline: 'none', width: '100%' }}
            />
            <button type="button" style={{ position: 'absolute', right: 13, top: 8, background: 'none', border: 'none', color: '#124aa6', fontWeight: 600, fontSize: 13, cursor: 'pointer' }} onClick={()=>setShowPass(s=>!s)}>{showPass ? 'Ocultar' : 'Mostrar'}</button>
          </div>
          <button
            type="submit"
            style={{
              background: mainGradient,
              color: '#fff',
              fontWeight: 800,
              borderRadius: 77,
              fontSize: 18,
              padding: '13px 0 13px 0',
              border: 'none',
              marginTop: 10,
              cursor: 'pointer',
              boxShadow: '0 2px 12px #124aa616',
              letterSpacing: '0.02em',
              display: 'flex', alignItems: 'center', justifyContent:'center', gap:6,
            }}
            disabled={!email || !senha}
          ><LoginIcon />Entrar</button>
        </form>
        <div style={{ marginBottom: 16, color: '#ec1f2c', fontSize: 15, fontWeight: 600 }}>{msg}</div>
        <div style={{ fontSize: 16, color: '#3d4e77', marginBottom: 13 }}>
          <a href="/cadastro" style={{ color: '#124aa6', fontWeight: 800, textDecoration: 'underline', marginRight: 13, display:'inline-flex', alignItems:'center' }}><UserIcon />Criar conta</a>
          <a href="/ajuda" style={{ color: '#124aa6', textDecoration: 'underline', fontWeight: 600 }}>Esqueci a senha</a>
        </div>
      </section>
    </main>
  );
};

export default Login;
