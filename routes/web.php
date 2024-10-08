<?php

use App\Http\Controllers\WebControllers\AuthController;
use App\Http\Controllers\WebControllers\DashboardController;
use App\Http\Controllers\WebControllers\NodeController;
use App\Http\Controllers\WebControllers\NodeSendLogController;
use App\Http\Controllers\WebControllers\PlantController;
use App\Http\Controllers\WebControllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index', [
        'title' => 'Smart Farming',
    ]);
});

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'index')->name('login')->middleware('guest');
    Route::post('/login', 'authenticate');
    Route::get('/logout', 'logout')->name('logout')->middleware('auth');
});

Route::middleware('auth')->prefix('/dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    // Route::get('/create', [DashboardController::class, 'create'])->name('create');
    // Route::post('/', [DashboardController::class, 'store'])->name('store');
    // Route::get('/{id}', [DashboardController::class, 'show'])->name('show');
    // Route::get('/{id}/edit', [DashboardController::class, 'edit'])->name('edit');
    // Route::put('/{id}', [DashboardController::class, 'update'])->name('update');
    // Route::delete('/{id}', [DashboardController::class, 'destroy'])->name('destroy');
});


Route::middleware('auth')->prefix('/nodes')->name('nodes.')->group(function () {
    Route::get('/', [NodeController::class, 'index'])->name('index');
    // Route::get('/create', [NodeController::class, 'create'])->name('create');
    Route::post('/', [NodeController::class, 'store'])->name('store');
    Route::get('/{node}', [NodeController::class, 'show'])->name('show');
    Route::get('/{node}/edit', [NodeController::class, 'edit'])->name('edit');
    Route::put('/{node}', [NodeController::class, 'update'])->name('update');
    Route::delete('/{node}', [NodeController::class, 'destroy'])->name('destroy');
});

Route::middleware('auth')->prefix('/tanaman')->name('plants.')->group(function () {
    Route::get('/', [PlantController::class, 'index'])->name('index');
    // Route::get('/create', [PlantController::class, 'create'])->name('create');
    Route::post('/', [PlantController::class, 'store'])->name('store');
    // Route::get('/{plant}', [PlantController::class, 'show'])->name('show');
    Route::get('/{plant}/edit', [PlantController::class, 'edit'])->name('edit');
    Route::put('/{plant}', [PlantController::class, 'update'])->name('update');
    Route::delete('/{plant}', [PlantController::class, 'destroy'])->name('destroy');
});

Route::middleware('auth')->prefix('/log-pengiriman')->name('node-send-logs.')->group(function () {
    Route::get('/', [NodeSendLogController::class, 'index'])->name('index');
    // Route::post('/', [NodeSendLogController::class, 'find'])->name('find');
    // Route::get('/create', [NodeSendLogController::class, 'create'])->name('create');
    // Route::post('/', [NodeSendLogController::class, 'store'])->name('store');
    // Route::get('/{nodeSendLog}', [NodeSendLogController::class, 'show'])->name('show');
    // Route::get('/{nodeSendLog}/edit', [NodeSendLogController::class, 'edit'])->name('edit');
    // Route::put('/{nodeSendLog}', [NodeSendLogController::class, 'update'])->name('update');
    // Route::delete('/{nodeSendLog}', [NodeSendLogController::class, 'destroy'])->name('destroy');
});

Route::middleware('auth')->prefix('/profile')->name('profile.')->group(function () {
    Route::get('/', [ProfileController::class, 'index'])->name('index');
    // Route::get('/create', [ProfileController::class, 'create'])->name('create');
    // Route::post('/', [ProfileController::class, 'store'])->name('store');
    // Route::get('/{user}', [ProfileController::class, 'show'])->name('show');
    // Route::get('/{user}/edit', [ProfileController::class, 'edit'])->name('edit');
    // Route::put('/', [ProfileController::class, 'update'])->name('update');
    // Route::put('/change-password', [ProfileController::class, 'changePassword'])->name('change-password');
    // Route::delete('/{user}', [ProfileController::class, 'destroy'])->name('destroy');
});
