const getSignupHtml = () => {
  let main = document.getElementsByTagName('section')[0] 

  const formSignupComponenetHtml = ` 
    <form action="" method="" form-id="signin">
    <div class="formulario signup">
      <h2>Sign up</h2>
      <div class="input-column">
        <div class="row">
          <label for="">Name</label>
          <input type="text" id="name" placeholder="Digite seu nome" required>
        </div>
          <div class="row">
            <label for="">Lastname</label>
            <input type="text" id="lastname" placeholder="Digite seu sobrenome" required>
          </div>
        </div>
        <div class="input-column">
          <div class="row">
            <label for="">Birth Date</label>
            <input type="date" id="dateBirth" required>
          </div>
          <div class="row">
            <label for="">Phone</label>
            <input type="text" id="phone" placeholder="Digite seu email" required>
          </div>
        </div>
        <div class="input-column">
          <div class="row">
            <label for="">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" required>
          </div>
        </div>
        <div class="input-column">
          <div class="row">
            <label for="">Password</label>
            <input type="password" id="password" placeholder="Digite sua senha" required>
          </div>
          <div class="row">
            <label for="">Confirm password</label>
            <input type="password" id="confirmPassword" placeholder="Digite sua senha de novo" required>
          </div>
        </div>
        <button class="btn btn-click btn-enter">Try Free</button>
    </div>
  </form>
  `
  main.innerHTML = formSignupComponenetHtml
}

export default getSignupHtml;