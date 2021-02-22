
function calculate() {
    var Result = 500;
    var EducValue = Number(document.getElementById("education").value);
    var FamilyValue = Number(document.getElementById("fnw").value);
    var SkillsValue = 0;
        for (i = 0; i < document.skills.option.length; i++){
            if(document.skills.option[i].checked == true){
                SkillsValue += Number(document.skills.option[i].value);
            }
        }
    var AgeValue = 1;
        for (i = 0; i < document.age.option.length; i++){
            if(document.age.option[i].checked == true){
                AgeValue = Number(document.age.option[i].value);
                break;
            }
        }
    var totalresult = (((Result * EducValue * FamilyValue) + SkillsValue) * AgeValue);
        if(document.reputation.option[0].checked == true){
            totalresult *= document.reputation.option[0].value;
        }
        if(document.reputation.option[1].checked == true){
            totalresult *= document.reputation.option[1].value;
        }
        if(document.reputation.option[2].checked == true){
            totalresult -= document.reputation.option[2].value;
        }
    alert(totalresult + "$");
}