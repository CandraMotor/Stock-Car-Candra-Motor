const cars = [
    {
        name: "Toyota Avanza 2022",
        brand: "Toyota",
        price: 220000000,
        image: "https://source.unsplash.com/400x300/?toyota,avanza"
    },
    {
        name: "Honda Brio 2021",
        brand: "Honda",
        price: 180000000,
        image: "https://source.unsplash.com/400x300/?honda,brio"
    },
    {
        name: "Mitsubishi Pajero 2020",
        brand: "Mitsubishi",
        price: 450000000,
        image: "https://source.unsplash.com/400x300/?mitsubishi,pajero"
    },
	{
        name: "Mitsubishi Xpander 2025, mulus antik no minus",
        brand: "Mitsubishi",
        price: 240000000,
        image: "https://i.ibb.co.com/9X0HV11/prev-desktop-harga-resmi-mitsubishi-expander-cover-2017-mitsubishi-expander-1.jpg"
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