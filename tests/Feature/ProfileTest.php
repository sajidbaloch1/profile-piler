<?php

use App\Models\RecentlySearchedProfile;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class ProfileTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testSearchProfileWorking()
    {
        $response = $this->call('GET', 'api/profiles');
        $data = json_decode($response->content());
        $this->assertEquals(200, $response->status());
        $this->assertEquals(count($data->profiles), 10);

        $ids = array_map(function ($p) {
            return $p->Id;
        }, $data->profiles);
        $popupatedRecordCount = RecentlySearchedProfile::whereIn('profileId', $ids)->count();
        // assert that the recently search profile
        $this->assertGreaterThanOrEqual(count($data->profiles), $popupatedRecordCount + 10, 'Recently search profiles has been populated');
    }

    public function testPlatformFilterApplied()
    {
        $platform = 'Facebook';
        $response = $this->call('GET', 'api/profiles', ['platforms' => $platform]);
        $this->assertEquals(200, $response->status());

        $data = json_decode($response->content());
        $otherPlatformProfiles = array_filter($data->profiles, function ($profile) use ($platform) {
            return $profile->Platform !== $platform;
        });
        $this->assertEquals(0, count($otherPlatformProfiles), 'Other platform profiles are not returned');
    }
}
