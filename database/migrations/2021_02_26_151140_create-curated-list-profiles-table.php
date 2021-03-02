<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCuratedListProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curated_list_profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger("curated_list_id");
            $table->string('profile_id', 500);
            $table->longText('profile_json');
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('curated_list_profile');
    }
}
