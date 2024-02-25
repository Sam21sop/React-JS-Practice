import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Use the required lifecycle methods here
  async componentDidMount(){
    console.log("App ComponentDidMount() Executed!");

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const photos = await response.json();
      this.setState({photos, loading:false})
    } catch (error) {
      console.log(error);
      this.setState({loading:false})
    }
  }

  render() {
    // Display loading status here
    const {photos, loading} = this.state;
    if(loading){
      return <div>Loading...</div>
    }
    return (
      <div className="App">
        {photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
