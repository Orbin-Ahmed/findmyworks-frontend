
let list = document.getElementById('skill-area');
let skill = [];

function skill_add(skills_id, skill_button_id) {

    var skill_name = document.getElementById(skills_id).value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(skill_name));
    list.appendChild(entry);
    Skill_append(skill_name);
    if(skill_button_id !== ""){
        document.getElementById(skill_button_id).disabled = true
    }
    if(skills_id === "all-skills"){
        document.getElementById(skills_id).value = "";
    }
}

function Skill_append(skill_name) {
    let skill_obj = {}
    skill_obj["name"] = skill_name.toLowerCase();
    skill_obj["passed"] = false;
    skill_obj["score"] = 0;
    skill_obj["attempted"] = 0;

    skill.push(skill_obj);
}

function final_skill_data(){
    data_list["Skill"] = skill;
}
