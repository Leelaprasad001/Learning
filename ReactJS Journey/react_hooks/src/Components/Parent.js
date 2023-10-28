import React,{ useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'


function Parent() {
    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(50000)

    const incrementAge = useCallback(() =>{
      setage(age + 1)
  }, [age]) 

    const incrementSalary = useCallback(() =>{
        setsalary(salary + 1000)
    },[salary])

  return (
    <div>
        <Title/>
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent



//usecallbak hook memoized version of callback function that inly chnages if one of the dependencies has changed
//usecallback optimizes children components and unnecessary rendering
//it prevents unnecessary rerendering 