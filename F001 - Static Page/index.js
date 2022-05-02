

const page = (
    // this is JSX
    <div className="container">
        <div className="header">
            <h3>My awesome website in React</h3>
        </div>
    <h4>Reasons I love React</h4>
    <ol>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's a hireable skill</li>
        <li>It's actively maintained by skilled people</li>
    </ol>
    <footer>
        <p>This is a gillus design,  2022</p>
    </footer>
    </div>

)

ReactDOM.render(page, document.getElementById('root'));
//ReactDOM, takes elements and turns them to real elements that DOM understands.