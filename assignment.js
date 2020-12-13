var colleges = [
  { name: "College 1", collegeId: 1 },
  { name: "College 2", collegeId: 2 },
];

var seats = [
  { collegeId: 1, branch: "CS", seat: 3 },
  { collegeId: 1, branch: "CE", seat: 3 },
  { collegeId: 1, branch: "ME", seat: 3 },
  { collegeId: 1, branch: "EE", seat: 5 },
  { collegeId: 2, branch: "CS", seat: 4 },
  { collegeId: 2, branch: "ME", seat: 2 },
  { collegeId: 2, branch: "EE", seat: 3 },
];

var studentChoices = [
  {
    student: "Student 1",
    rank: 1,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 2",
    rank: 2,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 3",
    rank: 3,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 4",
    rank: 4,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 5",
    rank: 5,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 6",
    rank: 6,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 8",
    rank: 8,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 7",
    rank: 7,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 9",
    rank: 9,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 10",
    rank: 10,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 11",
    rank: 11,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 12",
    rank: 12,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 13",
    rank: 13,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "EE" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
  {
    student: "Student 14",
    rank: 14,
    choices: [
      { collegeId: 1, branch: "CS" },
      { collegeId: 1, branch: "ME" },
      { collegeId: 2, branch: "CS" },
      { collegeId: 2, branch: "EE" },
    ],
  },
];

function returnNewArrOfCollegeSeats(seats) {
    let newArrSeats = [];
    for(let i=0; i < seats.length; i++) {
        const collegeId = seats[i].collegeId;
        const branchCode = seats[i].branch;
        const combinedKey = collegeId.toString() + branchCode;
        newArrSeats[combinedKey] = seats[i];
    }
    return newArrSeats;
}

function returnNewArrOfColleges(colleges) {
    let newArrColleges= [];
    for(let i=0; i < colleges.length; i++) {
        const collegeId = colleges[i].collegeId;
        newArrColleges[collegeId] = colleges[i];
    }

    return newArrColleges;
}
function getFinalSeatAlloted(colleges, seats, studentChoices) {
  const sortedStudentListBasedOnRank = studentChoices.sort((a,b)=>{
    a.rank < b.rank ? -1 : 1;
  })

  let newArrSeats = returnNewArrOfCollegeSeats(seats);
  const newArrColleges = returnNewArrOfColleges(colleges);
  
  let resposne = sortedStudentListBasedOnRank.map((student)=>{
    const choices = student.choices;
    let returnObject = {
      student: student.student,
      allotedSeat: null,
      allotedCollege: null
    }
    
    for(let i=0; i < choices.length; i++) {
      
      let choice = choices[i]; 

      const combinedKey = choice.collegeId.toString() + choice.branch;
      const seatObject = newArrSeats[combinedKey];
      
      if(seatObject.seat > 0) {
        seatObject.seat--;
        newArrSeats[combinedKey] = seatObject;
        returnObject.allotedSeat = seatObject.branch;
        returnObject.allotedCollege = newArrColleges[seatObject.collegeId];
        break;
      }

      /* one more way to do it without making newArr funnction
      let sIndex = seats.findIndex( elem => (elem.collegeId === choice.collegeId) && (elem.branch === choice.branch) )
      if(seats[sIndex].seat > 0){
        seats[sIndex].seat--;
        returnObject.allotedSeat = seats[sIndex].branch;
        var cIndex = colleges.findIndex( elem => elem.collegeId === seats[sIndex].collegeId)
        returnObject.allotedCollege = colleges[cIndex].name;
        break;
      } */
    }

    return returnObject;
  })

  return resposne;

}

const finalResponse = getFinalSeatAlloted(colleges,seats,studentChoices);
console.log(finalResponse);