import React from "react";

class FragmentRenderList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/users";
    let response = fetch(url);
    response
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          persons: data,
        })
      );
  }

  bullet = {
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
  }

  items = {
      padding: '5px 7px',
      color: 'white',
      backgroundColor: '#4f4f4f',
      fontSize: '16px',
      margin: '10px'
  }

  render() {
    return (
      <React.Fragment>
        <h4>Loading data while mounting</h4>
        <ul style = { this.bullet }>
          {this.state.persons.map((person) => (
            <li key={person.id} style = {this.items}>{`${person.name} - ${person.email.toLowerCase()}`}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default FragmentRenderList;
