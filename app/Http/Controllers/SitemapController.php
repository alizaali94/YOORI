<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Page;
use App\Models\Product;
use App\Models\SellerProfile;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function products()
    {
        $products = Product::all();
        return response()->view('sitemap.product-details', compact('products'))->header('Content-Type', 'text/xml');
    }
    public function blogs()
    {
        $blogs = Blog::all();
        return response()->view('sitemap.blog', compact('blogs'))->header('Content-Type', 'text/xml');
    }
    public function categories()
    {
        $categories = Category::all();
        return response()->view('sitemap.category', compact('categories'))->header('Content-Type', 'text/xml');
    }
    public function brands()
    {
        $brands = Brand::all();
        return response()->view('sitemap.brand', compact('brands'))->header('Content-Type', 'text/xml');
    }
    public function shops()
    {
        $shops = SellerProfile::all();
        return response()->view('sitemap.shop', compact('shops'))->header('Content-Type', 'text/xml');
    }
    public function pages()
    {
        $pages = Page::all();
        return response()->view('sitemap.page', compact('pages'))->header('Content-Type', 'text/xml');
    }
}
