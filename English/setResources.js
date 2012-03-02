baby      = new Image();
brokenleg = new Image();
compsci   = new Image();
grad      = new Image();
inhaler   = new Image();
orioles   = new Image();
python    = new Image();
qohs      = new Image();
bus       = new Image();
computer  = new Image();

baby.src       =  "English/images/baby.png";
brokenleg.src  =  "English/images/brokenleg.png";
compsci.src    =  "English/images/compsci.png";
grad.src       =  "English/images/grad.png";
inhaler.src    =  "English/images/inhaler.png";
orioles.src    =  "English/images/orioles.png";
python.src     =  "English/images/python.png";
qohs.src       =  "English/images/qohs.png";
bus.src        =  "English/images/bus.png";
computer.src   =  "English/images/computer.png";

var imgs = new Array("baby", "bus", "inhaler", "orioles", "brokenleg", "computer", "python", "qohs", "grad", "compsci");
var stories = new Array();

stories[0] = "One fateful morning, in the cold days of the infamous blizzard of 1996, a child was born in the chambers of Georgetown hospital." +
			 " While crying, kicking, and all around struggling as all new borns do, he was given a name, and that name was Matthew Altman Habel.";

stories[1] = "A few years later, after much fun and games are had, Matt must start his journey through the school system. At a young age of 5, " +
			 "Matt heads off to Jones Lane elementary school for his first day of kindergarten. He meets many people, gains many friends, and learns much about narwhals.";

stories[2] = "Unfortunately, Matt finds out something very distressing after a run in with shrimp at his grandmas house. He learns, after much itching, scratching, " +
			 "and general discomfort, that he is in fact allergic to all fish, milk, and peanuts. On top of that, he learns that he may never fulfill his dream of " +
			 "being an olympic water poloist due to his bad asthma.";

stories[3] = "After the sadness that flowed in from the bad news provided by the doctors, Matt finds something that will provide much joy throughout the " +
			 "course of his life. That thing is, of course, baseball. His dad brings him to an orioles game, where he proceeds to have the time of his life. " +
			 "Some might say that he wouldn't care if he never got back.";

stories[4] = "Alas, happiness is a fickle thing. After many years of fun baseball games with his recreational team, supplemented by boring school, Matt " +
			 "hits a snag in his life. As he is riding down his street to visit his good friend Grant, he takes a turn too fast! He falls, and with a " +
			 "sickening snap, his femur cracks! With 4 pins holding him down, unable to move his leg, Matt is restrained for an entire summer.";

stories[5] = "During the time he was constrained, Matt gained an interest in computers. With this newfound interest he did many things, learning his way " +
			 "around the computer, learning the difference between a byte and a bit, fixing the virus ridden box that his parents called fast. With this " +
			 "newfound knowledge, his glee was too great when he unboxed his very own laptop on christmas morn.";

stories[6] = "With access to the virtual world of computing, Matt quickly took an interest in programming. With nothing to start with, no one to follow, " +
			 "Matt learned the ways of programming alone. However, he was not all alone, as in 9th grade he took the programming class offered by his high school. " +
			 "In this class he learned how to truly program, creating systems worthy of a college student, working with complex data structures, " +
			 "and making a truly random maze game, Matt was challenged to his edge in this class.";

stories[7] = "As Matt spent most of his free time programming, he needed to find something to pull him away from it. He found the marching band at " +
			 "his high school as this thing. As he already knew how to play the saxophone, he joined in easily and found a group of people " +
			 "that he could truly relate to, an important thing to do in high school.";

stories[8] = "Matt continued his routine of program, band, friends throughout the 4 years he was in high school. Graduating in 2014, he was accepted " +
			 "to the college of his dreams, became a section leader in the band, and became a distinguished member of the debian open source team.";

stories[9] = "In college Matt studied computer science. This allowed him to continue contributing to the debian open source project. It also " + 
			 "allowed him a lot of free time to do free studies on his own about more programming. When he graduated, he started a small business " +
			 "that created software for automation of tasks in a clients field.";

function setResources(num)
{
	$('#tagImage').attr('src', "English/images/" + imgs[num] + ".png");
	$('#story').text(stories[num]);
	for (i = 0; i < 10; i++) 
	{
	    $('#node' + i).css('background-color', 'red');
	}

	$('#node' + num).css('background-color', 'gold');
}
