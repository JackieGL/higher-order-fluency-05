//reduce sort every 
function averageAge(objArr){
    const newArr = objArr.reduce((acc,people) =>
        acc + people.age, 0 );
    return Math.round(newArr / objArr.length);
}
  const alumni = [
      { name: 'Devonte', job: 'WW', language: 'JavaScript', age: 23 },
      {
        name: 'Shemar',
        job: 'SquareSpace',
        language: 'JavaScript',
        age: 23
      },
      { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22 },
      {
        name: 'Stephanie',
        job: 'JPMorgan',
        language: 'JavaScript',
        age: 21
      },
      { name: 'Enmanuel', job: 'Asana', language: 'JavaScript', age: 21 },
      { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 21 }
    ];

function orderedAlumni(objArr){
    const ageOrder = objArr.sort((a,b) => b.age - a);
    return ageOrder;
}

console.log(orderedAlumni(alumni));

function allUseJavaScript(objArr){
    return objArr.every();
}