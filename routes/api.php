<?php

use App\Http\Controllers\ApiControllers\AuthController;
use App\Http\Controllers\ApiControllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiControllers\DhtController;
use App\Http\Controllers\ApiControllers\NodeSendLogController;
use App\Http\Controllers\ApiControllers\PlantController;
use App\Http\Controllers\ApiControllers\ProfileController;
use App\Http\Controllers\ApiControllers\SoilMoistureController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'authenticate');
    Route::get('/logout', 'logout')->middleware('auth:sanctum');
    Route::post('/register', 'store');
});

Route::prefix('dashboard')->name('api.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    // Route::post('/', [DashboardController::class, 'store'])->name('store');
    // Route::get('/{id}', [DashboardController::class, 'show'])->name('show');
    // Route::put('/{id}', [DashboardController::class, 'update'])->name('update');
    // Route::delete('/{id}', [DashboardController::class, 'destroy'])->name('destroy');
});

Route::prefix('plants')->name('api.plants.')->group(function () {
    // Route::get('/', [PlantController::class, 'index'])->name('index');
    // Route::post('/', [PlantController::class, 'store'])->name('store');
    Route::get('/{plant}', [PlantController::class, 'show'])->name('show');
    // Route::put('/{plant}', [PlantController::class, 'update'])->name('update');
    // Route::delete('/{plant}', [PlantController::class, 'destroy'])->name('destroy');
    Route::get('/{plant}/soil-moistures', [PlantController::class, 'showSoilMoistures'])->name('show.soilMoistures');
});

Route::prefix('logs')->name('api.logs.')->group(function () {
    Route::get('/', [NodeSendLogController::class, 'index'])->name('index');
    // Route::post('/', [NodeSendLogController::class, 'store'])->name('store');
    // Route::get('/{nodeSendLog}', [NodeSendLogController::class, 'show'])->name('show');
    // Route::put('/{nodeSendLog}', [NodeSendLogController::class, 'update'])->name('update');
    // Route::delete('/{nodeSendLog}', [NodeSendLogController::class, 'destroy'])->name('destroy');
});

Route::prefix('profile')->name('api.profile.')->group(function () {
    Route::get('/', [ProfileController::class, 'index'])->name('index');
    // Route::post('/', [ProfileController::class, 'store'])->name('store');
    // Route::get('/{id}', [ProfileController::class, 'show'])->name('show');
    // Route::put('/{id}', [ProfileController::class, 'update'])->name('update');
    // Route::delete('/{id}', [ProfileController::class, 'destroy'])->name('destroy');
});

Route::prefix('sensor/dht')->name('api.dht.')->group(function () {
    // Route::get('/', [DhtController::class, 'index'])->name('index');
    Route::post('/', [DhtController::class, 'store'])->name('store');
    // Route::get('/{id}', [DhtController::class, 'show'])->name('show');
    // Route::put('/{id}', [DhtController::class, 'update'])->name('update');
    // Route::delete('/{id}', [DhtController::class, 'destroy'])->name('destroy');
});

Route::prefix('sensor/soil-moisture')->name('api.soil-moisture.')->group(function () {
    // Route::get('/', [SoilMoistureController::class, 'index'])->name('index');
    Route::post('/', [SoilMoistureController::class, 'store'])->name('store');
    // Route::get('/{id}', [SoilMoistureController::class, 'show'])->name('show');
    // Route::put('/{id}', [SoilMoistureController::class, 'update'])->name('update');
    // Route::delete('/{id}', [SoilMoistureController::class, 'destroy'])->name('destroy');
});
