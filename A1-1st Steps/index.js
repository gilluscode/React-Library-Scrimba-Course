// ReactDOM availble here. render(displays elements for me)
// ReactDOM.render(<h2>I am using React!</h2>, document.getElementById('root')); //its appending this h2. ReactDom comes from the library.

ReactDOM.render(
    <div classname='list'>
        <h1>Task List</h1>
        <hr></hr>
        <ul classname="ul">
            <li> Task Handler </li>
            <li> Task One </li>
            <li> Taske Two </li>
            <li> Taske Three </li>
        </ul>
    </div>, 
    document.getElementById('root')
); 
