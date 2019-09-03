import React from "react";
import { when } from "q";

const whenTimeout = timeout =>
  new Promise(resolve => setTimeout(resolve, timeout));

export class Albums extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    albums: null,
    users: null
  };

  onClick = () => {
    this.setState({ test: "123" });
  };

  componentDidMount() {
    document.addEventListener("click", this.onClick);

    Promise.all([
      fetch("//jsonplaceholder.typicode.com/albums").then(response =>
        response.json()
      ),
      fetch("//jsonplaceholder.typicode.com/users").then(response =>
        response.json()
      ),
      whenTimeout(500)
    ])
      .then(([albums, users]) =>
        this.setState({ isLoading: false, albums, users })
      )
      .catch(() => this.setState({ isLoading: false, isError: true }));
  }

  componentDidUpdate(prevProp, prevState) {
    console.log(arguments);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClick);
  }

  render() {
    if (this.state.isError) {
      return "Unexpected error occured. Please, contact support";
    }

    if (this.state.isLoading) {
      return "...isLoading...";
    }

    return (
      <div>
        {this.state.users.map(user => {
          const usersAlbums = this.state.albums.filter(
            album => album.userId === user.id
          );

          const albumsContent = usersAlbums.length
            ? usersAlbums.map(album => <h4>{album.title}</h4>)
            : "No albums for the user";

          return (
            <div>
              <h2>{user.name}</h2>
              {albumsContent}
            </div>
          );
        })}
      </div>
    );
  }
}
