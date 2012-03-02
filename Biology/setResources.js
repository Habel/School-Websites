var info = new Array();

info[0] = "Big businesses like Monsato make much profit from genetically modified organisms. They create crops " +
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


function setResources(num)
{
    $('#story').text(info[num]);
}
