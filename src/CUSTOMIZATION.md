# 🎨 Portfolio Website Customization Guide

Welcome! This guide will help you customize your portfolio website with your personal information.

## 📁 Files to Edit

### 1. `/data/personal.ts` - Your Personal Information

This is the main file containing all your personal information. Update the following:

**Basic Info:**
- `name` - Your name
- `title` - Your job title/tagline
- `tagline` - A short description about yourself
- `emoji` - The emoji shown on the home page (default: 👋)

**About Section:**
- `bio.paragraph1` - First paragraph of your story
- `bio.paragraph2` - Second paragraph of your story
- `traits` - Three traits that describe you (title & description for each)

**Background:**
- `education` - Your degree, institution, and year
- `experience` - Array of your work experience (position, company, period)

**Contact Info:**
- `contact.email` - Your email address
- `contact.location` - Your location
- `contact.phone` - Your phone number (or leave as "Available upon request")

**Social Links:**
- `social` - Array of your social media profiles
  - Currently supports: GitHub, LinkedIn, Twitter
  - Format: `{ platform: 'GitHub', url: 'https://...' }`

**CV File:**
- `cvFile.path` - Path to your CV PDF file (place in `/public` folder)
- `cvFile.filename` - Name for the downloaded file

**Skills Page:**
- `skillsFunFact` - A fun fact or quote for the skills page

### 2. `/data/skills.ts` - Your Technical Skills

Add or remove skills as needed. Each skill has:
- `name` - The skill name
- `icon` - An emoji representing the skill
- `category` - One of: 'language', 'framework', 'ml-robotics', 'other'

Example:
```typescript
{ name: 'Python', icon: '🐍', category: 'language' }
```

### 3. `/data/projects.ts` - Your Projects

Add your projects here. Each project needs:
- `id` - Unique number
- `title` - Project title
- `description` - Brief description of the project
- `tech` - Array of technologies used
- `githubUrl` - Link to the GitHub repository
- `imageUrl` - (Optional) Link to a project image

Example:
```typescript
{
  id: 1,
  title: 'My Awesome Project',
  description: 'A brief description of what this project does.',
  tech: ['React', 'TypeScript', 'Node.js'],
  githubUrl: 'https://github.com/yourusername/project',
}
```

## 🎨 Color Palette

The website uses a green/yellow/purple color palette. The colors are defined in `/styles/globals.css`:

**Day Mode:**
- Primary: Mint green (#7DD3C0)
- Secondary: Warm yellow (#FFD89B)
- Tertiary: Soft purple (#BA94FF)

**Night Mode:**
- Primary: Deep teal (#5BB5A2)
- Secondary: Golden yellow (#FFCA6C)
- Tertiary: Rich purple (#A881FF)

To change colors, edit the CSS variables in `/styles/globals.css`.

## 📄 Adding Your CV

1. Place your CV PDF file in the `/public` folder
2. Update the path in `/data/personal.ts`:
   ```typescript
   cvFile: {
     path: '/your-cv.pdf',
     filename: 'YourName_CV.pdf',
   }
   ```

## 🎵 Sound Effects

The website includes Nintendo-inspired sound effects for:
- Button clicks
- Card hovers
- Theme toggle

Toggle sounds on/off using the speaker icon in the bottom-left corner.

## 🌓 Theme Toggle

Switch between day and night modes using the sun/moon icon in the bottom-right corner.

Day mode features pastel colors and warm tones.
Night mode features deep blues with sparkle animations and fairy lights.

## 🔧 Advanced Customization

### Modifying Page Content

Each page is located in `/pages/`:
- `/pages/Home.tsx` - Main hub with navigation
- `/pages/About.tsx` - About page
- `/pages/Skills.tsx` - Skills page
- `/pages/Projects.tsx` - Projects page
- `/pages/Contact.tsx` - Contact page

### Form Submission

The contact form currently has mock submission. To implement real form submission:

1. Open `/pages/Contact.tsx`
2. Find the `handleSubmit` function
3. Replace the mock implementation with your own (e.g., EmailJS, Formspree, or a custom backend)

## 📱 Responsive Design

The website is fully responsive and works on:
- Mobile devices (phones)
- Tablets
- Desktop computers

## ♿ Accessibility

The site includes:
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast meeting WCAG standards
- Semantic HTML structure

## 🚀 Navigation Structure

The site uses a button-based navigation system with minimal scrolling:
- **Home** - Main hub with navigation cards
- **About** - Your story and background
- **Skills** - Technical expertise
- **Projects** - Portfolio of work
- **Contact** - Contact form and info

Each page has a "Back to Home" button for easy navigation.

## 💡 Tips

1. Keep descriptions concise and engaging
2. Use emojis to add personality
3. Update projects regularly to showcase recent work
4. Test the website in both day and night modes
5. Ensure all links work before deploying

## 🆘 Need Help?

If you encounter any issues:
1. Check that all data files are properly formatted
2. Ensure all required fields are filled
3. Verify that external links are correct
4. Test in different browsers

Enjoy your new portfolio! ✨
