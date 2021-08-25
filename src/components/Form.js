import React, { Component } from 'react';
import FormElement from './reusable/FormElement';

export class LuxuryCarsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addLuxuryCar(this.state);
    this.setState({
      name: '',
      url: '',
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <FormElement
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={this.state.name}
            placeholder="enter a car name"
            onChange={(e) => {
              this.setState({
                name: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <FormElement
            onChange={(e) => {
              this.setState({
                url: e.target.value,
              });
            }}
            type="url"
            name="url"
            value={this.state.url}
            id="url"
            placeholder="enter a car url/link"
          />
        </div>
        <div>
          <FormElement type="submit" value="submit" />
        </div>
      </form>
    );
  }
}

export class SuperCarsForm extends Component {}
