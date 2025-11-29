# إرشادات نشر موقعك على GitHub Pages 🚀

## خطوات النشر المجاني 100%

### 📋 المتطلبات
- حساب GitHub (مجاني) - [إنشاء حساب](https://github.com/join)
- 10 دقائق من وقتك

---

## الخطوة 1️⃣: إنشاء GitHub Repository

1. **افتح GitHub:** اذهب إلى [https://github.com/new](https://github.com/new)

2. **املأ التفاصيل:**
   - **Repository name:** `moroccan-hands`
   - **Description:** (اختياري) `Moroccan travel website with Decap CMS`
   - **Public أو Private:** اختر **Public** (مجاني)
   - **لا تُفعّل** "Initialize this repository with a README" (لأننا أنشأنا واحد بالفعل)

3. **اضغط على**: `Create repository`

---

## الخطوة 2️⃣: ربط المشروع بـ GitHub

بعد إنشاء Repository، ستظهر لك GitHub صفحة بتعليمات. **استخدم هذا الأمر:**

```bash
# انسخ هذا الأمر وعدّله باسم المستخدم الخاص بك
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/moroccan-hands.git
```

**مثال:** إذا كان اسم المستخدم الخاص بك `ahmed123`:
```bash
git remote add origin https://github.com/ahmed123/moroccan-hands.git
```

---

## الخطوة 3️⃣: رفع الكود إلى GitHub

بعد ربط الـrepository، ارفع الكود:

```bash
git branch -M main
git push -u origin main
```

---

## الخطوة 4️⃣: تفعيل GitHub Pages

1. **افتح Repository Settings:**
   - اذهب إلى repository الخاص بك على GitHub
   - اضغط على تبويب `Settings` (الإعدادات)

2. **افتح GitHub Pages:**
   - في القائمة الجانبية، اضغط على `Pages`

3. **اختر Source:**
   - **Branch:** اختر `main`
   - **Folder:** اختر `/root`
   - اضغط `Save`

4. **انتظر دقيقة واحدة** ثم ستظهر رسالة:
   ```
   Your site is published at https://YOUR_USERNAME.github.io/moroccan-hands/
   ```

---

## الخطوة 5️⃣: إعداد Cloudflare Worker للمصادقة (Authentication)

بما أننا لا نستخدم Netlify، سنستخدم **Cloudflare Workers** (مجاني) لعمل "جسر" لتسجيل الدخول.

### 1. إنشاء Cloudflare Worker
1. اذهب إلى [Cloudflare Dashboard](https://dash.cloudflare.com/) وسجل دخول (أو أنشئ حساباً).
2. في القائمة الجانبية، اختر **Workers & Pages**.
3. اضغط **Create Application** ثم **Create Worker**.
4. سمّه مثلاً: `moroccan-hands-auth` واضغط **Deploy**.

### 2. إضافة كود المصادقة
1. بعد إنشاء الـ Worker، اضغط **Edit Code**.
2. امسح الكود الموجود هناك.
3. انسخ الكود من ملف `oauth-worker.js` الموجود في مجلد مشروعك (على جهازك) والصقه في Cloudflare.
4. اضغط **Save and Deploy**.

### 3. إعداد GitHub OAuth App
1. اذهب إلى [GitHub Developer Settings](https://github.com/settings/developers).
2. اضغط **New OAuth App**.
3. املأ البيانات:
   - **Application Name:** `Moroccan Hands CMS`
   - **Homepage URL:** رابط موقعك (مثال: `https://YOUR_USERNAME.github.io/moroccan-hands/`)
   - **Authorization callback URL:** رابط الـ Worker الخاص بك + `/callback`
     - مثال: `https://moroccan-hands-auth.YOUR_SUBDOMAIN.workers.dev/callback`
     - (يمكنك معرفة رابط الـ Worker من لوحة تحكم Cloudflare).
4. اضغط **Register application**.
5. انسخ **Client ID** و **Client Secret**.

### 4. ربط المتغيرات (Environment Variables)
1. ارجع إلى إعدادات الـ Worker في Cloudflare (Settings -> Variables).
2. أضف متغيرين جديدين:
   - `CLIENT_ID`: (ألصق القيمة من GitHub)
   - `CLIENT_SECRET`: (ألصق القيمة من GitHub)
   - **مهم:** اضغط **Encrypt** لـ Client Secret للحماية.
3. اضغط **Save and Deploy** مرة أخرى للتأكد.

---

## الخطوة 6️⃣: تحديث ملف config.yml

الآن، أخبر الـ CMS بعنوان الـ Worker الجديد.

1. افتح ملف `admin/config.yml`.
2. عدّل `base_url` ليصبح رابط الـ Worker الخاص بك (بدون `/callback`):

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/moroccan-hands
  branch: main
  base_url: https://moroccan-hands-auth.YOUR_SUBDOMAIN.workers.dev
  auth_endpoint: auth
```


---

## الخطوة 7️⃣: حفظ التغييرات ورفعها

```bash
git add admin/config.yml
git commit -m "Update CMS config with GitHub repo"
git push
```

---

## ✅ التحقق من عمل كل شيء

### 1. اختبر الموقع
افتح: `https://YOUR_USERNAME.github.io/moroccan-hands/`

### 2. اختبر CMS
افتح:  `https://YOUR_USERNAME.github.io/moroccan-hands/admin/`

- اضغط `Login with GitHub`
- سجل دخول بحساب GitHub
- يجب أن تصل إلى لوحة تحكم CMS

### 3. أضف مقالة تجريبية
- من CMS، اذهب إلى `Blog Articles`
- اضغط `New Blog Article`
- املأ التفاصيل واضغط `Publish`
- تحقق من ظهورها على الموقع!

---

## 🎉 مبروك!

موقعك الآن منشور على الإنترنت ومتاح للجميع! 

**رابط الموقع:** `https://YOUR_USERNAME.github.io/moroccan-hands/`
**لوحة التحكم:** `https://YOUR_USERNAME.github.io/moroccan-hands/admin/`

---

## 📞 إذا واجهت مشكلة

### المشكلة: "Authentication Error" في CMS
- تأكد من أنك أضفت `CLIENT_ID` و `CLIENT_SECRET` في إعدادات Cloudflare Worker.
- تأكد من أن `base_url` في `config.yml` هو رابط الـ Worker الصحيح (بدون `/` في النهاية).
- تأكد من أن `Authorization callback URL` في GitHub يطابق رابط الـ Worker + `/callback`.

### المشكلة: الموقع لا يعمل
- انتظر 2-3 دقائق بعد تفعيل GitHub Pages
- تحقق من Source في Settings → Pages
- تأكد من push الكود بنجاح

### المشكلة: الصور لا تظهر
- تأكد من رفع الصور في مجلد `assets/uploads/`
- تحقق من المسارات في HTML

---

## 🚀 خطوات إضافية (اختيارية)

### إضافة Domain خاص
قد تستخدم domain مخصص بدلاً من `.github.io`:
1. اشتري domain من Namecheap أو GoDaddy
2. في GitHub Pages Settings، أضف Custom Domain
3. اتبع التعليمات لتوجيه DNS

### تحسين SEO
- حدّث Google Analytics ID في الملفات
- أضف Google Search Console
- ارفع sitemap.xml

---

💡 **نصيحة:** احفظ هذا الملف للرجوع إليه لاحقاً!
