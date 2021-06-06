import React, {useEffect} from 'react';
import './App.css';
import Parse from 'parse';
import { Constants } from './enviroments';
	


const App = () => { 

  useEffect(() => {
    Parse.initialize(Constants.APPLICATION_ID, Constants.JAVASCRIPT_KEY);
    Parse.serverURL = Constants.SERVER_URL;

    const B4aVehicle = Parse.Object.extend('B4aVehicle');
    const query = new Parse.Query(B4aVehicle);
    // query.equalTo("objectId", "rDCuN6IGr7");
    query.find().then((results) => {
      console.log("results =>", results);
      for (const object of results){
        const name = object.get("name")
        const price = object.get("price")
        const color = object.get("color")
        if (typeof document === 'undefined')
          document.write(`B4aVehicle found: ${JSON.stringify(name)}`);
          document.write(`B4aVehicle found: ${JSON.stringify(price)}`);
          document.write(`B4aVehicle found: ${JSON.stringify(color)}`);
          console.log('B4aVehicle found:', name);
          console.log('B4aVehicle found:', price);
          console.log('B4aVehicle found:', color);
      }}, (error) => {
        if (typeof document !== 'undefined') 
          document.write(`Error while fetching B4aVehicle: ${JSON.stringify(error)}`);
          console.error('Error while fetching B4aVehicle', error);
        });

  },[])

  return (
    <div className="App">
      <header className="App-header">
        App
      </header>
    </div>
  );
}

export default App;
