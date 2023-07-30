import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incerementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incerementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incerementAge} text="Incerement Age" />
      <Count text="Salary" count={salary} />
      <Button handleClick={incerementSalary} text="Incerement Salary" />
    </div>
  );
};

export default ParentComponent;
