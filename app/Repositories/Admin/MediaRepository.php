<?php

namespace App\Repositories\Admin;

use App\Models\Media;
use App\Repositories\Interfaces\Admin\MediaInterface;
use App\Traits\ImageTrait;
use Sentinel;
use DB;

class MediaRepository implements MediaInterface
{
    use ImageTrait;
    public function get($id)
    {
        return Media::find($id);
    }

    public function all()
    {
        return Media::all();
    }

    public function getAll()
    {
        return Media::latest()->when(Sentinel::getUser()->user_type == 'seller', function ($q){
            $q->where('user_id', Sentinel::getUser()->id);
        });
    }

    public function paginate($request, $limit)
    {
        $medias = Media::query();
        $query = '';
        $sorting = '';

        if ($request->q != '') {
            $search = $request->q;
            $medias->where('name', 'like', '%'.$search.'%');
        }

        $sorting = $request->s;
        switch ($sorting) {
            case 'latest_top':
                $medias->orderByDesc('id');
                break;
            case 'oldest_top':
                $medias->orderBy('id');
                break;
            case 'smallest_top':
                $medias->orderBy('size', 'asc');
                break;
            case 'largest_top':
                $medias->orderByDesc('size');
                break;
            default:
                $medias->orderBy('id', 'desc');
                break;
        }

        return $medias->when(Sentinel::getUser()->user_type == 'seller', function ($q){
            $q->where('user_id', Sentinel::getUser()->id);
        })->paginate($limit)->appends(request()->query());
    }

    public function store($image, $type = 'image',$token=null)
    {
        DB::beginTransaction();
        try{
            if ($type == 'image'):
                $response = $this->saveImage($image, '_media_', true,$token);
            else:
                $response = $this->saveFile($image, $type);
            endif;

            DB::commit();
            return $response;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function delete($id)
    {
        DB::beginTransaction();
        try {
            $media = $this->get($id);

            if ($media->type == 'image'):
                $this->deleteImage($media->image_variants, $media->storage);
            endif;

            $this->deleteFile($media->original_file, $media->storage);
            $media->delete();

            DB::commit();
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }
}
