class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteAll(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(option){
        if (!option) {
            alert("enter valid option")
        } else if (this.state.options.indexOf(option) > -1) {
            alert("this option exists")
        }

        this.setState((prevState) =>{
            return {
                options: this.state.options.concat(option)
            };
        })
    }

    handlePick(){
        const num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[num];
        alert(option)
    }

    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />

                <Options
                    options={this.state.options}
                    handleDeleteAll={this.handleDeleteAll}
                />
                <AddOptions
                  handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        )
    };
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
                {
                    this.props.options.map((option => <Option key={option} optionText={option} />))
                }
                <button onClick={this.props.handleDeleteAll}>Remove All</button>
            </div>
        );
    }
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
