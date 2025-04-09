
const flavors = [
    {
        img: "original-flavor.png",
        desc: "Original Flavor: Crisp, tangy, and perfectly balanced."
    },
    {
        img: "spicy-flavor.png",
        desc: "Spicy Flavor: Zesty and bold with a fiery kick."
    },
    {
        img: "herbal-flavor.png",
        desc: "Northern Herb: Aromatic blend of northern Thai herbs."
    }
];

let current = 0;

function nextFlavor() {
    current = (current + 1) % flavors.length;
    document.getElementById("jar-image").src = flavors[current].img;
    document.getElementById("flavor-desc").textContent = flavors[current].desc;
}
