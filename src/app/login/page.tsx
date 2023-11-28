import '../globals.css';
import styles from './login.module.css';

export default function Login() {
  return (
    <main>
      <h1>Login</h1>
      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Senha" />
      <a className={styles.button} href="./dashboard">
        Login
      </a>
      <a className={styles.a} href="./registro">
        Registre-se
      </a>
      <a className={styles.a} href="./recover">
        Esqueci minha Senha
      </a>
      <a className={styles.a} href="../">
        Voltar para Tela Inicial
      </a>
    </main>
  );
}