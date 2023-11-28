import '../globals.css';
import styles from './registro.module.css';

export default function Registro() {
  return (
    <main>
      <h1>Registre-se</h1>
      <input type="text" placeholder="Usuário" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Confirme a Senha" />
      
      <a className={styles.button} href="./dashboard">
        Registrar e Entrar
      </a>
      <a className={styles.a} href="./login">
        Já tenho Login
      </a>
      <a className={styles.a} href="../">
        Voltar para Tela Inicial
      </a>
    </main>
  );
}