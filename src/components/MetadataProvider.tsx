// components/MetadataProvider.tsx
'use client';

import { useEffect } from 'react';

interface MetadataProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const MetadataProvider = ({ title, description, imageUrl, url }: MetadataProps) => {
  useEffect(() => {
    // Update the document title
    document.title = title;

    // Update Open Graph metadata
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) metaDescription.content = description;

    const metaOpenGraphTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    if (metaOpenGraphTitle) metaOpenGraphTitle.content = title;

    const metaOpenGraphDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (metaOpenGraphDescription) metaOpenGraphDescription.content = description;

    const metaOpenGraphUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
    if (metaOpenGraphUrl) metaOpenGraphUrl.content = url;

    const metaOpenGraphImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;
    if (metaOpenGraphImage) metaOpenGraphImage.content = imageUrl;

    // Add favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) favicon.href = '/Images/AppLogo.ico';
  }, [title, description, imageUrl, url]);

  return null; // No need to render anything
};

export default MetadataProvider;
