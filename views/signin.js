const getSigninHtml = () => {
  let main = document.getElementsByTagName('section')[0] 

  const formSigninComponenetHtml = `  
  <form action="" method="" form-id="signin">
    <div class="formulario signin">
      <h2>Sign in</h2>
      <div class="input-formatted">
        <label for="">Email</label>
        <input type="email" id="email" placeholder="Digite seu email">
      </div>
      <div class="input-formatted">
        <label for="">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha">
      </div>
      <button class="btn btn-click btn-enter">Entrar</button>
    </div>
  </form>
`
  main.innerHTML = formSigninComponenetHtml
}

export {
  getSigninHtml,
}