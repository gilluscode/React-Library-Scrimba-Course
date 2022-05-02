
//step by step - imperative way
const h1 = document.createElement('h1');
h1.textContent = "This is an imperative way to program";
h1.className = 'header';
document.getElementById('root').append(h1);

// declarative way - JSX - JSXML
const element = <h1 className='header'>This is JSX</h1>
ReactDOM.render(element, document.getElementById('root'));
console.log(element);


// One parent is needed
const page = (
    <div>
        <h1>This is JSX</h1>
        <p>This is it's paragraph</p>
    </div>
)

ReactDOM.render(page, document.getElementById('root'))
console.log(page); //renders an object.

const nav = (
    <nav>
        <h1>Gillus Code</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>

);
//(parament , where to render)
ReactDOM.render(nav, document.getElementById('root'));
console.log(nav);