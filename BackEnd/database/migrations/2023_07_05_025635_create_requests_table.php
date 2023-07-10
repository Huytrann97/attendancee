<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestsTable extends Migration
{
    public function up()
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger('user_accept_id');
            $table->foreign('user_accept_id')->references('id')->on('users');
            $table->datetime('accept_time')->nullable();
            $table->unsignedInteger('request_type_id');
            $table->foreign('request_type_id')->references('id')->on('request_types');
            $table->integer('status');
            $table->string('reason')->nullable();
            $table->datetime('start_from');
            $table->datetime('ended_at');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('requests');
    }
}
