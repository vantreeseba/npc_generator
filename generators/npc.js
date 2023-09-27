const { storygen } = require("./base");

// TODO:
// trinkets
// background
// goals
// traits
// flaws

storygen.mergeGrammar({
  is_was: ["is", "was"],
  he: ["he"],
  she: ["she"],
  they: ["they"],
  is: ["is"],
  are: ["are"],
  pronoun: ["#switch(_gender_, male=>he, female=>she, _=>they)#"],
  is_verb: ["#switch(_pronoun_, he=>is, she=>is, they=>are)#"],
  food_reasons: ["spiciness", "squishy texture", "crunchy texture", "flavor"],
  food_reason: ["because of the #food_reasons#"],
  npc: [
    `
#[_gender_:gender]# 
#[_pronoun_:pronoun]# 
#[_is_:is_verb]# 
#[_name_:generate_name().capitalize]# 
#[_species_:species]#

#_name_# is #_gender_.a# #_species_# with #hair-style# #human-hair-colors# hair and #colors# eyes.

Clothes:
#repeatDelim(clothing_hat,1,1)#
#repeatDelim(clothing_outer,1,1)#
#repeatDelim(clothing_top,1,1)#
#repeatDelim(clothing_bottom,1,1)#
#repeatDelim(clothing_shoe,1,1)#

History:
Born in the #named_location#.
#_pronoun_.capitalize# #_is_# now living in the #populated_location_type# of #generate_name().capitalize#.
#_pronoun_.capitalize# #_is_# #random(18, 60)# years old.  

Parents:
#repeatDelim(npc_same_species, 2, 2, n)#

Siblings:
#repeatDelim(npc_same_species, 0, 5, n)#

#_pronoun_.capitalize# used to be #occupations.a.toLowerCase# and now #_is_# making a living as #occupations.a.toLowerCase#.

Likes/dislikes:
#_pronoun_.capitalize# love eating #foods#, #food_reason#.
#_pronoun_.capitalize# hate eating #foods#, #food_reason#.
#_pronoun_.capitalize# love watching #animals.pluralize.toLowerCase#.
#_pronoun_.capitalize# are scared of #animals.pluralize.toLowerCase#.

Characteristics:
#_pronoun_.capitalize# #characteristics.toLowerCase#.
#_pronoun_.capitalize# #characteristics.toLowerCase#.
#_pronoun_.capitalize# #characteristics.toLowerCase#.

Typically #_pronoun_# #_is_# #personality.toLowerCase#, sometimes #_pronoun_# #_is_# #personality.toLowerCase#.
Often #_pronoun_# #_is_# #personality.toLowerCase# towards children.
Also #_pronoun_# #_is_# #personality.toLowerCase# towards #occupations.pluralize#.

Goals:
#repeatDelim(goals, 1, 4, n)#

Plot Hooks:

-----------------------
    `,
  ],
});

console.log(storygen.run("#npc#").trimStart());
