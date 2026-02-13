# 119-MAKTAB 9-V SINF SAYTI - QO'LLANMA

## 📋 MUNDARIJA
1. Fayllar tuzilishi
2. Ma'lumotlarni to'ldirish
3. Rasmlarni tayyorlash
4. GitHub Pages'ga yuklash
5. Domenni ulash
6. Ko'p beriladigan savollar

---

## 📁 1. FAYLLAR TUZILISHI

```
school-reunion-site/
│
├── index.html          # Asosiy sahifa
├── styles.css          # Dizayn va ranglar
├── script.js           # Funksiyalar va ma'lumotlar
├── logo.svg            # Sayt logosi
├── DATA_TEMPLATE.md    # Ma'lumotlar namunasi
├── README.md           # Bu fayl
│
└── images/             # YARATING bu papkani
    ├── students/       # O'quvchilar rasmlari
    │   ├── student1.jpg
    │   ├── student2.jpg
    │   └── ...
    └── teachers/       # O'qituvchilar rasmlari
        ├── teacher1.jpg
        ├── teacher2.jpg
        └── ...
```

---

## 📝 2. MA'LUMOTLARNI TO'LDIRISH

### A) O'quvchilar ma'lumotlari

`script.js` faylini oching va `students` arrayini to'ldiring:

```javascript
const students = [
    {
        id: 1,
        name: "Ism Familiya",
        image: "images/students/ism_familiya.jpg",
        bio: "Qisqacha biografiya",
        phone: "+998901234567",
        telegram: "https://t.me/username",
        instagram: "https://instagram.com/username"
    },
    // 30 tagacha davom ettiring
];
```

### B) O'qituvchilar ma'lumotlari

```javascript
const teachers = [
    {
        id: 1,
        name: "O'qituvchi ismi",
        role: "Fan nomi",
        image: "images/teachers/teacher1.jpg",
        bio: "Haqida ma'lumot",
        phone: "+998901234567"
    },
    // 10 tagacha davom ettiring
];
```

### C) Videolar

YouTube videolaringizni qo'shing:

```javascript
const videos = [
    {
        id: 1,
        title: "Video nomi",
        youtubeId: "dQw4w9WgXcQ" // YouTube URL'dan ID oling
    }
];
```

**YouTube ID qanday topiladi?**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ` (= dan keyingi qism)

### D) Maktab lokatsiyasi

`index.html` faylida 119-maktabning Google Maps koordinatalarini kiriting (180-qator atrofida).

---

## 🖼️ 3. RASMLARNI TAYYORLASH

### Rasm talablari:
- **Format:** JPG yoki PNG
- **O'lcham:** Kamida 500x500 piksel (to'rtburchak)
- **Hajm:** Har biri 500KB dan kichik bo'lishi kerak
- **Sifat:** Yaxshi yorug'lik, aniq yuz

### Rasmlarni joylashtirish:
1. `images` papkasini yarating
2. Ichida `students` va `teachers` papkalarini yarating
3. Rasmlarni mos papkalarga joylashtiring
4. Fayl nomlari kichik harflar va chiziqcha bilan: `ali_valiyev.jpg`

### Rasm nomlarini to'g'ri yozish:
```javascript
// script.js da:
image: "images/students/ali_valiyev.jpg"  // ✅ To'g'ri
image: "ali valiyev.jpg"                   // ❌ Xato
```

---

## 🚀 4. GITHUB PAGES'GA YUKLASH

### 4.1. GitHub akkaunti yarating
- https://github.com ga o'ting
- Sign up bosing va ro'yxatdan o'ting

### 4.2. Repository yarating
1. GitHub'ga kiring
2. Yuqori o'ng burchakda **+** → **New repository**
3. Repository name: `119-maktab-9v` (yoki istalgan nom)
4. Public tanlang (bepul)
5. **Create repository** bosing

### 4.3. Fayllarni yuklash

**A variant - Browser orqali (Oson):**

1. Repository sahifasida **Add file** → **Upload files**
2. Barcha fayllaringizni drag & drop qiling:
   - index.html
   - styles.css
   - script.js
   - logo.svg
   - images papkasi (ichidagi barcha fayllar bilan)
3. Pastda **Commit changes** bosing

**B variant - GitHub Desktop (Tavsiya):**

1. https://desktop.github.com dan GitHub Desktop yuklab oling
2. O'rnatib, GitHub akkountingiz bilan kiring
3. **File** → **Clone repository** → O'zingizning repository'ni tanlang
4. Kompyuteringizda repository papkasi ochiladi
5. Barcha sayt fayllarini shu papkaga ko'chiring
6. GitHub Desktop'da **Commit to main** bosing
7. **Push origin** bosing

### 4.4. GitHub Pages yoqish

1. Repository'da **Settings** ga o'ting
2. Chap menuda **Pages** ni bosing
3. **Source** → **main** branch tanlang
4. **Save** bosing
5. 2-3 daqiqadan keyin saytingiz tayyor!

Sayt manzili: `https://yourname.github.io/119-maktab-9v`

---

## 🌐 5. DOMENNI ULASH

Agar sizda tayyor domen bor bo'lsa (masalan: `119maktab.uz`):

### 5.1. GitHub'da sozlash
1. Repository → Settings → Pages
2. **Custom domain** ga domeningizni kiriting: `119maktab.uz`
3. **Save** bosing

### 5.2. Domen provayderida sozlash
Domeningiz provayderida (masalan, UZDOMAIN, Uz-Host):

**A variant - A record:**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**B variant - CNAME record:**
```
Type: CNAME
Name: www
Value: yourname.github.io
```

24-48 soat kutish kerak bo'lishi mumkin.

---

## ❓ 6. KO'P BERILADIGAN SAVOLLAR

### Rasmlar ko'rinmayapti?
✅ **Yechim:**
- Rasm yo'li to'g'ri yozilganligini tekshiring
- Fayl nomi kichik harf va chiziqcha bilan yozilganligini tekshiring
- `images/students/` papka borligini tekshiring

### Ma'lumotlar yangilanmayapti?
✅ **Yechim:**
- `script.js` faylini to'g'ri saqladingizmi?
- GitHub'ga yangidan yukladingizmi (commit & push)?
- Brauzerda Ctrl+Shift+R bosib qayta yuklang (cache tozalash)

### Video ko'rsatilmayapti?
✅ **Yechim:**
- YouTube ID to'g'ri ko'chirilganligini tekshiring
- Videoning "Public" yoki "Unlisted" ekanligini tekshiring

### Sayt mobil telefonda ko'rinmayapti?
✅ **Yechim:**
- Sayt avtomatik responsive (moslashuvchan)
- Agar muammo bo'lsa, browserni yangilang

### Domenni qanday sotib olaman?
✅ **Variantlar:**
- **Uz-Host**: https://uz-host.uz (10,000 so'mdan)
- **UZDOMAIN**: https://uzdomain.uz
- **Netlify**: Bepul subdomen (yourname.netlify.app)

---

## 🎨 DIZAYNNI O'ZGARTIRISH

### Ranglarni o'zgartirish
`styles.css` faylida (5-11 qatorlar):

```css
:root {
    --white: #FFFFFF;      /* Oq fon */
    --light-gray: #F7F7F7; /* Yengil kulrang */
    --black: #333333;      /* Qora matn */
    --blue: #0A66C2;       /* Ko'k aksent */
}
```

### Shriftni o'zgartirish
`styles.css` faylida (13-qator):

```css
font-family: 'Your Font', Arial, sans-serif;
```

---

## 💡 QO'SHIMCHA IMKONIYATLAR

### 1. Qidiruv funksiyasi qo'shish
### 2. Fotografiya galereyasi
### 3. Sharh qoldirish tizimi
### 4. Onlayn so'rovnoma

Agar bu funksiyalarni xohlasangiz, menga ayting - qo'shamiz!

---

## 📞 YORDAM KERAKMI?

Agar qiyinchilik bo'lsa:
1. Xato xabarining screenshot'ini oling
2. Qaysi qismda muammo borligini ayting
3. Men yordam beraman!

---

## ✅ TAYYOR BO'LGANDAN KEYIN

1. ✅ Barcha ma'lumotlar to'ldirilgan
2. ✅ Rasmlar yuklangan
3. ✅ GitHub Pages'da ishlayapti
4. ✅ Sinfdoshlar bilan baham ko'ring!

**Omad! Ajoyib xotira sayti bo'ladi! 🎓✨**