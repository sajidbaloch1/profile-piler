<?php

namespace Tests;

use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function loggedInAs(Authenticatable $user = null): Authenticatable
    {
        if (is_null($user)) {
            $user = User::factory()->make();
        }
        $this->actingAs($user);
        return $user;
    }
}
