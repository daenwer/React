import React from "react";

class UserAlbums extends React.Component {
  state = {
    albums: null
  };

  fetchAlbums = () =>
    fetch("//jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(albums =>
        this.setState({
          albums: albums.filter(album => album.userId === this.props.userId)
        })
      );

  componentDidMount() {
    this.fetchAlbums();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.userId !== this.props.userId ||
      prevState.array !== this.state.array
    ) {
      this.setState({ array: null });
      this.fetchAlbums();
    }
  }

  render() {
    if (this.state.albums === null) {
      return "...Loading...";
    }

    return (
      <ul>
        {this.state.albums.map(album => (
          <li>{album.title}</li>
        ))}
      </ul>
    );
  }
}

export class Users extends React.Component {
  state = {
    users: null,
    activeUserId: null
  };

  componentDidMount() {
    fetch("//jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    if (this.state.users === null) {
      return "...Loading...";
    }

    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <li
              key={user.id}
              style={
                this.state.activeUserId === user.id
                  ? {
                      backgroundColor: "yellow"
                    }
                  : null
              }
              onClick={() => this.setState({ activeUserId: user.id })}
            >
              {user.name}
            </li>
          ))}
        </ul>
        {this.state.activeUserId && (
          <UserAlbums userId={this.state.activeUserId} />
        )}
      </div>
    );
  }
}
