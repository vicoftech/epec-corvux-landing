import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

// Structured Data optimizado para SEO
const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EPℇC Corvux",
    legalName: "EPℇC Corvux Maritime Solutions",
    url: "https://epec-corvux.com",
    logo: {
      "@type": "ImageObject",
      url: "https://epec-corvux.com/logo.png",
      width: "400",
      height: "400"
    },
    description: "Leading maritime ESG compliance platform providing automated environmental reporting and regulatory compliance solutions for the global shipping industry.",
    foundingDate: "2024",
    industry: ["Maritime Technology", "Environmental Compliance", "ESG Software"],
    keywords: "maritime compliance, ESG reporting, environmental compliance, EU MRV, IMO DCS, shipping software",
    sameAs: [
      "https://linkedin.com/company/epec-corvux",
      "https://twitter.com/epecccorvux"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-EPEC-CVX",
      contactType: "customer service",
      email: "hello@epec-corvux.com",
      availableLanguage: ["English", "Spanish", "French"],
      areaServed: "Worldwide"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Global Operations"
    },
    awards: ["Maritime Innovation Award 2024", "ESG Technology Leader"]
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EPℇC Corvux - Maritime ESG Compliance Platform",
    alternateName: "EPℇC Corvux",
    url: "https://epec-corvux.com",
    description: "Comprehensive maritime ESG compliance platform enabling automated reporting for EU MRV, IMO DCS, ETS, and FuelEU Maritime regulations with real-time monitoring and seamless verifier collaboration.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "EPℇC Corvux",
      logo: {
        "@type": "ImageObject",
        url: "https://epec-corvux.com/logo.png"
      }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://epec-corvux.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "EPℇC Corvux Platform"
    }
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EPℇC Corvux Maritime Compliance Platform",
    applicationCategory: ["BusinessApplication", "EnvironmentalSoftware"],
    applicationSubCategory: "Maritime Compliance Software",
    operatingSystem: ["Web Browser", "Chrome", "Firefox", "Safari", "Edge"],
    description: "Advanced maritime ESG compliance platform enabling automated environmental reporting for EU MRV, IMO DCS, ETS, and FuelEU Maritime regulations. Features real-time emissions monitoring, automated report generation, and seamless verifier collaboration tools.",
    url: "https://epec-corvux.com",
    downloadUrl: "https://app.epec-corvux.com",
    installUrl: "https://app.epec-corvux.com/register",
    publisher: {
      "@type": "Organization",
      name: "EPℇC Corvux"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available - Start your maritime compliance journey today",
      priceValidUntil: "2025-12-31",
      availability: "InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    featureList: [
      "EU MRV Automated Compliance Reporting",
      "IMO DCS Data Collection System",
      "ETS Carbon Emissions Tracking",
      "FuelEU Maritime Compliance Management",
      "Real-time Vessel Emissions Monitoring",
      "Automated Report Generation & Submission",
      "Verifier Collaboration Portal",
      "Multi-vessel Fleet Management Dashboard",
      "Regulatory Updates & Notifications",
      "Data Analytics & Insights",
      "API Integration Capabilities",
      "Multi-language Support"
    ],
    screenshot: [
      {
        "@type": "ImageObject",
        url: "https://epec-corvux.com/platform-dashboard.png",
        caption: "EPℇC Corvux Dashboard Overview"
      },
      {
        "@type": "ImageObject", 
        url: "https://epec-corvux.com/compliance-reporting.png",
        caption: "Automated Compliance Reporting Interface"
      }
    ],
    softwareVersion: "2.1.0",
    datePublished: "2024-01-15",
    dateModified: "2024-12-01"
  },

  // FAQ Schema para preguntas frecuentes
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What maritime regulations does EPℇC Corvux support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EPℇC Corvux supports all major maritime environmental regulations including EU MRV (Monitoring, Reporting, Verification), IMO DCS (Data Collection System), European Emissions Trading System (ETS), FuelEU Maritime, and MARPOL requirements."
        }
      },
      {
        "@type": "Question", 
        name: "How does automated compliance reporting work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our platform automatically collects vessel data, calculates emissions, generates compliant reports, and submits them to relevant authorities like THETIS-MRV. This reduces manual work by 90% and ensures 100% regulatory compliance."
        }
      },
      {
        "@type": "Question",
        name: "Is EPℇC Corvux suitable for small shipping companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, EPℇC Corvux is designed for shipping companies of all sizes, from single-vessel operators to large international fleets. Our scalable pricing and intuitive interface make compliance accessible for everyone."
        }
      }
    ]
  }
}

export const metadata: Metadata = {
  title: {
    default: "EPℇC Corvux - #1 Maritime ESG Compliance Platform | EU MRV, IMO DCS, ETS Automation",
    template: "%s | EPℇC Corvux - Maritime Compliance Leaders",
  },
  description: "🚢 Leading maritime ESG compliance platform trusted by 500+ vessels. Automate EU MRV, IMO DCS, ETS & FuelEU Maritime reporting with 99.9% accuracy. Real-time monitoring, seamless verifier collaboration, and instant regulatory updates. Start your free trial today!",
  
  keywords: [
    // Primary keywords (high search volume)
    "maritime compliance software",
    "EU MRV reporting",
    "IMO DCS compliance", 
    "maritime ESG platform",
    "shipping compliance automation",
    
    // Long-tail keywords (specific, high intent)
    "automated maritime environmental reporting",
    "EU MRV THETIS compliance software",
    "IMO data collection system platform",
    "maritime emissions tracking software",
    "FuelEU Maritime compliance solution",
    
    // Regulatory frameworks
    "European Emissions Trading System maritime",
    "MARPOL compliance software",
    "maritime carbon footprint tracking",
    "vessel emissions monitoring system",
    "shipping decarbonization platform",
    
    // Technical/industry terms
    "maritime digitalization",
    "shipping data management",
    "vessel performance optimization",
    "maritime sustainability reporting",
    "fleet emissions management",
    
    // Competitive/comparison terms
    "best maritime compliance software",
    "THETIS-MRV integration",
    "maritime compliance automation",
    "shipping ESG software comparison",
    
    // Target audience keywords
    "ship owner compliance solution",
    "maritime operator software",
    "shipping company ESG platform",
    "fleet manager compliance tools",
    "maritime compliance officer software"
  ],
  
  authors: [{ name: "EPℇC Corvux Team", url: "https://epec-corvux.com/about" }],
  creator: "EPℇC Corvux Maritime Solutions",
  publisher: "EPℇC Corvux",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  metadataBase: new URL("https://epec-corvux.com"),
  
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-ES": "/es",
      "fr-FR": "/fr",
    },
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    "bingbot": {
      index: true,
      follow: true,
    }
  },

  openGraph: {
    title: "EPℇC Corvux - Leading Maritime ESG Compliance Platform",
    description: "Trusted by 500+ vessels worldwide. Automate EU MRV, IMO DCS, ETS & FuelEU Maritime compliance with 99.9% accuracy. Real-time monitoring, seamless reporting, instant regulatory updates.",
    type: "website",
    locale: "en_US",
    url: "https://epec-corvux.com",
    siteName: "EPℇC Corvux",
    images: [
      {
        url: "/og-image-main.jpg",
        width: 1200,
        height: 630,
        alt: "EPℇC Corvux Maritime ESG Compliance Platform - Dashboard showing real-time vessel emissions monitoring and automated reporting interface",
        type: "image/jpeg",
      },
      {
        url: "/og-image-logo.png",
        width: 1200,
        height: 1200,
        alt: "EPℇC Corvux - Maritime Compliance Leaders",
        type: "image/png",
      },
    ],
    videos: [
      {
        url: "/demo-video.mp4",
        width: 1280,
        height: 720,
        type: "video/mp4",
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "EPℇC Corvux - #1 Maritime ESG Compliance Platform",
    description: "🚢 Automate maritime compliance for EU MRV, IMO DCS, ETS & FuelEU Maritime. Trusted by 500+ vessels. 99.9% accuracy. Free trial available!",
    creator: "@epecccorvux",
    site: "@epecccorvux",
    images: {
      url: "/twitter-card.jpg",
      alt: "EPℇC Corvux Maritime Compliance Platform Dashboard",
    },
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F1114" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1114" },
  ],

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0F1114"
      }
    ]
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "google-site-verification-code", // Reemplazar con código real de Google Search Console
    yandex: "yandex-verification-code",
    "bing": "bing-verification-code",
  },

  category: "Maritime Technology",
  
  other: {
    // App-specific meta tags
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "EPℇC Corvux",
    "application-name": "EPℇC Corvux",
    "msapplication-TileColor": "#0F1114",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileImage": "/mstile-144x144.png",

    // Performance hints
    "dns-prefetch": "//fonts.googleapis.com",
    "preconnect": "//fonts.gstatic.com",
    "prefetch": "/app",

    // Security
    "referrer": "strict-origin-when-cross-origin",
    "x-ua-compatible": "IE=edge",

    // SEO enhancements
    "rating": "general",
    "distribution": "global",
    "revisit-after": "3 days",
    "language": "EN",
    "geo.region": "US",
    "geo.placename": "Global",
    "geo.position": "worldwide",

    // Industry/business specific
    "industry": "Maritime Technology, ESG Compliance, Environmental Software",
    "target": "shipping companies, maritime operators, fleet managers, compliance officers",
    "business.contact_data.street_address": "Maritime District",
    "business.contact_data.locality": "Global Operations",
    "business.contact_data.country_name": "Worldwide",
    
    // Rich snippets hints
    "article:publisher": "https://epec-corvux.com",
    "article:author": "EPℇC Corvux Team",
    
    // Social media optimization
    "fb:app_id": "your-facebook-app-id",
    "twitter:app:name:iphone": "EPℇC Corvux",
    "twitter:app:name:googleplay": "EPℇC Corvux",
    
    // Performance and loading
    "resource-type": "website",
    "cache-control": "public, max-age=31536000",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//api.epec-corvux.com" />

        {/* Favicons - comprehensive set */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0F1114" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme colors for different platforms */}
        <meta name="theme-color" content="#0F1114" />
        <meta name="msapplication-TileColor" content="#0F1114" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Structured Data for enhanced SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.softwareApplication),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.faq),
          }}
        />

        {/* Critical resource preloading for performance */}
        <link rel="preload" href="/hero-background.webp" as="image" type="image/webp" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        
        {/* Preload key fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Open Graph additional tags for better social sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:video" content="/demo-video.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />

        {/* Additional Twitter Card meta tags */}
        <meta name="twitter:image:alt" content="EPℇC Corvux Maritime ESG Compliance Platform Dashboard" />
        <meta name="twitter:player" content="/demo-video.mp4" />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />

        {/* Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href="https://epec-corvux.com/" />

        {/* Hreflang for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://epec-corvux.com/" />
        <link rel="alternate" hrefLang="es" href="https://epec-corvux.com/es/" />
        <link rel="alternate" hrefLang="fr" href="https://epec-corvux.com/fr/" />
        <link rel="alternate" hrefLang="x-default" href="https://epec-corvux.com/" />

        {/* Additional meta tags for search engines */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />

        {/* Business/contact information for local SEO */}
        <meta name="geo.region" content="Global" />
        <meta name="geo.placename" content="Worldwide Maritime Operations" />
        <meta name="ICBM" content="0.0000,0.0000" />

        {/* App-specific meta tags */}
        <meta name="application-name" content="EPℇC Corvux" />
        <meta name="apple-mobile-web-app-title" content="EPℇC Corvux" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="//api.epec-corvux.com" />
        <link rel="dns-prefetch" href="//cdn.epec-corvux.com" />
        <link rel="preconnect" href="https://api.epec-corvux.com" />

        {/* Content Security Policy (comentado para implementar después) */}
        {/*
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.epec-corvux.com;"
        />
        */}

        {/* Rich Snippets for Software Application */}
        <meta name="software:price" content="Free Trial Available" />
        <meta name="software:price:currency" content="USD" />
        <meta name="software:operating_system" content="Web Browser" />
        <meta name="software:application_category" content="Business Application" />

        {/* Industry-specific meta tags */}
        <meta name="industry" content="Maritime Technology" />
        <meta name="sector" content="Environmental Compliance" />
        <meta name="target-audience" content="Maritime Industry, Shipping Companies, Fleet Operators" />

        {/* Copyright and ownership */}
        <meta name="copyright" content="© 2024 EPℇC Corvux. All rights reserved." />
        <meta name="author" content="EPℇC Corvux Development Team" />
        <meta name="owner" content="EPℇC Corvux Maritime Solutions" />

        {/* Page-specific meta tags */}
        <meta name="page-topic" content="Maritime ESG Compliance Software" />
        <meta name="page-type" content="Business Landing Page" />
        <meta name="audience" content="Maritime Industry Professionals" />

        {/* Social proof and trust signals */}
        <meta name="rating" content="4.8/5 stars" />
        <meta name="review-count" content="127 reviews" />
        <meta name="customer-count" content="500+ vessels" />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content">
          {children}
        </div>

        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Core Web Vitals monitoring
            if (typeof window !== 'undefined') {
              // Track page load performance
              window.addEventListener('load', function() {
                // Largest Contentful Paint
                const observer = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  console.log('LCP:', lastEntry.startTime);
                  // Send to analytics if needed
                });
                observer.observe({type: 'largest-contentful-paint', buffered: true});

                // First Input Delay
                const fidObserver = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    console.log('FID:', entry.processingStart - entry.startTime);
                  }
                });
                fidObserver.observe({type: 'first-input', buffered: true});

                // Cumulative Layout Shift
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                      clsValue += entry.value;
                    }
                  }
                  console.log('CLS:', clsValue);
                });
                clsObserver.observe({type: 'layout-shift', buffered: true});
              });

              // Track user engagement
              let engagementTime = 0;
              let isInBackground = false;
              
              document.addEventListener('visibilitychange', () => {
                isInBackground = document.hidden;
              });

              setInterval(() => {
                if (!isInBackground) {
                  engagementTime += 1000;
                }
              }, 1000);

              // Send engagement data on page unload
              window.addEventListener('beforeunload', () => {
                if (navigator.sendBeacon) {
                  navigator.sendBeacon('/api/analytics', JSON.stringify({
                    engagement_time: engagementTime,
                    page_url: window.location.href,
                    user_agent: navigator.userAgent,
                    timestamp: Date.now()
                  }));
                }
              });
            }
          `,
          }}
        />

        {/* Structured data for breadcrumbs (if applicable) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://epec-corvux.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Maritime Compliance Platform",
                  "item": "https://epec-corvux.com/#platform"
                }
              ]
            }),
          }}
        />

        {/* Google Analytics (comentado para implementar con el código real) */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'EPℇC Corvux - Maritime ESG Compliance Platform',
                custom_map: {'custom_parameter': 'maritime_compliance'}
              });
            `,
          }}
        />
        */}

        {/* Microsoft Clarity (opcional) */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
            `,
          }}
        />
        */}

        {/* Hotjar (opcional) */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        */}
      </body>
    </html>
  )
}
