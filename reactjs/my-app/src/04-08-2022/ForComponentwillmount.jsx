import React, { Component } from 'react'
import Forpropscc2 from '../07-04-2022/Forpropscc2'

export default class ForComponentwillmount extends Component {
    constructor(){
        super();
        this.state={
            value:true
        }
    }
    componentWillMount() {
      console.log('Component will mount called')
    }
    handelclick () {
        this.setState((prevstate)=>{
        return {value: !prevstate.value}
      });
    }
  render() {
    const data=[
        {btech:'it'},
        {btech:'cse'},
        {btech:'pp'},
        {btech:'pkg'}
    ]
    const usersList = (
        <ul>
          {data.map((user) => (
            <Forpropscc2 data={user.btech} />
          ))}
        </ul>
      );
    return (
            <div>
                <button onClick={this.handelclick.bind(this)}>To show and hide</button>
                {this.state.value && usersList}
            </div>
        )
  }
}
