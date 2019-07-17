console.log("App is running!!")

let visibility = false;

const showDetails = () => {
    visibility = !visibility
    renderApp();
}

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility &&
                <div>
                <p>These are some details.</p>
                </div>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp();
