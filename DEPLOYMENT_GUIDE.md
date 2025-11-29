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

## الخطوة 5️⃣: إعداد GitHub OAuth للـ CMS

لكي تستطيع الدخول إلى لوحة التحكم `/admin/`، تحتاج إنشاء GitHub OAuth App:

1. **افتح GitHub Developer Settings:**
   - اذهب إلى [https://github.com/settings/developers](https://github.com/settings/developers)
   - اضغط `OAuth Apps`
   - اضغط `New OAuth App`

2. **املأ التفاصيل:**
   - **Application name:** `Moroccan Hands CMS`
   - **Homepage URL:** `https://YOUR_USERNAME.github.io/moroccan-hands/`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
   
   > ⚠️ **مهم:** استخدم بالضبط هذا الـ callback URL: `https://api.netlify.com/auth/done`

3. **اضغط `Register application`**

4. **احفظ المعلومات:**
   - **Client ID:** انسخه واحفظه
   - **Client Secret:** اضغط `Generate a new client secret` ثم انسخه واحفظه

---

## الخطوة 6️⃣: تحديث ملف config.yml

الآن عُد إلى المشروع وحدّث ملف ` admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/moroccan-hands  # غيّر هذا باسم المستخدم الخاص بك
  branch: main
  base_url: https://api.netlify.com  # إضافة هذين السطرين
  auth_endpoint: auth                 # للتو ثيق عبر GitHub
```

**ملاحظة:** Netlify يوفر خدمة GitHub OAuth مجاناً، حتى بدون استضافة على Netlify!

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
- تأكد من صحة Client ID و Client Secret
- تأكد من callback URL بالضبط: `https://api.netlify.com/auth/done`
- تأكد من تحديث اسم Repository في `config.yml`

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
