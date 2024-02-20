// import React from "react";
import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { profileDatas } from './profileDatas';
import './App.css';

// const state = {
//     profileDatas: profileDatas,
//     searchfield: ''
// }

// const App = (  ) => {
//     return (
//         <div className="tc">
//             <h1>Robofriends</h1>
//             <SearchBox />
//             <CardList profileDatas={profileDatas}/>
//         </div>
//     );
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            // profileDatas: profileDatas,
            profileDatas: [],
            searchfield: ''
        }
        // console.log('state = 1 : constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(users => {  })
            .then(users => this.setState({ profileDatas: users }))

            // .then(response => {
            //     return response.json();
            // })
            // .then(users => {
            //     this.setState({ profileDatas: users });
            // })

        // this.setState({ profileDatas: profileDatas });
        // console.log('state = 2 : componentDidMount');
    }

    onSearchChange = (event) => {   
        this.setState({searchfield: event.target.value})    
        // console.log(event.target.value); 
        
        // const filterData = this.state.profileDatas.filter(profileDatas =>{
        //     return profileDatas.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })

        // console.log(filterData);
    }

    render() {
        const filterData = this.state.profileDatas.filter(profileDatas =>{
            return profileDatas.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log('state = 3 : render');

        if (this.state.profileDatas.length === 0) {
            return <h1>Loading</h1>
        } else {

            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>

                    {/* <CardList profileDatas={this.state.profileDatas}/> */}
                    <Scroll>
                        <CardList profileDatas={filterData}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;