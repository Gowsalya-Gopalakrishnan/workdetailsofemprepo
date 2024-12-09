
const employees = [{ name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    ];

function employeePerformance(){
    // Filter the employees who have completed more than 5 tasks.
    const moreTask = employees.filter(emp=>emp.tasksCompleted>5);
    console.log(moreTask);
    //Map the filtered employees to a new array that contains only the employee's name and their performance level. The performance level is determined by the following criteria:
    const performance = moreTask.map(function(emp){
        let per;
        if(emp.rating > 4.5)
            per= ` Excellent`;
        else if(emp.rating>=3 && emp.rating<=4.5)
            per=` Good`;
        else
            per= `Need Improvement`;
            
    return {name:emp.name,per};
    });
    console.log(performance);
    // Sort the final array of employees in descending order based on their performance level, prioritizing "Excellent", then "Good", and finally "Needs Improvement".
    
    const perRank = {
        "Excellent":2,
        "Good":1,
        "Need Improvement":1
    };
    const finalEmp = performance.sort((a,b)=>{
        return perRank[b.performance]- perRank[a.performance];
    });
return finalEmp;
}
employeePerformance(employees);
    
    
    
    
    