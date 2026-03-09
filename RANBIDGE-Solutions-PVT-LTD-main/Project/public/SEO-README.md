# Ranbridge Solutions - SEO and Search Configuration

This directory contains search preference files to ensure proper company appearance in browser searches and search engines.

## Files Created

### 1. company-info.json
Structured company information for search engines and applications:
- Company name and description
- Contact information
- Social media links
- Services offered
- Keywords for search optimization
- Business categories and target audience

### 2. opensearch.xml
OpenSearch specification for browser search integration:
- Enables custom search engine in browsers
- Provides search suggestions
- Includes company branding
- Example search queries

### 3. organization.json
Schema.org structured data for search engines:
- Organization details
- Service descriptions
- Contact points
- Social media profiles
- Business location and hours

### 4. manifest.json
Web app manifest for browser integration:
- PWA capabilities
- App shortcuts to key pages
- Splash screens and icons
- Theme colors and branding

## Search Benefits

These files help with:
- **Search Engine Visibility**: Better ranking in search results
- **Browser Integration**: Custom search engine in browsers
- **Rich Snippets**: Enhanced search result display
- **Brand Recognition**: Consistent company appearance
- **Mobile Apps**: PWA installation and shortcuts
- **Local SEO**: Location-based search visibility

## Implementation

Add these references to your HTML head:
```html
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Ranbridge Solutions">
<link rel="manifest" href="/manifest.json">
<script type="application/ld+json" src="/organization.json"></script>
```

## Keywords Targeted

- Primary: "Ranbridge Solutions", "IT solutions", "web development"
- Secondary: "software development", "Python development", "React development"
- Geographic: "Hyderabad", "Telangana", "India"
- Services: "cloud services", "digital marketing", "IT consulting"

## Monitoring

Track search performance using:
- Google Search Console
- Bing Webmaster Tools
- Analytics for search terms
- Local business listings

This ensures your company appears correctly when users search for IT services, web development, or software solutions in browsers and search engines.
