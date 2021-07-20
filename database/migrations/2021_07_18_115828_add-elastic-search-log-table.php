<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddElasticSearchLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('elastic_search_logs', function (Blueprint $table) {
            $table->string('query', 2000);
            $table->integer('query_time_ms');

            $table->boolean('timed_out');
            $table->smallInteger('failed_shareds_count');
            $table->smallInteger('skipped_shared_count');
            $table->bigInteger('total_hits');

            $table->timestamp('created_at')->index()->default(new Expression('CURRENT_TIMESTAMP()'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
