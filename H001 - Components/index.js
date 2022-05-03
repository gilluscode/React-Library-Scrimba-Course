


  function MyBody() {

    return (
  <div className="container">
          <h1>My React App</h1>
        <hr></hr>
        <ul>
          <li>Excited to use HTML</li>
          <li>I can still use CSS</li>
          <li>It has JS</li>
          <li>Is maintained by Facebook</li>
        </ul>
    </div>
    )
  } 

  ReactDOM.render(<MyBody />, document.getElementById('root'));