const student={
    name:'Sulayman Hosen Abir',
    id:17502004537,
    versity:'Mohammadpur central university',
    money:8000,
    major:'CSE',
    subject:['math','programming', 'economics','english'],
    bestFriend:{
        name:'kolumuddin',
        subject:'CSE'
    },
    takingExam:function(){
        console.log(this.name,'taking a exam ');
    },
    treatDey:function(bill, trips){
        this.money=this.money-bill-trips;
        return this.money;

    }
}
student.takingExam();
const remaining1 = student.treatDey(1000, 100);
const remaining2 = student.treatDey(800, 100);
console.log(remaining2);