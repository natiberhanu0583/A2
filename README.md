# A2 ERP — Full Stack (MySQL + እውነተኛ Login + Push Notification)

## ይህ ምንድን ነው
- **backend/** — Node.js/Express ሰርቨር፦
  - ሁሉንም የቢዝነስ ዳታ (ቻት፣ ግዥ፣ ስቶክ፣ ወዘተ) **MySQL** ውስጥ በማዕከላዊነት ያከማቻል።
  - **እውነተኛ፣ ጠንካራ ሎግ ኢን** — ፓስዋርዶች `bcrypt` ተብሎ በሚታወቅ ዘዴ ተመስጥረው (hashed) ብቻ ነው በ MySQL የሚቀመጡት (በጭራሽ በግልጽ ጽሁፍ አይቀመጡም/አይላኩም)። ሎግ ኢን ማድረግ ሲፈልጉ ሰርቨሩ ራሱ የይለፍ ቃሉን ያረጋግጣል፣ ትክክል ከሆነ ጊዜ-ገደብ ያለው ማረጋገጫ ቲኬት (JWT session token) ይሰጣል።
  - **Role-based ጥበቃ** — አዲስ ሠራተኛ መፍጠር የሚችለው owner ብቻ ነው፤ እያንዳንዱ API endpoint ትክክለኛ ማረጋገጫ (token) ከሌለው ውድቅ ይደረጋል።
  - **እውነተኛ Push Notification** ይልካል — ተጠቃሚው ብሮዘሩን ዘግቶም ቢሆን ማሳወቂያ ይደርሰዋል።
- **frontend/** — የነበረው ገጽ (index.html, app.js, style.css, logo.png) ከ Service Worker፣ ከ Push subscription፣ እና ከ MySQL-backed login ጋር።

## ብዙ ቅርንጫፍ / ጠንካራ ጥበቃ ምን ማለት ነው (ተግባራዊ የተደረገው)
| ቀደም ሲል | አሁን |
|---|---|
| ፓስዋርድ በ localStorage ውስጥ በግልጽ ጽሁፍ ተቀምጦ ነበር | ፓስዋርድ `bcrypt` ተመስጥሮ በ MySQL ብቻ ተቀምጧል፤ ወደ ብሮዘር በጭራሽ አይላክም |
| ሎግ ኢን ማረጋገጫ ሙሉ በሙሉ በብሮዘር (client) ብቻ ይሆን ነበር | ሎግ ኢን ማረጋገጫ ሙሉ በሙሉ በሰርቨር ይከናወናል፤ ብሮዘሩ ውጤቱን ብቻ ነው የሚቀበለው |
| ማንኛውም ሰው (ትክክለኛ URL ካወቀ) ዳታ ማንበብ/መቀየር ይችል ነበር | እያንዳንዱ ጥያቄ ትክክለኛ session token ይፈልጋል፤ ከሌለው 401 ይመለሳል |
| አዲስ ሠራተኛ/ተጠቃሚ ማን ሊፈጥር እንደሚችል ገደብ አልነበረም | አዲስ login መፍጠር የሚችለው **owner** ብቻ ነው (ሰርቨር ላይ የተረጋገጠ) |
| የፓስዋርድ ለውጥ ያለ ማረጋገጫ ይሆን ነበር | ፓስዋርድ ለመቀየር የቀድሞውን ትክክለኛ ፓስዋርድ ሰርቨሩ ያረጋግጣል (owner ግን ያለ ማረጋገጫ ለሌላ ሰው ሊቀይር ይችላል) |

> ማስታወሻ፦ ይህ ጠንካራ **authentication** (ማንነት ማረጋገጫ) ነው። ዝርዝር **branch-level authorization** (ለምሳሌ "የቅርንጫፍ 1 ሽያጭ ሰራተኛ የቅርንጫፍ 2 ዳታ በፍጹም እንዳያይ" ብሎ በእያንዳንዱ API ላይ ማጣራት) ግን የቢዝነስ ሎጂኩን ሙሉ ዳግም-ማዋቀር ስለሚጠይቅ በዚህ ዙር አልተካተተም። አሁን ባለው ንድፍ ማንኛውም ትክክለኛ login ያለው ሰው ወደ ማንኛውም ቅርንጫፍ generic sync ማንበብ/መጻፍ ይችላል (የፊት-ለፊት ገጹ በራሱ በቅርንጫፍ አጣርቶ ያሳያል)። ይህን የበለጠ ማጠናከር ከፈለጉ (ለምሳሌ እያንዳንዱ ቅርንጫፍ የራሱን ዳታ ብቻ እንዲያይ በሰርቨር ደረጃ መገደብ) ንገሩኝ ተጨማሪ ስራ እንሰራለን።

---

## 1) MySQL ማዘጋጀት

### በኮምፒዩተርዎ ላይ ሙከራ (Local test)
MySQL ወይም MariaDB በኮምፒዩተርዎ ላይ ተጭኖ ካለ፦
```sql
CREATE DATABASE a2erp CHARACTER SET utf8mb4;
CREATE USER 'a2user'@'localhost' IDENTIFIED BY 'YourStrongPassword';
GRANT ALL PRIVILEGES ON a2erp.* TO 'a2user'@'localhost';
FLUSH PRIVILEGES;
```

### cPanel ላይ (production)
cPanel ውስጥ **"MySQL® Databases"** የሚለውን ይክፈቱ፦
1. **Create New Database** — ስም ይስጡ (ለምሳሌ `a2erp`) → cPanel ራሱ `cpaneluser_a2erp` ብሎ ስም ይሰጠዋል፣ ያንን ኮፒ ያድርጉ።
2. **Add New User** — username/password ይፍጠሩ → cPanel `cpaneluser_a2user` ብሎ ስም ይሰጠዋል፣ ፓስዋርዱን በጥንቃቄ ያስቀምጡ።
3. **Add User to Database** — የፈጠሩትን ተጠቃሚ ወደ ዳታቤዙ ይጨምሩ፣ **ALL PRIVILEGES** ይምረጡ።

## 2) Backend ማዋቀር

```bash
cd backend
npm install
cp .env.example .env
```

`.env` ውስጥ የሚከተሉትን ይሙሉ (ከ cPanel MySQL Databases ገጽ ካገኙት ትክክለኛ ስሞች ጋር)፦
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=cpaneluser_a2user
DB_PASSWORD=YourStrongPassword
DB_NAME=cpaneluser_a2erp
```
`JWT_SECRET` እና `VAPID_*` ቀድሞ ተዘጋጅተውልዎታል፣ እንዳሉ መጠቀም ወይም መቀየር ይችላሉ (ለምርት/production የራስዎን አዲስ `JWT_SECRET` ማድረግ ይመከራል፦ `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`)።

## 3) የመጀመሪያውን Owner አካውንት መፍጠር (Seed)

ሰርቨሩ ከመጀመሩ በፊት፣ ይህን አንድ ጊዜ ብቻ ያሂዱ፦
```bash
node seed.js
```
ይህ የ `owner` አካውንት (username: `owner`, password: `owner123`) በ MySQL ውስጥ በ**bcrypt ተመስጥሮ** ይፈጥራል፣ እና MySQL ጠረጴዛዎቹንም (tables) ራሱ ይፈጥራል። ወደ ስርዓቱ ከገቡ በኋላ ይህን የመጀመሪያ ፓስዋርድ ወዲያውኑ ይቀይሩት (Profile → Change Password)።

> ተጨማሪ የመጀመሪያ አካውንቶች (ለምሳሌ procurement1, marketing1) ማከል ከፈለጉ፣ `seed.js` ውስጥ ያለውን `ACCOUNTS` ዝርዝር ያስተካክሉ እና `node seed.js` እንደገና ያሂዱ (ያለውን አካውንት አይነካውም፣ አዲሶቹን ብቻ ይጨምራል)።

## 4) ሰርቨሩን ማስነሳት

```bash
npm start
```
ወይም `http://localhost:3000` ይክፈቱ ለሙከራ።

---

## 5) የጋራ ሆስት (cPanel) ላይ ለማስቀመጥ

### ⚠️ በጣም አስፈላጊ — ከመግዛትዎ በፊት ያረጋግጡ
ይህ ኮድ **Node.js ሰርቨር** ነው (እንደ ተራ PHP/WordPress ድህረ ገጽ አይደለም)። ስለዚህ ከመግዛትዎ በፊት ሆስቲንግ ኩባንያውን ይጠይቁ፦
- **"Node.js Selector"** ወይም **"Setup Node.js App"** በ cPanel ውስጥ አለ ወይ?
- **MySQL Databases** ይሰጣል ወይ? (አብዛኞቹ cPanel ፓኬጆች አላቸው)

ካለው ይህ ገላጭ ይሰራል። ከሌለው ያንን ፓኬጅ አይግዙ።

### ደረጃዎች
1. **ፋይሎችን ይስቀሉ**፦ `backend/` እና `frontend/` ፎልደሮችን (አብረው፣ sibling ሆነው) ወደ ሆስትዎ ይስቀሉ (ለምሳሌ `/home/username/a2erp/` ውስጥ፣ ከ `public_html` ውጪ)።
2. **MySQL Databases** ውስጥ ከላይ እንደተገለጸው ዳታቤዝ + ተጠቃሚ ይፍጠሩ።
3. **"Setup Node.js App"** → **Create Application**፦
   - Node.js version: 18+ 
   - Application mode: Production
   - Application root: `a2erp/backend`
   - Application URL: የገዙት ዶሜን
   - Application startup file: `server.js`
4. **Environment Variables** ውስጥ ከ `.env.example` ያሉትን ሁሉ ይጨምሩ (DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET, JWT_EXPIRES_IN, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT)።
5. **"Run NPM Install"** ይጫኑ።
6. cPanel **"Terminal"** ካለ (አለበለዚያ SSH)፦
   ```bash
   cd a2erp/backend
   node seed.js
   ```
   (ይህ የመጀመሪያውን owner አካውንት ይፈጥራል።)
7. **"Restart"** ይጫኑ። cPanel ራሱ SSL (HTTPS) ለዶሜንዎ በራስ-ሰር ያስተካክላል (AutoSSL) — ይህ Push Notification እንዲሰራ የግድ ያስፈልጋል።
8. ዶሜንዎን ይክፈቱ፣ በ `owner` / `owner123` ይግቡ፣ ወዲያውኑ ፓስዋርድ ይቀይሩ።

### አማራጭ — ሆስትዎ Node.js ካልደገፈ
ዶሜንን ከየትኛውም ቦታ ገዝተው፣ backend-ን ግን Node.js በሚደግፍ ሌላ አገልግሎት ላይ ማስቀመጥ ይችላሉ (Render.com ወይም Railway.app)፣ ከዚያ ዶሜንዎ ላይ CNAME በማድረግ ማገናኘት ይችላሉ። ከፈለጉ ደረጃ-በደረጃ ልርዳዎት እችላለሁ።

---

## 6) ተጠቃሚዎች Push Notification እንዲያበሩ
እያንዳንዱ ተጠቃሚ ወደ ስርዓቱ ከገባ በኋላ ከላይ ያለውን 🔔 አዝራር አንድ ጊዜ ተጭኖ ፍቃድ ይሰጣል። ከዚያ በኋላ ብሮዘሩ ዝግ ቢሆንም እንኳ ማሳወቂያ ይቀጥላል። (በ **iPhone** ላይ ገጹን ወደ Home Screen መጨመር ያስፈልጋል — የApple ህግ ነው። **Android/Chrome** ላይ ያለ ተጨማሪ ነገር ይሰራል።)

## 7) አዲስ ሠራተኛ/ተጠቃሚ እንዴት እንደሚጨመር
- **HR → Add Employee** ገጽ ላይ owner በቀጥታ ከ UI ውስጥ አዲስ ሠራተኛ + login መፍጠር ይችላል (ፓስዋርዱ ወዲያውኑ በሰርቨሩ ላይ ተመስጥሮ ይቀመጣል)።
- **ቅርንጫፍ ጨምር (Add Branch)** ውስጥ አዲስ ቅርንጫፍ ሲፈጠር አብሮ የሽያጭ ሠራተኛ login መፍጠር ይቻላል።
- ፓስዋርድ መርሳት/ማስቀየር ካስፈለገ owner ከ **HR** ወይም **Branch Management** ገጽ ላይ 🔑 Reset የሚለውን ተጭኖ ያለ ነባር ፓስዋርድ አዲስ ማድረግ ይችላል።

## 8) ዳታ የት ይቀመጣል
- **users** (username, password hash, role, branch, phone, active) — MySQL `users` ጠረጴዛ ውስጥ ብቻ።
- **push_subscriptions** — MySQL `push_subscriptions` ጠረጴዛ ውስጥ።
- **ሌላው ሁሉም** (ቻት፣ ግዥ፣ ስቶክ፣ ቅርንጫፎች...) — MySQL `kv_data` ጠረጴዛ ውስጥ (እያንዳንዱ የመረጃ አይነት እንደ አንድ JSON ረድፍ)።
#   a a  
 #   a a  
 #   A 2  
 