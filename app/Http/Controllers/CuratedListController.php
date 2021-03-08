<?php

namespace App\Http\Controllers;

use App\Features\CuratedList\UpdateCuratedListProfile;
use App\Models\CuratedList;
use App\Models\CuratedListProfile;
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
            foreach ($request->get('tags') as $tag) {
                $dbTag = $this->addOrLoadTag($tag);
                $tag = new CuratedListTag();
                $tag->curated_list_id = $list->id;
                $tag->tag_id = $dbTag->id;
                $tag->save();
            }
        }

        DB::commit();

        return redirect()->route("curated-lists.profiles", ['id' => $list->id]);
    }

    private function addOrLoadTag($tagIdentity)
    {
        $tagDb = null;
        if (is_numeric($tagIdentity)) {
            $tag = Tag::find($tagIdentity);
            if (!is_numeric($tag)) {
                $tagDb = $tag;
            }
        } else {
            $tagRow = Tag::where('name', $tagIdentity)->first();
            if (is_null($tagRow)) {
                $tagRow = new Tag;
                $tagRow->name = $tagIdentity;
                $tagRow->save();
            }
            $tagDb = $tagRow;
        }
        return $tagDb;
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
        $list = CuratedList::with('tags')->find($id);
        return view('curated-list.edit', [
            'tags' => Tag::all()->diff($list->tags),
            'list' => CuratedList::find($id)
        ]);
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
        $request->validate([
            'title' => 'required',
            'seo_url' => 'required',
            'sub_heading' => 'required',
            'description' => 'required'
        ]);

        DB::beginTransaction();

        $list = CuratedList::find($id);
        $list->title = $request->get('title');
        $list->seo_url = $request->get('seo_url');
        $list->sub_heading = $request->get('sub_heading');
        $list->description = $request->get('description');
        $list->is_active =  $request->get('is_active') === 'on';
        $list->save();
        $list->listTags()->delete();

        if ($request->filled('tags')) {
            foreach ($request->get('tags') as $tag) {
                $dbTag = $this->addOrLoadTag($tag);
                $tag = new CuratedListTag();
                $tag->curated_list_id = $list->id;
                $tag->tag_id = $dbTag->id;
                $tag->save();
            }
        }

        DB::commit();

        return redirect()->route("curated-lists.index");
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

    public function storeProfile($id, Request $request)
    {
        return (new UpdateCuratedListProfile($id, $request->get('selectedProfiles')))->execute();
    }

    public function profiles($id)
    {
        return CuratedListProfile::where("curated_list_id", $id)->get()->map(function ($p) {
            return json_decode($p->profile_json);
        });
    }
}
