var jsPsych = initJsPsych({
  display_element: 'experimentcontainer', // Initialize jsPsych in specific div
  on_finish: function() {
    //jsPsych.data.displayData();
    window.location = `https://delaware.ca1.qualtrics.com/jfe/form/SV_cT2BRnAMHgOnpkO?participant_id_qualtrics=${participant_id_qualtrics}&combo=${combo_qualtrics}&PROLIFIC_PID=${subject_id_prolific}&STUDY_ID=${study_id_prolific}&SESSION+ID=${session_id_prolific}`;
    //jsPsych.data.get().localSave('csv','mydata.csv');
  }
});

// capture info from Qualtrics
const participant_id_qualtrics = jsPsych.data.getURLVariable('participant_id_qualtrics');
const combo_qualtrics = jsPsych.data.getURLVariable('combo');

// capture info from Prolific
const subject_id_prolific = jsPsych.data.getURLVariable('PROLIFIC_PID');
const study_id_prolific = jsPsych.data.getURLVariable('STUDY_ID');
const session_id_prolific = jsPsych.data.getURLVariable('SESSION_ID');

const filename = `subject${participant_id_qualtrics}_prolificID${subject_id_prolific}_combo${combo_qualtrics}conservative.csv`;

const save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: "1nacg0XKH5qp",
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
};


jsPsych.data.addProperties({
  subject_id_prolific: subject_id_prolific,
  participant_id_qualtrics: participant_id_qualtrics,
  study_id_prolific: study_id_prolific,
  session_id_prolific: session_id_prolific
});

// Array containing all parts in order of appearance
var timeline = [];
var stimuli_data_conservative = [
    {"training_con": {
        "combination1": [
            ["../resources/faces/training/CFD-WM-223-056-N.jpg", "Education is our only defense against brainwashing."], 
            ["../resources/faces/training/CFD-WM-236-072-N.jpg", "Diversity is a feature, not a bug."], 
            ["../resources/faces/training/CFD-WM-037-025-N.jpg", "We need kindness, not divisive rhetoric."], 
            ["../resources/faces/training/CFD-WM-220-068-N.jpg", "Justice can't just be equal, it must also be equitable."]
            ], 
        "combination2": [
            ["../resources/faces/training/CFD-WM-223-056-N.jpg", "Diversity is a feature, not a bug."], 
            ["../resources/faces/training/CFD-WM-236-072-N.jpg", "We need kindness, not divisive rhetoric."], 
            ["../resources/faces/training/CFD-WM-037-025-N.jpg", "Justice can't just be equal, it must also be equitable."], 
            ["../resources/faces/training/CFD-WM-220-068-N.jpg", "Education is our only defense against brainwashing."]
        ], 
        "combination3": [
            ["../resources/faces/training/CFD-WM-223-056-N.jpg", "We need kindness, not divisive rhetoric."], 
            ["../resources/faces/training/CFD-WM-236-072-N.jpg", "Justice can't just be equal, it must also be equitable."], 
            ["../resources/faces/training/CFD-WM-037-025-N.jpg", "Education is our only defense against brainwashing."], 
            ["../resources/faces/training/CFD-WM-220-068-N.jpg", "Diversity is a feature, not a bug."]
        ], 
        "combination4": [
            ["../resources/faces/training/CFD-WM-223-056-N.jpg", "Justice can't just be equal, it must also be equitable."], 
            ["../resources/faces/training/CFD-WM-236-072-N.jpg", "Education is our only defense against brainwashing."], 
            ["../resources/faces/training/CFD-WM-037-025-N.jpg", "Diversity is a feature, not a bug."], 
            ["../resources/faces/training/CFD-WM-220-068-N.jpg", "We need kindness, not divisive rhetoric."]
        ]}
    }, 
    {"testing_con": {
        "combination1": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."]
        ], 
        "combination2": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Humility is a virtue."]
        ], 
        "combination3": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "The free market is a reflection of our basic human instincts."]
        ], 
        "combination4": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "It's easier to criticize than to build."]
        ], 
        "combination5": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Our elders know best."]
        ], 
        "combination6": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "We must reward those who take the long road, not just the fast one."]
        ], 
        "combination7": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "We speak less when we are certain."]
        ], 
        "combination8": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Our most important responsibility is to support our family."]
        ], 
        "combination9": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Children are our greatest wealth."]
        ], 
        "combination10": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Our government weaponizes education to brainwash us."]
        ], 
        "combination11": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."]
        ], 
        "combination12": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."]
        ], 
        "combination13": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Men lead, women nurture."]
        ], 
        "combination14": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Fear regulates faster than reason."]
        ], 
        "combination15": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Participation trophies coddle those who were too weak to win."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Boys will be boys."]
        ], 
        "combination16": [
            ["../resources/faces/testing/CFD-WM-029-023-N.jpg", "Don't believe the people who would rather have us addicted to chemicals than living a healthy life."], 
            ["../resources/faces/testing/CFD-WM-040-022-N.jpg", "Humility is a virtue."], 
            ["../resources/faces/testing/CFD-WM-035-032-N.jpg", "The free market is a reflection of our basic human instincts."], 
            ["../resources/faces/testing/CFD-WM-217-070-N.jpg", "It's easier to criticize than to build."], 
            ["../resources/faces/testing/CFD-WM-235-147-N.jpg", "Our elders know best."], 
            ["../resources/faces/testing/CFD-WM-031-003-N.jpg", "We must reward those who take the long road, not just the fast one."], 
            ["../resources/faces/testing/CFD-WM-010-001-N.jpg", "We speak less when we are certain."], 
            ["../resources/faces/testing/CFD-WM-245-123-N.jpg", "Our most important responsibility is to support our family."], 
            ["../resources/faces/testing/CFD-WM-253-119-N.jpg", "Children are our greatest wealth."], 
            ["../resources/faces/testing/CFD-WM-219-008-N.jpg", "Our government weaponizes education to brainwash us."], 
            ["../resources/faces/testing/CFD-WM-252-224-N.jpg", "It's not about our health - they are using us as guinea pigs for their own goals."], 
            ["../resources/faces/testing/CFD-WM-242-011-N.jpg", "Taxes are just an excuse for corrupt officials to line their pockets with our money."], 
            ["../resources/faces/testing/CFD-WM-248-036-N.jpg", "Men lead, women nurture."], 
            ["../resources/faces/testing/CFD-WM-213-076-N.jpg", "Fear regulates faster than reason."], 
            ["../resources/faces/testing/CFD-WM-015-002-N.jpg", "Boys will be boys."], 
            ["../resources/faces/testing/CFD-WM-033-025-N.jpg", "Participation trophies coddle those who were too weak to win."]
        ]}
    }, 
    {"attentioncheck": {
        "attentioncheck": [
            ["../resources/faces/attentioncheck/CFD-WM-001-014-N.jpg", "Please press 'E' for this trial"]
        ]}
    }
];

var instructions_data = [
    {"instructions": {
        "instructions": [
            ["../resources/faces/instructions/CFD-WM-025-002-N.jpg", "It is common sense that divisive ideologies weaken the social fabric."]
        ]}
    }
];

var attnchk_stimuli = stimuli_data_conservative[2].attentioncheck.attentioncheck;
var instructions_stimuli = instructions_data[0].instructions.instructions;

if (combo_qualtrics in ["1", "17", "33", "49", "65", "81"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination1;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination1;
} else if (combo_qualtrics in ["2", "18", "34", "50", "66", "82"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination2;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination2;
} else if (combo_qualtrics in ["3", "19", "35", "51", "67", "83"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination3;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination3;
} else if (combo_qualtrics in ["4", "20", "36", "52", "68", "84"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination4;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination4;
} else if (combo_qualtrics in ["5", "21", "37", "53", "69", "85"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination5;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination1;
} else if (combo_qualtrics in ["6", "22", "38", "54", "70", "86"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination6;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination2;
} else if (combo_qualtrics in ["7", "23", "39", "55", "71", "87"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination7;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination3;
} else if (combo_qualtrics in ["8", "24", "40", "56", "72", "88"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination8;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination4;
} else if (combo_qualtrics in ["9", "25", "41", "57", "73", "89"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination9;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination1;
} else if (combo_qualtrics in ["10", "26", "42", "58", "74", "90"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination10;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination2;
} else if (combo_qualtrics in ["11", "27", "43", "59", "75", "91"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination11;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination3;
} else if (combo_qualtrics in ["12", "28", "44", "60", "76", "92"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination12;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination4;
} else if (combo_qualtrics in ["13", "29", "45", "61", "77", "93"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination13;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination1;
} else if (combo_qualtrics in ["14", "30", "46", "62", "78", "94"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination14;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination2;
} else if (combo_qualtrics in ["15", "31", "47", "63", "79", "95"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination15;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination3;
} else if (combo_qualtrics in ["16", "32", "48", "64", "80", "96"]) {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination16;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination4;
} else {
  var training_stimuli = stimuli_data_conservative[0].training_con.combination1;
  var testing_stimuli = stimuli_data_conservative[1].testing_con.combination1;
}

all_images = [];
for (i=0; i < training_stimuli.length; i++){
  all_images.push(training_stimuli[i][0])
};
for (i=0; i < testing_stimuli.length; i++){
  all_images.push(testing_stimuli[i][0])
};
//for (i=0; i < attnchk_stimuli.length; i++){
//  all_images.push(attnchk_stimuli[i][0])
//};
all_images.push(attnchk_stimuli[0][0])
// preload all stimuli into browser memory for more accurate timing
var preload = {
  type: jsPsychPreload,
  images: all_images
};
    
// Array that will contain all the timeline variables for the training timeline
var train_stims = [];
// Array that will contain all the timeline variables for the task timeline
var task_stims = [];
// Array that will contain all keys pressed during training
var all_keys_train = [];
// Array that will contain rts for all keys pressed during training
var all_rts_train = [];
// Array that will contain all keys pressed during the task
var all_keys_task = [];
// Array that will contain rts for all keys pressed during task
var all_rts_task = [];

// Training/task page elements:
// Picture - should not respond to this
// Statement - should not respond to this
// Trustworthiness prompt - should respond to this using
//    Trustworthiness 7-point likert options
    
// Likert scale variable containing all labels
var trustworthiness_likert_scale_labels = [
  "7 - Very untrustworthy", 
  "6 - Untrustworthy", 
  "5 - Slightly untrustworthy", 
  "4 - Neither trustworthy nor untrustworthy", 
  "3 - Slightly trustworthy",
  "2 - Trustworthy",
  "1 - Very trustworthy"
];

var dompres_likert_scale_labels = [
  "1 - Strongly disagree",
  "2 - Disagree",
  "3 - Slightly disagree",
  "4 - Neither disagree nor agree", 
  "5 - Slightly agree", 
  "6 - Agree", 
  "7 - Strongly agree"
];
    
// Likert scale prompt
var trustworthiness_likert_scale_prompt = "On a scale of 1-7, how <strong>trustworthy or untrustworthy</strong> do you find this person to be?";
var dominance_likert_scale_prompt = "This person is very <strong>dominant.</strong>";
var prestige_likert_scale_prompt = "This person is very <strong>prestigious.</strong>";
var dompres_likert_scale_preamble = "How much do you agree or disagree with the following statements about this person? You can work quickly; your first feeling is generally best.";

// Valid keys during trials
var trial_responses = ["1", "2", "3", "4", "5", "6", "7"];

// Valid keys during attention check trial
var attnchk_responses = ["1", "2", "3", "4", "5", "6", "7", "E", "e"];

// Stimuli display duration
var stimuli_display_duration = 3500; // 3.5s

// Fixation display duration
var fixation_display_duration = 1000; // 1s
    
// Create fixation
var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div class="container d-flex align-items-center justify-content-center min-vh-100" id="fixation_container" style="font-size:100px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: fixation_display_duration,
  data: {task: 'fixation'}
};

// Create array of training stimuli
// Each item in array is a dictionary with all the page elements
//var full_stims_train = [];

for (i=0; i < training_stimuli.length; i++){
  full_stim = `
    <div class="container d-flex align-items-center justify-content-center min-vh-80" id="profile_container_train">
      <h4>
        <p><img class="mx-auto d-block" src="${training_stimuli[i][0]}" width="${screen.height*0.5}">
        </p>
        <p><strong>${training_stimuli[i][1]}</strong>
        </p>
      </h4>
    </div>

    <div class="row justify-content-center" id="likert-prompt">
      <h4>
        <p>${trustworthiness_likert_scale_prompt}
        </p>
      </h4>
    </div>

    <div class="row justify-content-center" id="likert-labels">
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[6]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[5]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[4]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[3]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[2]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[1]}
      </div>
      <div class="col-1 align-self-center">
        ${trustworthiness_likert_scale_labels[0]}
      </div>
    </div>
    
    <div class="row justify-content-center" id="likert-radios">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy1" id="trustworthy1" value="trustworthy1" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy2" id="trustworthy2" value="trustworthy2" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy3" id="trustworthy3" value="trustworthy3" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy4" id="trustworthy4" value="trustworthy4" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy5" id="trustworthy5" value="trustworthy5" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy6" id="trustworthy6" value="trustworthy6" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy7" id="trustworthy7" value="trustworthy7" disabled="true">
      </div>
    </div>
  `
  train_stims.push({
    train_stimulus: full_stim,
    train_stimulus_face: training_stimuli[i][0],
    train_stimulus_sentence: training_stimuli[i][1],
    train_response_keys: trial_responses, // Trustworthiness likert keys
    train_duration: stimuli_display_duration, // Duration
    move_page: false
  });
};

var shuffled_train_stims = jsPsych.randomization.repeat(train_stims, 1);

var train_trials = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: jsPsych.timelineVariable('train_stimulus'), 
  choices: trial_responses,
  trial_duration: stimuli_display_duration,
  on_load: function() {

    jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response, 
      valid_responses: jsPsych.timelineVariable('train_response_keys'), 
      rt_method: 'performance', 
      persist: true,
      allow_held_key: false
    });

    function after_response(response_info) {
      all_rts_train.push(response_info.rt)
      all_keys_train.push(response_info.key);
    };
    
    var press_number_train = 1;
    var previous_id_train = ""
    
    function record_all_events_task(event) {
      var this_id_train = `trustworthy${event.key}`;
      if (press_number_train > 1) {
        document.getElementById(previous_id_train).checked = false;
        document.getElementById(this_id_train).checked = true;
      } else {
        document.getElementById(this_id_train).checked = true;
      }
      previous_id_train = this_id_train
      console.log(previous_id_train)
      press_number_train++;
    }

    document.addEventListener('keydown', record_all_events_task);
  },
  response_ends_trial: jsPsych.timelineVariable('move_page'),
  data: {
    phase: 'training',
    rts: all_rts_train,
    keys: all_keys_train,
    stimulus_face: jsPsych.timelineVariable('train_stimulus_face'),
    stimulus_sentence: jsPsych.timelineVariable('train_stimulus_sentence')
  }
};

var train_procedure = {
  timeline: [train_trials, fixation],
  timeline_variables: shuffled_train_stims
};

for (i=0; i < testing_stimuli.length; i++){
  full_stim = `
    <div class="container d-flex align-items-center justify-content-center min-vh-80" id="profile_container_task">
      <h4>
        <p><img class="mx-auto d-block" src="${testing_stimuli[i][0]}" width="${screen.height*0.5}">
        </p>
        <p><strong>${testing_stimuli[i][1]}</strong>
        </p>
      </h4>
    </div>

    <div class="row justify-content-center" id="likert-prompt">
      <h4>
        <p>${trustworthiness_likert_scale_prompt}
        </p>
      </h4>
    </div>

    <div class="row justify-content-center" id="likert-labels">
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[6]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[5]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[4]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[3]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[2]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[1]}
      </div>
      <div class="col-1 align-self-center">
        ${trustworthiness_likert_scale_labels[0]}
      </div>
    </div>
    
    <div class="row justify-content-center" id="likert-radios">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy1" id="trustworthy1" value="trustworthy1" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy2" id="trustworthy2" value="trustworthy2" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy3" id="trustworthy3" value="trustworthy3" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy4" id="trustworthy4" value="trustworthy4" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy5" id="trustworthy5" value="trustworthy5" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy6" id="trustworthy6" value="trustworthy6" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy7" id="trustworthy7" value="trustworthy7" disabled="true">
      </div>
    </div>
  `
  task_stims.push({
    task_stimulus: full_stim,
    task_stimulus_face: testing_stimuli[i][0],
    task_stimulus_sentence: testing_stimuli[i][1],
    task_response_keys: trial_responses, // Trustworthiness likert keys
    task_duration: stimuli_display_duration, // Duration
    move_page: false,
    attnchk: 0
  });
};

task_stims.push({
  task_stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-80" id="profile_container_task">
      <h4>
        <p><img class="mx-auto d-block" src="${attnchk_stimuli[0][0]}" width="${screen.height*0.5}">
        </p>
        <p><strong>${attnchk_stimuli[0][1]}</strong>
        </p>
      </h4>
    </div>

    <div class="row justify-content-center" id="likert-prompt">
      <h4>
        <p>${trustworthiness_likert_scale_prompt}
        </p>
      </h4>
    </div>

    <div class="row justify-content-center" id="likert-labels">
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[6]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[5]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[4]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[3]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[2]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[1]}
      </div>
      <div class="col-1 align-self-center">
        ${trustworthiness_likert_scale_labels[0]}
      </div>
    </div>
    
    <div class="row justify-content-center" id="likert-radios">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy1" id="trustworthy1" value="trustworthy1" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy2" id="trustworthy2" value="trustworthy2" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy3" id="trustworthy3" value="trustworthy3" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy4" id="trustworthy4" value="trustworthy4" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy5" id="trustworthy5" value="trustworthy5" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy6" id="trustworthy6" value="trustworthy6" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy7" id="trustworthy7" value="trustworthy7">
      </div>
    </div>
  `,
  task_stimulus_face: attnchk_stimuli[0][0],
  task_stimulus_sentence: attnchk_stimuli[0][1],
  task_response_keys: attnchk_responses, // Trustworthiness likert keys
  task_duration: stimuli_display_duration, // Duration
  move_page: false,
  attnchk: 1
});

var shuffled_task_stims = jsPsych.randomization.repeat(task_stims, 1);

var task_trials = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: jsPsych.timelineVariable('task_stimulus'),
  choices: jsPsych.timelineVariable('task_response_keys'),
  trial_duration: jsPsych.timelineVariable('task_duration'),
  on_load: function() {
    
    jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response, 
      valid_responses: jsPsych.timelineVariable('task_response_keys'),
      rt_method: 'performance', 
      persist: true,
      allow_held_key: false
    });

    function after_response(response_info) {
      all_rts_task.push(response_info.rt)
      all_keys_task.push(response_info.key);
    };
    
    var press_number_task = 1;
    var previous_id_task = ""
    
    function record_all_events_task(event) {
      var this_id_task = `trustworthy${event.key}`;
      if (press_number_task > 1) {
        document.getElementById(previous_id_task).checked = false;
        document.getElementById(this_id_task).checked = true;
      } else {
        document.getElementById(this_id_task).checked = true;
      }
      previous_id_task = this_id_task
      console.log(previous_id_task)
      press_number_task++;
    }

    document.addEventListener('keydown', record_all_events_task);
  },
  response_ends_trial: jsPsych.timelineVariable('move_page'),
  data: {
    phase: 'task',
    stimulus: jsPsych.timelineVariable('task_stimulus'),
    attn: jsPsych.timelineVariable('attnchk'),
    rts: all_rts_task,
    keys: all_keys_task,
    stimulus_face: jsPsych.timelineVariable('task_stimulus_face'),
    stimulus_sentence: jsPsych.timelineVariable('task_stimulus_sentence')
  }
};

var task_procedure = {
  timeline: [task_trials, fixation],
  timeline_variables: shuffled_task_stims
};

var posttask_stims = [];

for (i=0; i < testing_stimuli.length; i++){
  if (i % 2 == 0) {
    var dompres_likert_scale_prompts = [dominance_likert_scale_prompt,prestige_likert_scale_prompt];
    var posttask_stimulus_name = ["dominance", "prestige"];
  } else {
    var dompres_likert_scale_prompts = [prestige_likert_scale_prompt, dominance_likert_scale_prompt];
    var posttask_stimulus_name = ["prestige", "dominance"];
  }
  
  full_stim = `
    <div class="container d-flex align-items-center justify-content-center min-vh-70" id="profile_container_task">
      <h4>
        <p><img class="mx-auto d-block" src="${testing_stimuli[i][0]}" width="${screen.height*0.5}">
        </p>
        <p><strong>${testing_stimuli[i][1]}</strong>
        </p>
      </h4>
    </div>
    <div>
      <h5>
        ${dompres_likert_scale_preamble}
      </h5>
    </div>
  `
  posttask_stims.push({
    posttask_preamble: full_stim,
    posttask_stimulus1: dompres_likert_scale_prompts[0],
    posttask_stimulus2: dompres_likert_scale_prompts[1],
    posttask_stimulus_name1: posttask_stimulus_name[0],
    posttask_stimulus_name2: posttask_stimulus_name[1],
    posttask_response_keys: dompres_likert_scale_labels, // Trustworthiness likert keys
    posttask_move_page: true
  });
};

var shuffled_posttask_stims = jsPsych.randomization.repeat(posttask_stims, 1);

var posttask_trials = {
  type: jsPsychSurveyLikert,
  preamble: jsPsych.timelineVariable('posttask_preamble'),
  questions: [
    {prompt: jsPsych.timelineVariable('posttask_stimulus1'), name: jsPsych.timelineVariable('posttask_stimulus_name1'), labels: jsPsych.timelineVariable('posttask_response_keys')},
    {prompt: jsPsych.timelineVariable('posttask_stimulus2'), name: jsPsych.timelineVariable('posttask_stimulus_name2'), labels: jsPsych.timelineVariable('posttask_response_keys')}
  ],
  randomize_question_order: false
};

var posttask_procedure = {
  timeline: [posttask_trials],
  timeline_variables: shuffled_posttask_stims
};

var welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="welcome_container">
      <h2>Welcome to the experiment. Press any key to begin.</h2>
    </div>`
};

var instructions1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="row align-items-center justify-content-center">
      <h2>
        <p>In this experiment, you will view profiles of previous lab participants who have reported that they are <strong>politically conservative.</strong>
        The profile will contain their face and a statement of their choice. For example,
        </p><br><br>
      </h2>
    </div>
    <div class="container d-flex align-items-center justify-content-center min-vh-80" id="profile_container_task">
      <h4>
        <p><img class="mx-auto d-block" src="${instructions_stimuli[0][0]}" width="${screen.height*0.5}">
        </p>
        <p><strong>${instructions_stimuli[0][1]}</strong><br><br>
        </p>
      </h4>
    </div>
    <div class="row align-items-center justify-content-center">
      <h2>
        <p> Press any key to continue. </p>
      </h2>
    </div>`
};

var instructions2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-80" id="profile_container_task">
      <div class="row align-items-center justify-content-center" id="instructions2_container">
        <h2>
          <p>Beneath the profile, you will see the following question.
          </p><br><br>
        </h2>
      </div>
    </div>

    <div class="row justify-content-center" id="likert-prompt">
      <h4>
        <p>${trustworthiness_likert_scale_prompt}
        </p>
      </h4>
    </div>

    <div class="row justify-content-center" id="likert-labels">
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[6]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[5]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[4]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[3]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[2]}
      </div>
      <div class="col-1 mr-2 align-self-center">
        ${trustworthiness_likert_scale_labels[1]}
      </div>
      <div class="col-1 align-self-center">
        ${trustworthiness_likert_scale_labels[0]}
      </div>
    </div>
    
    <div class="row justify-content-center" id="likert-radios">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy1" id="trustworthy1" value="trustworthy1" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy2" id="trustworthy2" value="trustworthy2" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy3" id="trustworthy3" value="trustworthy3" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy4" id="trustworthy4" value="trustworthy4" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy5" id="trustworthy5" value="trustworthy5" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy6" id="trustworthy6" value="trustworthy6" disabled="true" style="margin-right:100px;">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="trustworthy7" id="trustworthy7" value="trustworthy7" disabled="true">
      </div>
    </div>`
};

var instructions3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="instruction3_container">
      <h2>
        <p>You will have <strong>3.5 seconds</strong> to respond using the <strong>keyboard key</strong> that
        corresponds to your answer. For example, <strong>if you want to rate a profile 1
        out of 7, please press the "7" key.</strong></p><br><br>
        <p> Press any key to continue. </p>
      </h2>
    </div>`
};

var instructions4 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="instruction4_container">
      <h2>
        <p>After you have entered a response, you will see a "+" in the middle of
        the screen for 1 second, while your response is saved.</p><br><br>
        <p> Press any key to continue. </p>
      </h2>
    </div>`
};

var instructions5 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="instruction5_container">
      <h2>
        <p>You will now complete <strong>4 practice trials</strong> before beginning the task.</p><br><br>
        <p>Press any key to begin the training.</p>
      </h2>
    </div>`
};

var instruction_procedure = {
  timeline: [welcome, instructions1, instructions2, instructions3, instructions4, instructions5],
};

var training_beginning_message = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="beginning_training_container">
      <h1>
        Beginning training...
      </h1>
    </div>`,
  trial_duration: 500
};

var task_beginning_message = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="beginning_task_container">
      <h1>
        You have completed the training. Please press any key to proceed to the main task.
      </h1>
    </div>`
};

var posttask_beginning_message = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="beginning_task_container">
      <h2>
        <p>You have completed the main task.</p><br>
        <p>The next section can only be responded to using <strong>mouse clicks</strong>, not keyboard keys.</p><br>
        <p>You will rate the profiles you have seen on dominance and prestige.</p><br><br>
        <p>Please press any key to continue.</p>
      </h2>
    </div>`
};

var posttask_ending_message = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="container d-flex align-items-center justify-content-center min-vh-100" id="beginning_task_container">
      <h2>
        <p>You have completed the profile rating section of this study. </p><br>
        <p>For the last section of this study, you will be redirected to Qualtrics where you will answer some questions about yourself.</p><br><br>
        <p>Please press any key to continue.</p>
      </h2>
    </div>`
};

timeline.push(preload);
timeline.push(instruction_procedure);
timeline.push(training_beginning_message);
timeline.push(train_procedure);
timeline.push(task_beginning_message);
timeline.push(task_procedure);
timeline.push(posttask_beginning_message);
timeline.push(posttask_procedure);
timeline.push(posttask_ending_message);
timeline.push(save_data);
jsPsych.run(timeline);