import styles from "./Form.module.css";
import Input from "./Input";
import ShowPassword from "../../images/eye.svg";

export default function Form() {
  return (
    <div className={styles.container_form}>
      <form>
        <span className={styles.span_title_form}>Login</span>
        <Input
          text="Email ou Telefone"
          name="user"
          id="email_user"
          placeholder="example@.com.br"
          type="email"
          src=""
        />
        <Input
          text="Senha"
          name="password"
          id="password_user"
          placeholder="********"
          type="password"
          src={ShowPassword}
        />
        <a href="/">Esqueci minha senha</a>
        <Input type="submit" value="Entrar" src="" />
        <div className={styles.container_create_account}>
          <span className={styles.span_account}>
            Não tem uma Conta? <a href="/"> Criar agora!</a>
          </span>
        </div>
        <div className={styles.login_google}>
        <span>Entrar com</span>

        <a href="/">Continuar com o google</a>
      </div>
      </form>
    
    </div>
  );
}
