const jokesArray= [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]

function Joke(props) {
    return (
        <div>
            {props.setup && <h3 className='setup'>Setup: {props.setup}</h3>}
            <p className="punch">Punchline: {props.punchline}</p>
        </div>
    )
}



function Main() {
    const jokeElements = jokesArray.map(joke => { 
        return  <Joke setup={joke.setup} punchline={joke.punchline} /> })
    return (
        <main className="main-container">
            <h1> Jokes Generator</h1>
            {jokeElements}
        </main>
    )
}


function App() {
    return (
        <div className="main-container">
            <Main />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))