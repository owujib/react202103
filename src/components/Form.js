import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    url: '',
  };
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addLuxuryCars(this.state);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            value={this.state.name}
            placeholder="enter car name"
          />
          <br /> <br />
          <input
            onChange={(e) => {
              this.setState({ url: e.target.value });
            }}
            value={this.state.url}
            type="text"
            placeholder="enter car url/link"
          />
          <br />
          <br />
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default Form;
