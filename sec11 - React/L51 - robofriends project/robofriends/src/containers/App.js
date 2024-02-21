// import React from "react";
import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { profileDatas } from './profileDatas';
import ErrorBoundry from "../components/ErrorBoundry";
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
        const { profileDatas, searchfield } = this.state;

        const filterData = profileDatas.filter(profileData =>{
            return profileData.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // console.log('state = 3 : render');

        return !profileDatas.length ?
            <h1>Loading</h1> :       
            (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>

                    {/* <CardList profileDatas={this.state.profileDatas}/> */}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList profileDatas={filterData}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        

        // const filterData = this.state.profileDatas.filter(profileData =>{
        //     return profileData.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // // console.log('state = 3 : render');

        // if (this.state.profileDatas.length === 0) {
        //     return <h1>Loading</h1>
        // } else {

            // return (
            //     <div className="tc">
            //         <h1 className="f1">Robofriends</h1>
            //         <SearchBox searchChange={this.onSearchChange}/>

            //         {/* <CardList profileDatas={this.state.profileDatas}/> */}
            //         <Scroll>
            //             <CardList profileDatas={filterData}/>
            //         </Scroll>
            //     </div>
            // );
        // }
    }
}

export default App;