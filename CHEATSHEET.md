# CogniverseAI - Customization Cheat Sheet

Quick reference for common edits and customizations.

## File Locations

| File | Purpose |
|------|---------|
| `index.html` | All website content and structure |
| `styles.css` | Colors, fonts, spacing, animations |
| `script.js` | Interactive features and buttons |
| `README.md` | Full documentation |
| `CONTENT-GUIDE.md` | Content integration help |
| `QUICKSTART.html` | Getting started guide |

## Quick Edits

### Change Brand Name
**File:** `index.html` (Line ~19)
```html
<span class="brand-name">CogniverseAI</span>
```
Change `CogniverseAI` to your company name.

### Change Primary Color
**File:** `styles.css` (Line 1-2)
```css
:root {
    --primary-color: #00d4ff;  /* Change this hex code */
```
- `#00d4ff` = Cyan (default)
- `#ff006e` = Pink
- `#00b4d8` = Light Blue
- `#06a77d` = Green

### Change Hero Headline
**File:** `index.html` (Line ~87)
```html
<h1 class="hero-headline">AI-First Services for Modern Businesses</h1>
```

### Change Hero Subheading
**File:** `index.html` (Line ~88)
```html
<p class="hero-subheading">
    CogniverseAI partners with enterprises...
</p>
```

### Add New Service
**File:** `index.html` (Find `.services-grid`, line ~113)

**Copy this template:**
```html
<div class="service-card">
    <div class="service-icon">🎯</div>
    <h3>Service Name</h3>
    <p>Short description of the service (1-2 sentences).</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
    </ul>
</div>
```

### Add New Solution
**File:** `index.html` (Find `.solutions-grid`, line ~168)

**Copy this template:**
```html
<div class="solution-card">
    <div class="solution-tag">Category Name</div>
    <h3>Solution Name</h3>
    <p>Description of the solution (1-2 sentences).</p>
    <div class="solution-benefits">
        <span class="badge">Benefit 1</span>
        <span class="badge">Benefit 2</span>
        <span class="badge">Benefit 3</span>
    </div>
</div>
```

### Add New Industry
**File:** `index.html` (Find `.industry-grid`, line ~238)

**Copy this template:**
```html
<div class="industry-card">
    <h3>Industry Name</h3>
    <p>Description of AI applications in this industry (2-3 sentences).</p>
</div>
```

### Update Success Metrics
**File:** `index.html` (Find `.success-grid`, line ~268)

**Copy this template:**
```html
<div class="success-card">
    <div class="success-metric">
        <span class="metric-value">45%</span>
        <span class="metric-label">Cost Reduction</span>
    </div>
    <p class="success-description">Description of the achievement.</p>
</div>
```

### Add New Resource
**File:** `index.html` (Find `.resources-grid`, line ~295)

**Copy this template:**
```html
<div class="resource-card">
    <div class="resource-type">📋 Type (Whitepaper, Case Study, etc.)</div>
    <h3>Resource Title</h3>
    <p>Brief description of the resource.</p>
    <button class="resource-btn">Download/Read</button>
</div>
```

## CSS Color Reference

### Primary Colors
```css
--primary-color: #00d4ff;        /* Bright Cyan */
--primary-dark: #0099cc;         /* Dark Cyan */
--secondary-color: #6366f1;      /* Indigo */
--accent-color: #ec4899;         /* Pink */
```

### Background Colors
```css
--bg-dark: #0f172a;              /* Light dark gray */
--bg-darker: #020617;            /* Very dark gray */
--bg-card: #1e293b;              /* Card background */
```

### Text Colors
```css
--text-primary: #f1f5f9;         /* Main text (white-ish) */
--text-secondary: #cbd5e1;       /* Secondary text (light gray) */
--text-tertiary: #94a3b8;        /* Tertiary text (darker gray) */
```

## Font Sizes (Quick Reference)

| Size | Use |
|------|-----|
| `0.75rem` | Tags, badges |
| `0.85rem` | Captions |
| `0.9rem` | Small text |
| `0.95rem` | Nav links |
| `1rem` | Body text, buttons |
| `1.1rem` | Slightly larger text |
| `1.2rem` | Card titles |
| `1.5rem` | Section titles |
| `2rem` | Large titles |
| `3rem` | Hero headline |

## Grid Layouts

### 3 Columns
```css
grid-template-columns: repeat(3, 1fr);
```

### 2 Columns (Tablet)
```css
@media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}
```

### 1 Column (Mobile)
```css
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
```

## JavaScript Events

### Button Click Handler
**File:** `script.js`
```javascript
document.querySelectorAll('.your-button-class').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Button clicked!');
        // Add your code here
    });
});
```

### Form Submission
**File:** `script.js`
```javascript
document.querySelector('.your-form-class').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    // Add your code here
});
```

### On Scroll
**File:** `script.js`
```javascript
window.addEventListener('scroll', () => {
    console.log('Scrolling...');
    // Add your code here
});
```

## Find & Replace Quick Guide

### Find in VS Code: `Ctrl+F`
### Replace in VS Code: `Ctrl+H`

### Common Searches
- Find: `CogniverseAI` → Replace with your company name
- Find: `#00d4ff` → Replace with your primary color
- Find: `AI-First Services` → Replace with your tagline

## Responsive Breakpoints

```css
/* Desktop - do nothing (default) */

/* Tablet and below */
@media (max-width: 1024px) {
    /* tablet styles */
}

/* Mobile and below */
@media (max-width: 768px) {
    /* mobile styles */
}

/* Small mobile */
@media (max-width: 480px) {
    /* small mobile styles */
}
```

## Adding Sections

### Step 1: Add Navigation Link
**File:** `index.html`, line ~23
```html
<a href="#new-section" class="nav-link">New Section</a>
```

### Step 2: Add Section with ID
**File:** `index.html`, at the end before footer
```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2>Section Title</h2>
            <p>Section description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Step 3: Add CSS Styling
**File:** `styles.css`, at the end
```css
.new-section {
    background: rgba(30, 41, 59, 0.5);
    padding: 6rem 0;
}

.new-section h2 {
    color: var(--primary-color);
}
```

## Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Content not appearing | Check closing tags `</div>` |
| Styling looks wrong | Clear browser cache (Ctrl+Shift+Del) |
| Links not working | Verify section IDs match href |
| Form not submitting | Check console (F12) for errors |
| Mobile view broken | Check media queries in CSS |
| Animation not working | Verify CSS animation names match |

## Emoji Reference for Icons

| Icon | Emoji | Use |
|------|-------|-----|
| Robot | 🤖 | AI/Automation |
| Gear | ⚙️ | Workflow |
| Books | 📚 | Learning/LLM |
| Eye | 🎯 | Analysis/Insights |
| Shield | 🛡️ | Security |
| Target | 🎯 | Goals/Strategy |
| Chart | 📊 | Analytics |
| Chat | 💬 | Communication |
| Globe | 🌐 | Global |
| Rocket | 🚀 | Launch/Growth |
| Star | ⭐ | Premium/Featured |

## Quick Customization Checklist

- [ ] Change company name from "CogniverseAI" to yours
- [ ] Change primary color in CSS
- [ ] Update hero headline
- [ ] Update hero subheading
- [ ] Change services to match your offerings
- [ ] Update solutions section
- [ ] Add your industries
- [ ] Update success metrics
- [ ] Add your resources/content
- [ ] Update About section with your info
- [ ] Connect contact form to email
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Deploy to hosting

## Useful Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+F` | Find text |
| `Ctrl+H` | Find & Replace |
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `F12` | Developer Tools |
| `Ctrl+Shift+Del` | Clear Cache |
| `Ctrl+K Ctrl+C` | Comment (VS Code) |

## Contact Form Integration

### Using Formspree (Easy)
1. Go to formspree.io
2. Create account and new form
3. Get your endpoint ID
4. In `script.js`, update the fetch URL:
```javascript
fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: formData
})
```

### Using Your Backend
```javascript
fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

## Performance Tips

1. **Images**: Optimize and compress before uploading
2. **Cache**: Users cache accelerates on repeat visits
3. **CSS**: Minify for production (optional)
4. **JS**: Currently vanilla JS - no build required
5. **CDN**: Use CDN for faster global delivery

## Browser Testing

- Chrome: Test primary features
- Firefox: Check CSS compatibility
- Safari: Check mobile experience
- Edge: Windows compatibility
- Mobile: Test iPhone and Android

---

**Pro Tip:** Always backup your files before making major changes!

For detailed documentation, see `README.md` or `CONTENT-GUIDE.md`
