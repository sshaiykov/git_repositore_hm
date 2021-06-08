// let Negatives = [9, -5, 3, -6, 1, -2]
// getNegativearray = (arr) => {
//     return Negatives.filter(item => item > 0).reduce((a, b) => a + b)
//     }
// console.log(getNegativearray(Negatives))


const it_department_employees = [
    {
    name: 'Roman',
    salary: 1200
    },
    {
    name: 'Aijan',
    salary: 2000
    },
    {
    name: 'Asel',
    salary: 8000
    },
    {
    name: 'Timur',
    salary: 2100
    },
    {
    name: 'Altynai',
    salary: 300
    }
    ]
    
    const average =  it_department_employees.reduce((sum, item) => sum + item.salary, 0) / it_department_employees.length
    console.log(average)


    const it_department_employees = [
        {
        name: 'Roman',
        salary: 1200
        },
        {
        name: 'Aijan',
        salary: 2000
        },
        {
        name: 'Asel',
        salary: 8000
        },
        {
        name: 'Timur',
        salary: 2100
        },
        {
        name: 'Altynai',
        salary: 300
        }
        ]
    let highestSalary = it_department_employees.filter((a) => a.salary > 1500)
    highestSalary.forEach((a) => a.salary += 500)
    console.log(highestSalary)       