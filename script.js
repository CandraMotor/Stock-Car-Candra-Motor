const cars = [
    {
        name: "Toyota Yaris 2011 Type E A/T",
        brand: "Toyota",
        price: 11900000,
        image: "https://i.ibb.co.com/cSGjXFpG/Whats-App-Image-2026-02-20-at-13-25-34.jpg"
    },
    {
        name: "Honda Brio 2017 A/T",
        brand: "Honda",
        price: 124000000,
        image: "https://i.ibb.co.com/8gqqcXX6/Whats-App-Image-2026-02-20-at-13-25-28.jpg"
    },
    {
        name: "Mitsubishi Pajero 2015 DAKAR",
        brand: "Mitsubishi",
        price: 285000000,
        image: "https://i.ibb.co.com/Gr3tH0k/Whats-App-Image-2026-02-20-at-13-25-40-1.jpg"
    },
	{
        name: "Mitsubishi Xpander 2018 type exide M/T",
        brand: "Mitsubishi",
        price: 240000000,
        image: "https://i.ibb.co.com/XrWCJ3s3/Whats-App-Image-2026-02-20-at-13-25-39-1.jpg"
    },
	{	
		name: "Toyota Rush 2011 type G",
		brand: "Toyota",
		price: 12500000,
		image: "https://i.ibb.co.com/ymsD9Fvq/Whats-App-Image-2026-02-20-at-13-25-39.jpg"
	},
	{
		name: "GrandMax 2014",
		brand: "Daihatsu",
		price: 120000000,
		image: "https://i.ibb.co.com/bRYjt9f9/Whats-App-Image-2026-02-20-at-13-25-31.jpg"
	},
	{
		name: "Honda Jazz RS 2017 A/T",
		brand: "Honda",
		price: 198000000,
		image: "https://i.ibb.co.com/Dg1LqWWv/Whats-App-Image-2026-02-20-at-13-25-37.jpg"
	},
	{
		name: "Brio E satya 2018 A/T",
		brand: "Honda",
		price: 129000000,
		image: "https://i.ibb.co.com/N6ydfdGf/Whats-App-Image-2026-02-20-at-13-25-35.jpg"
	},
	{
		name: "Brio E satya 2021 M/T",
		brand: "Honda",
		price: 134000000,
		image: "https://i.ibb.co.com/hxn07kYH/Whats-App-Image-2026-02-20-at-13-25-34-1.jpg"
	}
];
const carList = document.getElementById("carList");
const searchInput = document.getElementById("search");
const filterBrand = document.getElementById("filterBrand");

function formatRupiah(number) {
    return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function displayCars(data) {
    carList.innerHTML = "";
    data.forEach(car => {
        carList.innerHTML += `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}">
                <div class="content">
                    <h3>${car.name}</h3>
                    <div class="price">${formatRupiah(car.price)}</div>
                    <a class="btn" href="https://wa.me/6281234567890" target="_blank">
                        Hubungi Penjual
                    </a>
                </div>
            </div>
        `;
    });
}

searchInput.addEventListener("input", filterCars);
filterBrand.addEventListener("change", filterCars);

function filterCars() {
    const searchValue = searchInput.value.toLowerCase();
    const brandValue = filterBrand.value;

    const filtered = cars.filter(car => {
        return (
            car.name.toLowerCase().includes(searchValue) &&
            (brandValue === "" || car.brand === brandValue)
        );
    });

    displayCars(filtered);
}

displayCars(cars);
