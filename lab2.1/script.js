
const studentId = "68030288";       
const studentName = "sorawit sittirak";    
let midtermScore = 35.5;           
let finalScore = 42;              
const studentData = {
    id: "68030288",
    name: "sorawit sittirak",
    major: "เทคโนโลยีสารสนเทศ",
    gpa: 3.85
};
const varBox = document.getElementById('variableOutput');
varBox.innerHTML = `
    <h3>1. ข้อมูลจากตัวแปร (Variables)</h3>
    <p><strong>รหัสนักศึกษา:</strong> ${studentId}</p>
    <p><strong>ชื่อ-สกุล:</strong> ${studentName}</p>
    <p><strong>คะแนนสอบกลางภาค:</strong> ${midtermScore}</p>
    <p><strong>คะแนนสอบปลายภาค:</strong> ${finalScore}</p>
    <p><strong>คะแนนรวม:</strong> ${midtermScore + finalScore} คะแนน</p>
`;
const objBox = document.getElementById('objectOutput');
objBox.innerHTML = `
    <h3>2. ข้อมูลจาก Object</h3>
    <p><strong>รหัส:</strong> ${studentData.id}</p>
    <p><strong>ชื่อ:</strong> ${studentData.name}</p>
    <p><strong>สาขาวิชา:</strong> ${studentData.major}</p>
    <p><strong>เกรดเฉลี่ย:</strong> ${studentData.gpa}</p>
`;
console.log("ข้อมูลนักศึกษาที่ถูกสร้างเป็น Object:", studentData);