var info = new Array();

info[0] = "Big businesses like Monsanto make much profit from genetically modified organisms. They create crops " +
          "which can be grown easier than natural crops. The modified crops that they produce have many " +
          "beneficial traits that are not present in natural crops, i.e. crops which are resistant to herbicide " +
          "or do not need pesticide. These crops yield more crop and have less failed crops where farmers lose a lot " +
          "of money. They are also able to be grown in developing countries to both stimulate the economy and provide food " +
          "to those who need it most. Because they deal mainly in plants, they're scientists will use a technique called " +
          "agrobacterium-mediated recombination to create the new organisms.";

info[1] = "Scientists can use genetically modified organisms to produce new beneficial drugs or help produce more of already " +
          "existing ones. One example of a drug that is produced by genetically modified organisms is insulin, the drug used to " +
          "combat diabetes. Another example is ATryn, a drug gathered from the milk of genetically modified goats which helps create " +
          "clotting factors to prevent blood clots. A new experimental method of using genetically modifed organisms pharmaceutically is " +
          "gene therapy. It is extremely experimental, however if it works, it can be used to replace harmful genes with less harmful, " +
          "sometimes beneficial, genes."

info[2] = "There is a large controversy in the developed world on whether or not genetically modified food and organisms should be used to " +
          "further scientific and agricultural research. Many countries, especially in the European Union, mandate that all genetically modified " +
          "food that is sold must be labeled. However, the U.S., the largest producer of genetically modified food, has no qualms about selling " +
          "food that is genetically modified. They cite that fact that there are no established health risks, therefore it is safe to eat." +
          "Many groups have concerns that genetically modified food will introduce allergens to consumers. There are also concerns about " +
          "genetically modified organisms acting as invasive species when introduced into the wild; because they are modified, they have advantages " +
          "over the other organisms in that habitat."

info[3] = "The organisms involved in these experiments range from single celled bacteria (the most used), to mammalian creatures. Each type of organism " +
          "has its advantages when it comes to testing. For example, single celled and simple organisms are easy to breed in large numbers, therefore for simple " +
          "or generic tasks they are preferred. However, some experiments, especially medical ones, require organisms similar to humans. Therefore researchers use " +
          "mammalian organisms. These organisms can get the same illnesses that humans do, therefore these illnesses can be cured in humans similar to the method used " +
          "while testing on the complex organisms.  Researchers create these organisms in the lab by first identifying the gene " +
          "that they will use in the new organism. They then extract this gene using restrictive enzymes; enzymes that cut at specific base/pair sequences. Then they must insert " +
          "the gene into the organism, and depending upon if it is a plant or an animal, a different technique will be used; microinjection for animals and agrobacterium mediated recombination " +
          "for plants. Lastly, the scientists must check if the gene took. They do this by searching the DNA of the modified organism for a marker that will be present if it was accepted."

info[4] = "The first example of a genetically modified organism was in E. coli in 1973, when it was modified to express salmonella. " +
          "After that, in 1982, the first drug produced from these organisms was approved; humulin, a form of human insulin. The first approved genetically modified food " +
          "to be mass produced for the market was in the mid 1990s, a form of frost resistant tomato.";

function setResources(num)
{
    $('#story').text(info[num]);
}
