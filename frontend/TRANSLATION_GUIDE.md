# Translation Implementation Guide

## Quick Reference for Updating Pages

### Step 1: Add Imports

```javascript
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations/translations";
```

### Step 2: Add Hooks

```javascript
const { language } = useLanguage();
const t = useTranslation(language);
```

### Step 3: Replace Text

```javascript
// Before:
<h1>Contact Us</h1>

// After:
<h1>{t('contact.title')}</h1>
```

## Translation Keys Available

### Navigation

- `nav.home`, `nav.about`, `nav.academics`, `nav.facilities`, `nav.gallery`, `nav.events`, `nav.admissions`, `nav.contact`, `nav.results`

### Common

- `common.readMore`, `common.learnMore`, `common.submit`, `common.name`, `common.email`, `common.phone`, `common.message`

### Home Page

- `home.heroTitle`, `home.heroSubtitle`, `home.whyChoose`, `home.academicExcellence`, etc.

### Contact Page

- `contact.title`, `contact.subtitle`, `contact.getInTouch`, `contact.sendMessage`, etc.

### Admissions Page

- `admissions.title`, `admissions.subtitle`, `admissions.studentName`, `admissions.submitApplication`, etc.

### Results Page

- `results.title`, `results.subtitle`, `results.ourToppers`, etc.

### Footer

- `footer.aboutSchool`, `footer.quickLinks`, `footer.contactUs`, `footer.workingHours`, etc.

---

**All translations are in:** `src/translations/translations.js`
