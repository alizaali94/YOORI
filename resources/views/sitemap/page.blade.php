<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc> {{ url('') . '' }}</loc>
        <changefreq>daily</changefreq>
        <priority>1</priority>
    </url>
    <url>
        <loc> {{ url('') . '/categories' }}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc> {{ url('') . '/brands' }}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc> {{ url('') . '/campaigns' }}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc> {{ url('') . '/sellers' }}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc> {{ url('') . '/blogs' }}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
        @foreach ($pages as $page)
            <url>
                <loc> {{ url('') . '/page/' . $page->link }}</loc>
                <lastmod>{{ $page->created_at->tz('UTC')->toAtomString() }}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
        @endforeach
</urlset>
