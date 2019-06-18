import React from "react";

class InputTimeline extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: ""
    }

    this.setName = this.setName.bind(this);
  }

  setName(event) {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <form
      id="timeline-form"
      onSubmit={this.setName}
      action={"https://twitter.com/" + this.state.userName}
      >
      <input
      id="input-name"
      name="userName"
      value={this.state.userName}
      placeholder="Enter your username"
      onChange={this.setName}
      />
      </form>
    )
  }
}

export default InputTimeline;
