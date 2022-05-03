

function Navbar() {
    return (
    <nav className="nav">
        <img src="./images/react-icon-small.png"></img>
        <h3 className="logo-text">ReactTaskList</h3>
        <h4 className="tag">React Course - Project Dark Mode</h4>
    </nav>
    )
}


function Main() {
    const [darkMode, setdarkMode] = React.useState(true)

    function changeMind() {
        setdarkMode(prevState => !prevState)
    }

    return (
        <div className={darkMode ? 'dark-div' : 'light-div'}>
            <h1 className={darkMode ? 'dark' : 'light'}>Do you feel like a dark mode theme?</h1>
            <div onClick={changeMind} className={darkMode ?  'light-btn' : 'dark-btn' } >
                <h2>{darkMode ? 'Yes' : 'No'}</h2>
            </div>
        </div>
    )
    
}



function Footer() {
    return (
    <div className="footer">
    <p className="footer-p">This is a Gillus Design, 2022</p>
    </div>
    ) 
}


function App() {
    return (
        <div className="container">
            <Navbar />
            <Main  />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))



