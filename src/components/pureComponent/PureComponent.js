import React, { PureComponent } from 'react';

class ParentComponent extends React.Component {
    state = {
        name: "John",
        count: 0
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    changeName = () => {
        this.setState({ name: this.state.name === "John" ? "Doe" : "John" })
    }
    render() {
        return (
            <>
                <ChildComponent name={this.state.name} />
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Click</button>
                <button onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}
class ChildComponent extends PureComponent {
    render() {
        console.log("Child Component Render")
        return (
            <h1>Well Come {this.props.name}</h1>
        )
    }
}
export default ParentComponent;