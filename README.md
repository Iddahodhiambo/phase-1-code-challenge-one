1.Title:
 phase-1-code-challenge-one

2.Description:
This is my first code challenge as software engineering student at moringa school

3.Running the project

- Open a terminal / command line interface on your computer
- Clone the repo by using the following:

git clone :https://github.com/Iddahodhiambo/phase-1-code-challenge-one then navigate into each folder,for example
cd netSalaryCalculator then run node index.js


4.Project setup:

├── netSalaryCalculator <br />
│   └── index.js <br />
├── speedDetector <br />
│   └── index.js <br />
└── studentGradeGenerator <br />
│    └── index.js <br />
├── package.json<br />
├── LICENSE <br />
├── README.md <br />
 
The above tree shows the structure of my assignment.There are three folders  each with an index.js file containing the solutions,the license and package.json
The first folder is the netSalary calculator that basically calculates the net salaries.I have drafted four functions in this  folder,for calculating nhif,nssf and paye and then invoking/calling this functions in the net salary function to get the correct net salary depending on the input.I ran a test(node index.js) with  a gross salary of ksh 24000 and got the correct net salary which was ksh 21,810.

The second  folder ,the speedDetector contains two functions one one for finding the points awarded when speed is above 70 and onother function that invokes speed,I tested this solution with a speed of 1000 and got a response of "license suspended" which is what was expected since the points awarded are more than 12 which is the maximum.

The third folder,studentGradeGenerator contains two functions one for finding student grades and one for invoking the scores which also worked perfectly and generated the correct output as per the expectation.  

5.License

    Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses

  
6. Author:
IDDAH AWUOR ODHIAMBO:https://github.com/Iddahodhiambo/phase-1-code-challenge-one




