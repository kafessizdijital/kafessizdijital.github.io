const addresses = [
    "https://www.google.com/search?q=migros tavuk",
    "https://www.google.com/search?q=migros türkiye",
    "https://www.google.com/search?q=migros'ta satılan organik tavuk", 
    "https://www.google.com/search?q=migros yumurta",
    "https://www.google.com/search?q=migros turkiye",
    "https://www.google.com/search?q=migros organik tavuk",
    "https://www.google.com/search?q=yumurta migros",
    "https://www.google.com/search?q=kiraz şekerlemesi migros",
    "https://www.google.com/search?q=tavuk migros",
    "https://www.google.com/search?q=organik tavuk migros",
    "https://www.google.com/search?q=migrosta yumurta ne kadar"
  
];

const address_1 = addresses[Math.floor(Math.random() * addresses.length)]

let search = address_1

window.location.replace(mail);
