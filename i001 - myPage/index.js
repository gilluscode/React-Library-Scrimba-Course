
  // Capital letter to begin
  function Page() {

    return (
  <div>
    <header>
      <nav>
        <img src="react-logo.png" width="40px" />
        <h1>My React App</h1>
        <p>Built with react</p>
      </nav>
    </header>
      <main>
        <h2>simple design <i class="fa-solid fa-pencil">  D</i> </h2>
        <ul>
          <li>About Me</li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </main>
      <footer>
        <small>© 2022 Gillus Code development. All rights reserved.</small>
      </footer>
    </div>
    )
  } 

  ReactDOM.render(
      <Page />, // Page component. We can fit more inside a div
  document.getElementById('root'));