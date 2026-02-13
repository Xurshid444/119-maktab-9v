# O'QUVCHILAR MA'LUMOTLARINI TO'LDIRISH NAMUNASI

Bu faylni script.js faylidagi `students` arrayiga ko'chirib qo'ying.

## Format:

```javascript
{
    id: 1,
    name: "Ism Familiya",
    image: "images/student1.jpg",
    bio: "Qisqacha biografiya. Masalan: Hozirda IT kompaniyasida dasturchi bo'lib ishlayapman. 2 farzandli oila a'zosiman.",
    phone: "+998901234567",
    telegram: "https://t.me/username",
    instagram: "https://instagram.com/username"
}
```

## 30 ta o'quvchi uchun shablon:

```javascript
const students = [
    {
        id: 1,
        name: "Ali Valiyev",
        image: "images/students/ali_valiyev.jpg",
        bio: "Hozirda Toshkentda IT kompaniyasida ishlayapman. Dasturlash sohasida 10 yillik tajribaga egaman.",
        phone: "+998901234567",
        telegram: "https://t.me/alivaliyev",
        instagram: "https://instagram.com/alivaliyev"
    },
    {
        id: 2,
        name: "Zarina Karimova",
        image: "images/students/zarina_karimova.jpg",
        bio: "O'qituvchi bo'lib ishlayman. 2 farzandli onaman.",
        phone: "+998901234568",
        telegram: "https://t.me/zarinakk",
        instagram: "https://instagram.com/zarinakk"
    },
    {
        id: 3,
        name: "Bobur Toshmatov",
        image: "images/students/bobur_toshmatov.jpg",
        bio: "Tadbirkor. O'z biznesimni yuritaman.",
        phone: "+998901234569",
        telegram: "https://t.me/bobur_t",
        instagram: "https://instagram.com/bobur_t"
    },
    {
        id: 4,
        name: "Nigora Rahimova",
        image: "images/students/nigora_rahimova.jpg",
        bio: "Shifokor. Toshkentdagi klinikada ishlayman.",
        phone: "+998901234570",
        telegram: "https://t.me/nigora_r",
        instagram: "https://instagram.com/nigora_r"
    },
    {
        id: 5,
        name: "Sardor Usmonov",
        image: "images/students/sardor_usmonov.jpg",
        bio: "Muhandis. Qurilish sohasida faoliyat yuritaman.",
        phone: "+998901234571",
        telegram: "https://t.me/sardor_u",
        instagram: "https://instagram.com/sardor_u"
    },
    // 6-30 ga qadar shu formatda davom ettiring...
    {
        id: 6,
        name: "Dilnoza Ahmadova",
        image: "images/students/dilnoza_ahmadova.jpg",
        bio: "",
        phone: "",
        telegram: "",
        instagram: ""
    },
    {
        id: 7,
        name: "Jahongir Saidov",
        image: "images/students/jahongir_saidov.jpg",
        bio: "",
        phone: "",
        telegram: "",
        instagram: ""
    },
    {
        id: 8,
        name: "Madina Yusupova",
        image: "images/students/madina_yusupova.jpg",
        bio: "",
        phone: "",
        telegram: "",
        instagram: ""
    },
    {
        id: 9,
        name: "Otabek Nazarov",
        image: "images/students/otabek_nazarov.jpg",
        bio: "",
        phone: "",
        telegram: "",
        instagram: ""
    },
    {
        id: 10,
        name: "Sevara Kamilova",
        image: "images/students/sevara_kamilova.jpg",
        bio: "",
        phone: "",
        telegram: "",
        instagram: ""
    },
    // ... 11-30
];
```

## ESLATMA:
1. Har bir o'quvchi uchun rasm tayyorlang (280x280 piksel yoki undan katta)
2. Rasmlarni `images/students/` papkaga joylashtiring
3. Agar ma'lumot bo'lmasa, bo'sh qoldiring: `bio: "", phone: "", telegram: "", instagram: ""`
4. Telegram va Instagram uchun to'liq URL kiriting
