# 🎨 Logo & Video Integration Guide

## ✅ Changes Made

I've updated your website to support both your logo and pitch video. Here's what was changed:

### Files Modified:
1. ✅ `components/navigation.tsx` - Added logo support
2. ✅ `components/footer.tsx` - Added logo support
3. ✅ `components/sections/hero-section.tsx` - Added video modal

---

## 🎨 How to Add Your Logo

### Step 1: Prepare Your Logo

**Recommended formats:**
- **SVG** (best) - scalable, small file size, crisp at any size
- **PNG** - good for complex logos with transparency
- **Sizes**: Prepare at least 240px wide for retina displays

### Step 2: Add Logo to Public Folder

1. Copy your logo file to: `c:\Users\mark\Documents\keygrid-website\public\`
2. Name it one of these:
   - `logo.svg` (if SVG)
   - `logo.png` (if PNG)
   - `logo-light.svg` and `logo-dark.svg` (if you have both versions)

### Step 3: Update Navigation Component

Open `components/navigation.tsx` and find line ~50:

```tsx
{/* Option 1: If you have a logo file, uncomment this and replace 'logo.svg' with your logo filename */}
{/* <Image src="/logo.svg" alt="KeyGrid" width={120} height={40} className="h-8 w-auto" /> */}

{/* Option 2: Keep gradient text if you prefer (current) */}
<div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
  KeyGrid
</div>
```

**To use your logo:**
1. Uncomment the `<Image>` line (remove `{/*` and `*/}`)
2. Replace `logo.svg` with your actual filename
3. Adjust `width` and `height` as needed
4. Delete or comment out the gradient text div

**Example:**
```tsx
<Image src="/logo.png" alt="KeyGrid" width={150} height={50} className="h-8 w-auto" />
```

### Step 4: Update Footer Component

Open `components/footer.tsx` and find line ~43:

```tsx
{/* Option 1: If you have a logo file, uncomment this */}
{/* <Image src="/logo.svg" alt="KeyGrid" width={120} height={40} className="h-8 w-auto mb-4" /> */}

{/* Option 2: Keep gradient text if you prefer (current) */}
<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
  KeyGrid
</div>
```

Follow the same process as navigation.

---

## 🎥 How to Add Your Pitch Video

### Option 1: YouTube Video (Recommended - Already Set Up!)

#### Step 1: Upload Video to YouTube

1. Go to YouTube Studio
2. Upload your pitch video
3. Set it to **Public** or **Unlisted** (Unlisted is recommended for professional use)
4. Copy the video ID from the URL

**Example:**
- If your URL is: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Your video ID is: `dQw4w9WgXcQ`

#### Step 2: Update Hero Section

Open `components/sections/hero-section.tsx` and find line ~13:

```tsx
const youtubeVideoId = "YOUR_YOUTUBE_VIDEO_ID"; // ← Replace this!
```

Replace with your actual video ID:

```tsx
const youtubeVideoId = "dQw4w9WgXcQ"; // ← Your actual ID here
```

**That's it!** The video will now work when users click the "Watch Pitch Video" button.

---

### Option 2: Self-Hosted Video (Alternative)

If you want to host the video yourself instead of YouTube:

#### Step 1: Optimize Your Video

1. **Convert to web-optimized format:**
   - Use MP4 (H.264 codec)
   - Recommended resolution: 1920x1080 or 1280x720
   - Target file size: Under 50MB if possible

2. **Compress using tools like:**
   - HandBrake (free)
   - CloudConvert
   - FFmpeg

#### Step 2: Add Video to Public Folder

Copy your video file to: `c:\Users\mark\Documents\keygrid-website\public\pitch-video.mp4`

#### Step 3: Update Hero Section

Replace the YouTube iframe code (around line 182) with:

```tsx
{/* Self-hosted video */}
<video
  className="w-full h-full"
  controls
  autoPlay
  src="/pitch-video.mp4"
>
  Your browser does not support the video tag.
</video>
```

---

## 🎬 How the Video Works

When users click the "Watch Pitch Video" button:
1. A full-screen modal overlay appears
2. Video auto-plays (YouTube only)
3. Users can:
   - Click the X button to close
   - Click outside the video to close
   - Watch in fullscreen
   - Use standard video controls

---

## 📋 Quick Checklist

### Logo Integration:
- [ ] Logo file added to `/public/` folder
- [ ] Navigation logo uncommented and filename updated
- [ ] Footer logo uncommented and filename updated
- [ ] Logo dimensions adjusted if needed
- [ ] Tested on mobile and desktop

### Video Integration:
- [ ] Pitch video uploaded to YouTube (or added to `/public/`)
- [ ] YouTube video ID added to `hero-section.tsx`
- [ ] Video set to Public or Unlisted on YouTube
- [ ] Tested video playback
- [ ] Tested modal close functionality

---

## 🚀 Testing Your Changes

### Test Logo:
1. Run dev server: `npm run dev`
2. Visit `http://localhost:3000`
3. Check navigation (top) - logo should appear
4. Scroll to bottom - logo should appear in footer
5. Test on mobile view (resize browser or use dev tools)

### Test Video:
1. Click "Watch Pitch Video" button in hero section
2. Video should open in modal and auto-play
3. Test close functionality:
   - Click X button
   - Click outside video
   - Press ESC key (browser default)
4. Check fullscreen functionality

---

## 🔧 Troubleshooting

### Logo Not Showing?
- ✅ Check filename matches exactly (case-sensitive)
- ✅ File is in `/public/` folder (not `/public/images/`)
- ✅ Image component is uncommented
- ✅ Clear browser cache and refresh

### Video Not Playing?
- ✅ YouTube video is Public or Unlisted (not Private)
- ✅ Video ID is correct (just the ID, not full URL)
- ✅ Check browser console for errors (F12)
- ✅ Test video directly on YouTube first

### Logo Too Big/Small?
Adjust the dimensions in the `Image` component:
```tsx
<Image 
  src="/logo.svg" 
  alt="KeyGrid" 
  width={150}  // ← Adjust this
  height={50}  // ← Adjust this
  className="h-8 w-auto"  // Or adjust this: h-10, h-12, etc.
/>
```

---

## 📝 Example Files

### Example Logo Implementation:
```tsx
// In navigation.tsx
<Link href="/" className="flex items-center space-x-2">
  <Image 
    src="/logo.svg" 
    alt="KeyGrid" 
    width={120} 
    height={40} 
    className="h-8 w-auto"
    priority
  />
</Link>
```

### Example Video ID Setup:
```tsx
// In hero-section.tsx
const youtubeVideoId = "dQw4w9WgXcQ"; // Rick Astley example
```

---

## 🎯 Final Notes

- Logo and video are **optional** - gradient text works great too!
- YouTube hosting is **recommended** for better performance
- Self-hosted video increases your bundle size
- Both implementations are production-ready
- Changes work immediately in development
- Remember to test before deploying to production

---

## 📞 Need Help?

If something doesn't work:
1. Check the browser console (F12) for error messages
2. Verify file paths and names
3. Make sure files are in the correct folders
4. Clear cache and hard refresh (Ctrl+Shift+R)

Good luck! 🚀
