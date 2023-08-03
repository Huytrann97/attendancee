<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\EloquentUserRepositoryInterface;
use App\Infrastructure\Repositories\EloquentUserRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->bind(EloquentUserRepositoryInterface::class, EloquentUserRepository::class);

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
