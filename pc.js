const packages = [
  { name: "PP Global Elite", price: 3 },
  { name: "PP Global Premier", price: 5 },
  { name: "PP Global Prestige", price: 10 },
  { name: "PP Global Executive", price: 25 },
  { name: "PP Global Platinum", price: 50 },
  { name: "PP Global Titanium", price: 100 },
  { name: "PP Global Diamond", price: 250 },
  { name: "PP Global Sovereign", price: 500 },
  { name: "PP Global Royal", price: 750 },
  { name: "PP Global Imperial", price: 1000 }
];

// Function to generate package list
function generatePackageList() {
  const packageList = document.getElementById("packageList");

  packages.forEach((pkg, index) => {
    const packageCard = document.createElement("div");
    packageCard.className = "package-card";
    packageCard.onclick = () => redirectToPayment(index);

    const title = document.createElement("h2");
    title.className = "package-title";
    title.innerText = pkg.name;

    const price = document.createElement("p");
    price.className = "package-price";
    price.innerText = `$${pkg.price}`;

    packageCard.appendChild(title);
    packageCard.appendChild(price);
    packageList.appendChild(packageCard);
  });
}

// Function to redirect to payment page for the selected package
function redirectToPayment(index) {
  const selectedPackage = packages[index];
  const paymentURL = `payment.html?package=${selectedPackage.name}&price=${selectedPackage.price}`;
  window.location.href = paymentURL;
}

// Generate the package list on page load
document.addEventListener("DOMContentLoaded", generatePackageList);
