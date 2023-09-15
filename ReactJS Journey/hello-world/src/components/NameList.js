import React, { Component } from 'react'
// import Person from './person'

export class NameList extends Component {
  render() {
    const names = ['leela','prasad','bantu','leela']
    // const nameList = names.map(name => <h2>{name}</h2>)

    // const persons = [
    //     {
    //         id:1,
    //         name:'leela',
    //         age:25,
    //         skill:'react'
    //     },
    //     {
    //         id:2,
    //         name:'prasad',
    //         age:26,
    //         skill:'angular'
    //     },
    //     {
    //         id:3,
    //         name:'bantu',
    //         age:27,
    //         skill:'vue'
    //     }
    //     ]   

    // const personlist = persons.map(person => (
    //     <Person key={person.id} person={person} />
    // ))

    const nameList = names.map((name, index) => <h2  key={index} > {index} {name}</h2>)
    return (
      <div>
        {/* {personlist} */}

        {nameList}
      </div>
    )
  }
}

export default NameList
