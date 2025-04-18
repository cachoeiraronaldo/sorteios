import type React from "react";
import { useState } from "react";

const mainGradient = 'linear-gradient(90deg, #124aa6 0%, #134b8d 100%)';
const UserIcon = () => (<svg style={{verticalAlign:'middle',marginRight:7}} height="1.25em" fill="#124aa6" viewBox="0 0 20 20"><circle cx="10" cy="7" r="4"/><path d="M2,18c1.5-4,14.5-4,16,0"/></svg>);
const LoginIcon = () => (<svg style={{verticalAlign:'middle',marginRight:7,marginLeft:2}} height="1.18em" fill="#124aa6" viewBox="0 0 20 20"><path d="M3 10h9M12 13l3-3-3-3" stroke="#124aa6" strokeWidth="2" fill="none"/><rect x="1" y="1" width="18" height="18" rx="4" stroke="#124aa6" strokeWidth="1" fill="none" /></svg>);

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  const [msg, setMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    if (senha !== senha2) {
      setMsg("As senhas não conferem.");
      return;
    }
    setMsg("Conta criada com sucesso! Faça login para usar a plataforma.");
    setNome(""); setEmail(""); setSenha(""); setSenha2("");
  }

  return (
    <main style={{ minHeight: '90vh', background: '#f6f8fa', paddingTop: 55 }}>
      <section style={{ maxWidth: 430, margin: '0 auto', background: '#fff', boxShadow: '0 2px 22px #124aa616', borderRadius: 16, padding: '38px 22px', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900, fontSize: 27, color: '#124aa6', marginBottom: 7 }}>Criar sua conta</h1>
        <p style={{ color: '#4e5070', fontSize: 15, marginBottom: 23 }}>Preencha os dados para cadastrar e começar seus sorteios no Instagram.</p>
        <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: 17 }}>
          <input
            type="text"
            required
            placeholder="Nome completo"
            value={nome}
            onChange={e => setNome(e.target.value)}
            minLength={3}
            autoComplete="name"
            style={{ fontSize: 17, padding: '13px 20px', borderRadius: 12, border: '1.5px solid #124aa635', background: '#f9fbff', outline: 'none' }}
          />
          <input
            type="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
            style={{ fontSize: 17, padding: '13px 20px', borderRadius: 12, border: '1.5px solid #124aa635', background: '#f9fbff', outline: 'none' }}
          />
          <div style={{ position: 'relative' }}>
            <input
              type={showPass ? 'text' : 'password'}
              required
              minLength={6}
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              autoComplete="new-password"
              style={{ fontSize: 17, padding: '13px 20px', borderRadius: 12, border: '1.5px solid #124aa635', background: '#f9fbff', outline: 'none', width: '100%' }}
            />
            <button type="button" style={{ position: 'absolute', right: 12, top: 6, background: 'none', border: 'none', color: '#124aa6', fontWeight: 600, fontSize: 13, cursor: 'pointer' }} onClick={()=>setShowPass(s=>!s)}>{showPass ? 'Ocultar' : 'Mostrar'}</button>
          </div>
          <input
            type={showPass ? 'text' : 'password'}
            required
            placeholder="Confirmar senha"
            minLength={6}
            value={senha2}
            onChange={e => setSenha2(e.target.value)}
            autoComplete="new-password"
            style={{ fontSize: 17, padding: '13px 20px', borderRadius: 12, border: '1.5px solid #124aa635', background: '#f9fbff', outline: 'none' }}
          />
          <button
            type="submit"
            style={{
              background: mainGradient,
              color: '#fff',
              fontWeight: 800,
              borderRadius: 77,
              fontSize: 18,
              padding: '12px 0',
              border: 'none',
              marginTop: 7,
              cursor: 'pointer',
              boxShadow: '0 2px 12px #124aa616',
              letterSpacing: '0.02em',
              display: 'flex', alignItems: 'center', justifyContent:'center', gap:5,
            }}
            disabled={!email || !senha || !senha2 || !nome}
          ><UserIcon />Criar conta</button>
        </form>
        <div style={{ marginTop: 14, color: msg.startsWith('Conta criada') ? '#107b53' : '#ef4141', fontSize: 15, fontWeight: 600, minHeight:22 }}>{msg}</div>
        <div style={{ fontSize: 15.6, color: '#3d4e77', marginTop: 8 }}>
          <a href="/login" style={{ color: '#124aa6', fontWeight: 800, textDecoration: 'underline', display:'inline-flex', alignItems:'center' }}><LoginIcon />Já tenho uma conta</a>
        </div>
      </section>
    </main>
  );
};

export default Cadastro;
