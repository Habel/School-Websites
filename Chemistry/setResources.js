var info = new Array();

info[0] = "Capsaicin's melting point and boiling point are 62 deg celcius and 210 deg celcius, respectively\n" +
          "Its most common name is simply capsaicin, however there are lesser forms of it named dihydrocapsaicin, nordihydrocapsaicin, " +
          "homodihydrocapsaicin, homocapsaicin, and nonivamide.";
info[1] = "Capsaicin has many uses in many fields. Its most commonly know use is in cooking, where it is " +
          "used to add spice to a dish. Just recently there have been drinks that have capsaicin in them to " +
          "make the drink more spicy. It also has uses in the medicinal field. It has been used in ointments to " +
          "ease the pain of shingles and similar diseases. It is also used in creams to dull aches and pains. " +
          "It is used to regulate blood sugar levels in diabetics, and it has also miraculously reversed " +
          "diabetes in a mouse. It has also been used to kill lung and prostate cancer cells, however this " +
          "is still very experimental. Lastly it is used for other various uses, such as in riot control " +
          "in the form of pepper spray, which irritates the eyes and sinuses of the people who are sprayed by " +
          "it. It is also used in things like bird feed to deter mammalian pests, such as squirrels, from " +
          "eating the seed.";
info[2] = "<a href=\"http://en.wikipedia.org/wiki/Capsaicin\">The wikipedia article on capsaicin</img>";

function setResources(num)
{
    $('story').text(info[num]);
}
