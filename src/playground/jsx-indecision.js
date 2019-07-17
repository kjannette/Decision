console.log("App is running")

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderOptions();
}

const onRemoveAll = (e) => {
    e.preventDefault();
    app.options = [];
    renderOptions();
}

const onMakeDecision = () => {
    var item = app.options[Math.floor(Math.random() * app.options.length)];
    alert(item);
}

const appRoot = document.getElementById("app");

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
                {(app.subtitle) && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? "Here are your options:" : "No Options" }</p>
                <p>{app.options.length}</p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
                <button onClick={onRemoveAll}>Remove All</button>
                <ol>
                {
                    app.options.map((option) =>  <li key={option}>Option: {option}</li>)
                }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>submit</button>
                </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

renderOptions();
