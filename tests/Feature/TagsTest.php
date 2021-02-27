<?php

namespace Tests\Feature;

use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TagsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_listing()
    {
        $this->loggedInAs();
        $tags = Tag::factory()->count(10)->create();
        $response = $this->get(route("tags.index"))->assertOk();
        foreach ($tags as $tag) {
            $response->assertSeeText($tag->name);
        }
    }

    public function test_show()
    {
        $this->loggedInAs();
        $tag = Tag::factory()->create();
        $this->get(route("tags.show", ['tag' => $tag->id]))
            ->assertOk()
            ->assertSeeText($tag->name);
    }

    public function test_create()
    {
        $this->loggedInAs();
        $this->get(route("tags.create"))
            ->assertOk()
            ->assertSeeText("Name");
    }

    public function test_store()
    {
        $this->loggedInAs();
        $tagName = "some Name";
        $this->post(route('tags.store'), ["name" => $tagName])
            ->assertRedirect()
            ->assertSessionHasNoErrors()
            ->assertDatabaseCount((new Tag)->getTable(), 1)
            ->assertDatabaseHas((new Tag)->getTable(), ['name' => $tagName]);
    }

    public function test_edit()
    {
        $this->loggedInAs();
        $tag = Tag::factory()->create();
        $this->get(route("tags.edit"), ['tag' => $tag->id])
            ->assertOk()
            ->assertSeeText($tag->name);
    }

    public function test_update()
    {
        $this->loggedInAs();
        $tag = Tag::factory()->create();
        $this->put(route('tags.update', ['tag' => $tag->id]))
            ->assertOk()
            ->assertSeeText($tag->name);
    }
}
