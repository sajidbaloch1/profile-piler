<?php

namespace App\Http\Controllers;

use App\Models\CuratedList;
use App\Models\CuratedListTag;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CuratedListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('curated-list.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('curated-list.create', [
            'tags' => Tag::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'seo_url' => 'required|unique:curated_lists',
            'sub_heading' => 'required',
            'description' => 'required'
        ]);

        DB::beginTransaction();

        $list = new CuratedList();
        $list->title = $request->get('title');
        $list->seo_url = $request->get('seo_url');
        $list->sub_heading = $request->get('sub_heading');
        $list->description = $request->get('description');
        $list->is_active =  $request->get('is_active') === 'on';
        $list->save();

        if ($request->filled('tags')) {
            foreach ($request->get('tags') as $tagId) {
                $tag = new CuratedListTag();
                $tag->curated_list_id = $list->id;
                $tag->tag_id = $tagId;
                $tag->save();
            }
        }

        DB::commit();

        return redirect()->route("curated-lists.profiles", ['id' => $list->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function updateProfile($id)
    {
        return view('curated-list.profiles', ['list' => CuratedList::find($id)]);
    }
}
